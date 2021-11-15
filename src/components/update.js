import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



export default function Update() {
  let history =  useNavigate();
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setCheckbox(localStorage.getItem('Checkbox Value'));
  }, []);

  const updateAPIData = () => {
    axios.put(`https://61919f0e41928b00176900cb.mockapi.io/fakeData/${id}`, {
      firstName,
      lastName,
      checkbox
    }).then(() => {
      history('/leer')
    })
  }
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Nombre</label>
          <input placeholder='Nombre' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Apellido</label>
          <input placeholder='Apellido' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Aceptar las condiciones de uso' checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button type='submit' onClick={updateAPIData}>Actualizar</Button>
      </Form>
    </div>
  )
}