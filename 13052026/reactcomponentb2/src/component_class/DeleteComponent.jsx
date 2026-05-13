import React from "react";
import { Modal, Button } from "react-bootstrap";
import { deleteById, getAll } from "../services/todoService.js";

class DeleteComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    this.props.closeModal();
  };

  handleDelete = () => {
    deleteById(this.props.deleteTodo.id);
    console.log(getAll());
    this.handleClose();
    this.props.setIsLoading();
  };

  render() {
    return (
      <>
        <Modal show={this.props.isShow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Xóa công việc</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>
              Bạn có muốn xóa công việc &quot;{this.props.deleteTodo.title}
              &quot; không?
            </span>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Đóng
            </Button>
            <Button variant="primary" onClick={this.handleDelete}>
              Xóa
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default DeleteComponent;
