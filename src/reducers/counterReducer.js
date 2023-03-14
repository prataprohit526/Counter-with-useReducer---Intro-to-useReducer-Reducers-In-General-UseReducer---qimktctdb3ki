const counterReducer = (state, action) => {
  console.log(action.type);
  if (action.type === "inc") {
      return state + 1;
  }
  if (action.type === "dec") {
      return state - 1;
  }
};

export { counterReducer };