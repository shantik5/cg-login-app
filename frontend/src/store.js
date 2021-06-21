import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import { listTodoReducer } from "./reducers/todoReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  todoList: listTodoReducer,
});

//we need to check if user info and user info taken both exist
// if (userInfoFromStorage && userInfoFromStorage.accessToken) {
//   return { Authorization: 'Bearer ' + userInfoFromStorage.accessToken };
// } else {
//   return {};
// }
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
