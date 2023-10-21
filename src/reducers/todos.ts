import { FetchTodosAction, TodosInterface, Action, ActionTypes } from "../actions"

export const todosReducer = (
  state: TodosInterface[] = [],
  action: Action) => {
    switch(action.type) {
      case ActionTypes.fetchTodos:
      return action.payload
      default:
        return state
    }
}