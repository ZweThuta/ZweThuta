import { legacy_createStore as createStore } from "redux";
const initialState = { counter: 0, isShow: true };
const counterReducer = (state = initialState, action) => {
  if (action.type === "increase") {
    return {
      counter: state.counter + 1,
      isShow: state.isShow,
    };
  }

  if (action.type === "decrease") {
    return {
      counter: state.counter - 1,
      isShow: state.isShow,
    };
  }
  if (action.type === "by5") {
    return {
      counter: state.counter + action.amount,
      isShow: state.isShow,
    };
  }

  if (action.type === "toggle") {
    return {
      isShow: !state.isShow,
      counter: state.counter,
    };
  }

  if (action.type === "reset"){
    return {
      counter: state.counter = 0,
      isShow: state.isShow,

    }
  }
  return state;
};
const store = createStore(counterReducer);
export default store;
