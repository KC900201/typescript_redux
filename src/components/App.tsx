import * as React from 'react'
import { connect } from 'react-redux'
import { TodosInterface, fetchTodos } from '../actions/todos'
import { StoreState } from '../reducers'

interface AppProps {
  todos: TodosInterface[]
  fetchTodos(): void
}

class _App extends React.Component<AppProps> {
  // componentDidMount(): void {
  //   this.props.fetchTodos()
  // }

  renderList() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {this.props.todos.map((todo: TodosInterface) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? 'Y' : 'N'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.props.fetchTodos()
          }}
        >
          Fetch Todos
        </button>
        {this.props.todos.length > 0 && this.renderList()}
      </>
    )
  }
}

const mapStateToProps = (state: StoreState): { todos: TodosInterface[] } => {
  return { todos: state.todos }
}

export const App = connect(mapStateToProps, { fetchTodos })(_App)
