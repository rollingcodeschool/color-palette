import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";

const CardColor = ({color, deleteColor}) => {
  return (
    <Col md={4} lg={3} className='mb-3'>
    <Card>
      <div className="boxColor w-100" style={{background:color}}></div>
      <Card.Body className="d-flex justify-content-between">
        <Card.Title>{color}</Card.Title>
        <Button variant="outline-danger" onClick={()=>deleteColor(color)}><XCircle/> Borrar</Button>
      </Card.Body>
    </Card>
    </Col>
    
  );
};

export default CardColor;
