import React from 'react'
import { useState, useEffect } from 'react'
import RestCard from './RestCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Restaurantlist() {
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
useEffect(() => { getrestaurantdata() }, [])

return (
   <Row>
      {
         allrestaurant.map(item => (
            <RestCard data={item} />
         ))
      }
   </Row>
)
            }
       
export default Restaurantlist 