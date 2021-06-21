import axios from "axios";
import {
  TODO_FAIL,
  TODO_REQUEST,
  TODO_SUCCESS,
} from "../constants/todoConstants";
// "http://jsonplaceholder.typicode.com/todos",
export const listTodos = () => async (dispatch) => {
  console.log("EXCE LIST OF TODOS");
  try {
    dispatch({
      type: TODO_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get("/api/todo", config);

    dispatch({
      type: TODO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TODO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
