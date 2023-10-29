import * as React from 'react'
import { connect } from 'react-redux'
import { TodosInterface, fetchTodos, deleteTodo } from '../actions/todos'
import { StoreState } from '../reducers'

interface AppProps {
  todos: TodosInterface[]
  fetchTodos: () => void
  deleteTodo: typeof deleteTodo
}

class _App extends React.Component<AppProps> {
  // componentDidMount(): void {
  //   this.props.fetchTodos()
  // }

  onDeleteTodoClick = (id: number): void => {
    this.props.deleteTodo(id)
  }

  renderList() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.todos.map((todo: TodosInterface) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? 'Y' : 'N'}</td>
              <td>
                <button onClick={() => this.onDeleteTodoClick(todo.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'flex-start',
        }}
      >
        <button onClick={() => this.props.fetchTodos()}>Fetch Todos</button>
        {this.props.todos.length > 0 && this.renderList()}
      </section>
    )
  }
}

const mapStateToProps = (state: StoreState): { todos: TodosInterface[] } => {
  return { todos: state.todos }
}

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App)
