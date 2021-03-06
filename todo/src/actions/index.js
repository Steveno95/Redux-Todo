export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const GET_TODOS = 'GET_TODOS';
// Action Creators
export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};


export const getTodos = todos => {
  return {
    type: GET_TODOS,
    payload: todos
  };
};