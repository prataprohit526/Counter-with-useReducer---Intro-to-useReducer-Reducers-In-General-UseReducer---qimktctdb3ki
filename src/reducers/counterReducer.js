function counterReducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
  
  export default counterReducer;
  