import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image, Button } from "react-bootstrap";
import Operatingtime from './Operatingtime';
import Review from './Review';

function ViewRest() {
  const params = useParams()   // vere componentsilot share chyndathond usestate use chynila
  // console.log(params.id);



  const [allrestaurant, setAllresataurant] = useState([])

  // function to api call for data inside json files

  const getrestaurantdata = async () => {
    await fetch('/restaurants.json')
      .then(data => {
        data.json().then(result => {
          setAllresataurant(result.restaurants)
        })
      })
  }
  const restData = allrestaurant.find(item => item.id == params.id)
  // console.log(restData);

  useEffect(() => { getrestaurantdata() }, [])  // duplication avoid chyn vendi empty array use chyn


  return (
    <>
      {restData ? (
        <Row>
          <Col>
            <Image className='p-5' src={restData.photograph} fluid />
          </Col>
          <Col className='mt-5'>
            <h1>{restData.name} </h1>
            <h2>{restData.neighbourhood}</h2>
            <h3>Cusine type:{restData.cuisine_type}</h3>
            <h4>Address:{restData.address}</h4>
            <Operatingtime timedata={restData.operating_hours}className="mt-8"></Operatingtime>
            
            <Review reviewData={restData.reviews}></Review>
          </Col>
        </Row>

      ) : 'null'}

    </>
  )
}

export default ViewRest