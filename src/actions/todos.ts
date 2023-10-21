import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'

export interface TodosInterface {
  id: number
  title: string
  completed: boolean
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos
  payload: TodosInterface[]
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo,
  // return id of todo item to be deleted
  payload: number,
}

const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
  return async(dispatch: Dispatch) => {
    const response = await axios.get<TodosInterface[]>(apiUrl)

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    })
  }
}

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  }
}