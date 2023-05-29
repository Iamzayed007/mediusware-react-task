import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ModalContent = ({show,handleClose,handleAllCountry,handleUsCountry}) => {
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
           
        <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" type="button" onClick={()=>handleAllCountry('allContacts')} data-bs-toggle="modal" data-bs-target="#exampleModal" >All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" onClick={()=>handleUsCountry('usContacts')} >US Contacts</button>
                <button className="btn btn-lg btn-outline-secondary" type="button" onClick={handleClose} >Close</button>
                </div>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalContent