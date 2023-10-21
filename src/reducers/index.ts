import { combineReducers } from "redux"
import { todosReducer } from "./todos"
import { TodosInterface } from "../actions/todos"

export interface StoreState {
  todos: TodosInterface[]
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer
})