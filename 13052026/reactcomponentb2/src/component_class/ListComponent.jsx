import React from "react";
import { getAll, toggleCompleted } from "../services/todoService.js";
import DeleteComponent from "./DeleteComponent.jsx";
import AddComponent from "./AddComponent.jsx";

class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      isShowModal: false,
      isShowAddModal: false,
      deleteTodo: {
        id: "",
        title: "",
      },
      isLoading: false,
    };
  }

  setIsLoading = () => {
    this.setState({
      isLoading: true,
    });
  };

  closeModal = () => {
    this.setState({
      isShowModal: false,
    });
  };

  openAddModal = () => {
    this.setState({
      isShowAddModal: true,
    });
  };

  closeAddModal = () => {
    this.setState({
      isShowAddModal: false,
    });
  };

  handleToggleCompleted = (id) => {
    toggleCompleted(id);
    this.setIsLoading();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isLoading !== this.state.isLoading) {
      this.setState({
        todoList: [...getAll()],
        isLoading: false,
      });
    }
  }

  componentDidMount() {
    this.setState({
      todoList: [...getAll()],
    });
  }

  render() {
    return (
      <>
        {console.log("---------list render ---------------")}
        <h1 className={"my-title"}>Danh sách công việc</h1>
        <button
          onClick={this.openAddModal}
          className={"btn btn-sm btn-success w-25"}
        >
          Thêm công việc
        </button>
        <table className={"table table-striped table-dark"}>
          <thead>
            <tr>
              <th>STT</th>
              <th>ID</th>
              <th>Tên công việc</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todoList.map((todo, index) => (
              <tr key={todo.id}>
                <td>{index + 1}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? "Đã xong" : "Chưa xong"}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      this.handleToggleCompleted(todo.id);
                    }}
                    className={`btn btn-sm ${
                      todo.completed ? "btn-warning" : "btn-success"
                    }`}
                  >
                    {todo.completed
                      ? "Đánh dấu chưa xong"
                      : "Đánh dấu hoàn thành"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      this.setState({
                        isShowModal: true,
                        deleteTodo: todo,
                      });
                    }}
                    className={"btn btn-sm btn-danger"}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <AddComponent
          isShow={this.state.isShowAddModal}
          closeModal={this.closeAddModal}
          setIsLoading={this.setIsLoading}
        />
        <DeleteComponent
          deleteTodo={this.state.deleteTodo}
          isShow={this.state.isShowModal}
          closeModal={this.closeModal}
          setIsLoading={this.setIsLoading}
        />
      </>
    );
  }
}

export default ListComponent;
