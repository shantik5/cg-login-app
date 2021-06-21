import {
  TODO_FAIL,
  TODO_REQUEST,
  TODO_SUCCESS,
} from "../constants/todoConstants";

export const listTodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case TODO_REQUEST:
      return { loading: true };
    case TODO_SUCCESS:
      return {
        loading: false,
        todos: action.payload,
      };
    case TODO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
