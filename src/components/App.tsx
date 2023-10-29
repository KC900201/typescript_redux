import * as React from 'react'
import { connect } from 'react-redux'
import { TodosInterface, fetchTodos, deleteTodo } from '../actions/todos'
import { StoreState } from '../reducers'

interface AppProps {
  todos: TodosInterface[]
  fetchTodos: () => void
  deleteTodo: typeof deleteTodo
}

interface AppState {
  fetching: boolean
}

class _App extends React.Component<AppProps, AppState> {
  // componentDidMount(): void {
  //   this.props.fetchTodos()
  // }

  constructor(props: AppProps) {
    super(props)

    this.state = { fetching: false }
  }

  onDeleteTodoClick = (id: number): void => {
    this.props.deleteTodo(id)
    this.setState({ fetching: true })
  }

  componentDidUpdate(prevProps: Readonly<AppProps>): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false })
    }
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
        {this.state.fetching ? 'Loading' : null}
        {this.props.todos.length > 0 && this.renderList()}
      </section>
    )
  }
}

const mapStateToProps = (state: StoreState): { todos: TodosInterface[] } => {
  return { todos: state.todos }
}

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App)
