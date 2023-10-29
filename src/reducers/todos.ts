import { TodosInterface, Action, ActionTypes } from "../actions"

export const todosReducer = (
  state: TodosInterface[] = [],
  action: Action) => {
    switch(action.type) {
      case ActionTypes.fetchTodos:
        return action.payload
      case ActionTypes.deleteTodo:
        return state.filter((todo: TodosInterface) => todo.id !== action.payload)
      default:
        return state
    }
}