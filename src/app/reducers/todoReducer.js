const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO': {
      return {
        id: action.id,
        text: action.text, 
        completed: false
      }
    }
    case 'TOGGLE_TODO': {
      if (state.id === action.id) {
        return {...state, completed: !state.completed}
      } else {
        return state
      }
    }
    default: {
     return state
    }
  }
}

const todos = (state=[], action) => {
  switch(action.type) {
    case 'CLEAR': {
      return [] 
    }
    case 'ADD_TODO': {
      return [ ...state, todo(state, action) ]
    }
    case 'TOGGLE_TODO': {
      return state.map((t) => (todo(t, action)))
    }
    default: {
      return state
    }
  }
}

export default todos
