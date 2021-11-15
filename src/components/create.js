import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Environment from '../environment/access_data';
export default function Create() {

  console.log('Data URL: '+Environment);

  let history = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const postData = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(checkbox);
    axios.post(`https://61919f0e41928b00176900cb.mockapi.io/fakeData`, {
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
          <label>Agregar Nombre</label>
          <input placeholder='Nombre' onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Agregar Apellidos</label>
          <input placeholder='Apellido' onChange={(e) => setLastName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Aceptar las condiciones de uso' onChange={(e) => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button onClick={postData} type='submit'>Crear</Button>
      </Form>
    </div>
  )
}