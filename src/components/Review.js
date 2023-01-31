import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

function Review({reviewData}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Reviews
            </Button>
            <div style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                        {
                            reviewData.map(item => 
                                <>
                                 <h6>{item.name}{item.data}</h6>
                                 <h6>{item.rating}</h6>
                                 <h6>{item.comments}</h6>
                                 </>
                               
                    )
                }

                                </div>
            </Collapse>
            </div>
        </>
    )

}

export default Review