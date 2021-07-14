import React from 'react'
import { Col,Form } from 'react-bootstrap'

const Display = ({clickText}) => {
    return (
        <Col md={12} className="mb-0">
           <p className="display">
             <p className="">{clickText.length==0? '0':clickText}</p>
             <p className="float__right">112123252322222</p>
           </p>
        </Col>
    )
}

export default Display
