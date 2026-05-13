import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { addTodo } from "../services/todoService.js";

class AddComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleClose = () => {
    this.setState({
      title: "",
    });
    this.props.closeModal();
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleAdd = () => {
    const title = this.state.title.trim();
    if (!title) {
      return;
    }

    addTodo({ title });
    this.handleClose();
    this.props.setIsLoading();
  };

  render() {
    return (
      <Modal show={this.props.isShow} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm công việc mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="todoTitle">
              <Form.Label>Tên công việc</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Nhập tên công việc"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={this.handleAdd}>
            Thêm
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddComponent;
