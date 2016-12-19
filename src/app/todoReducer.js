const defaultState = {
  inputField: '',
  allTodos: []
}

export default (state, action) => {
  switch(action.type) {
    case 'CLEAR_TODOS': {
      return { ...defaultState }
    }
  }
}
