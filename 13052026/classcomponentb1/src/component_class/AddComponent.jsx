import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { addStudent } from "../services/studentService.js";

class AddComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      classname: "",
    };
  }

  handleClose = () => {
    this.setState({
      name: "",
      age: "",
      classname: "",
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
    const name = this.state.name.trim();
    if (!name) {
      return;
    }

    const age = this.state.age.trim();
    const classname = this.state.classname.trim();

    addStudent({
      name,
      age: age ? Number(age) : null,
      classname: classname || undefined,
    });
    this.handleClose();
    this.props.setIsLoading();
  };

  render() {
    return (
      <Modal show={this.props.isShow} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="studentName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter student name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="studentAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                placeholder="Enter student age"
                value={this.state.age}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="studentClassname">
              <Form.Label>Class</Form.Label>
              <Form.Control
                type="text"
                name="classname"
                placeholder="Enter class name"
                value={this.state.classname}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddComponent;
