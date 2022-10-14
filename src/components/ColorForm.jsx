import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import GridColor from "./GridColor";

const ColorForm = () => {
  const colorLS = JSON.parse(localStorage.getItem('colorkey')) || [];
  const [colors, setColors] = useState(colorLS);
  const [color, setColor] = useState('#000');
  
  useEffect(()=>{
    localStorage.setItem('colorkey', JSON.stringify(colors))
  },[colors])

  const deleteColor = (_color)=>{
    const newColors = colors.filter((tone)=> tone !== _color);
    setColors(newColors) 
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setColors([...colors,color]);
    console.log(e.target)
  }
  return (
    <div>
      <Card border="info">
        <Card.Header className="fw-bold" >Paleta de colores 🎨​</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex">
              <Form.Label>Selecciona un color: </Form.Label>
              <Form.Control
                type="color"
                placeholder="Ej: #577A89"
                className="mx-2"
                onChange={(e) => setColor(e.target.value)}
                defaultValue='#000'
              />
              <Button variant="primary" type="submit">
                <PlusCircle /> Agregar</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <GridColor colors={colors} deleteColor={deleteColor}></GridColor>
    </div>
  );
};

export default ColorForm;
