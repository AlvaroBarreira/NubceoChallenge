import React, { useState, useContext, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { DataContext } from '../../Contexts/ProviderData'

function PopUp() {

    const { lgShow, setLgShow, data} = useContext(DataContext)

    const { members, albums } = data;

    console.log(members)

    useEffect(() => {

               
               


    }, [])


    return (
    <>
     
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
           {data.name}
          
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>    
            <p>Year: {data.year}</p>
            <p>Genre: {data.genre}</p>
            <p>Country: {data.country}</p>
            <p>Members: </p>
           <ul>
            {
                members.map((mem) => {
                    return (
                        <li>{mem.name}</li>
                    )
                })
            }
            </ul>
            <p>Albums:</p>
            <ul>
            {   

                albums ? (
                     albums.map((disc) => {
                    return (
                        <li>{disc}</li>
                    )
                })
                ) : (
                    <p>No information about it</p>
                )
               
            }
            </ul>
        </Modal.Body>
      </Modal>
      
      </>
      )
}

export default PopUp
