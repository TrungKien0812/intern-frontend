import React from "react";
import { Modal, Button } from "react-bootstrap";
import { deleteById, getAll } from "../services/studentService.js";

class DeleteComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClose = () => {
    this.props.closeModal();
  };
  handleDelete = () => {
    deleteById(this.props.deleteStudent.id);
    console.log(getAll());
    this.handleClose();
    this.props.setIsLoading();
  };
  render() {
    return (
      <>
        <Modal show={this.props.isShow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>Do you want to delete {this.props.deleteStudent.name} </span>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default DeleteComponent;
