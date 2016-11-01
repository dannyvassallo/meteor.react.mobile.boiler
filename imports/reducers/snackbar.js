export default function snackbar(state, action) {
  if (typeof state === 'undefined') {
    return {
      message: "Nothing to say...",
      color: "black",
      open: false
    }
  }

  switch (action.type) {
    case 'SET_SNACKBAR_MESSAGE':
      return { ...state, message: action.message }
    case 'SET_SNACKBAR_COLOR':
      return { ...state, color: action.color }
    case 'SET_SNACKBAR_OPEN':
      return { ...state, open: action.open }
    default:
      return state
  }
}
