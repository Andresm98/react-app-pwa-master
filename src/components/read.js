import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
 
 
export default function Read() {
  let navigation = useNavigate();
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://61919f0e41928b00176900cb.mockapi.io/fakeData`)
      .then((response) => {
        console.log(response.data)
        setAPIData(response.data);
      })
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox Value', checkbox)
  }

  const getData = () => {
    axios.get(`https://61919f0e41928b00176900cb.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
      })
  }

  const onDelete = (id) => {

    Swal.fire({
      title: 'Está seguro de eliminar el dato? ' + id,
      text: "Recuerde que eliminar los datos es una acción irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5EAD1D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No eliminar.'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://61919f0e41928b00176900cb.mockapi.io/fakeData/${id}`)
          .then(() => {
            getData();
          })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El usuario fue eliminado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'El usuario no pudo ser eliminado correctamente:(',
          showConfirmButton: false,
          timer: 1800
        })
      }
    })
  }

  const navigationAdd = () => {
    navigation('/crear')
  }

  return (
    <div>
      <Button onClick={navigationAdd}>Agregar Usuarios</Button>
      <Button onClick="">Ver reporte de los usuarios</Button>
      <Button onClick="">Visualizar la data especifica </Button>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Primer Nombre</Table.HeaderCell>
            <Table.HeaderCell>Apellido</Table.HeaderCell>
            <Table.HeaderCell>Autorizado</Table.HeaderCell>
            <Table.HeaderCell>Operaciones</Table.HeaderCell>
            <Table.HeaderCell>..</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                <Link to='/actualizar'>
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Actualizar</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Eliminar</Button>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}