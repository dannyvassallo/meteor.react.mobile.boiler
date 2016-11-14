export default function snackbar(state, action) {
  if (typeof state === 'undefined') {
    return {
      message: "Nothing to say...",
      color: "black",
      open: false
    }
  }

  switch (action.type) {
    case 'DISPATCH_SNACKBAR':
      return {
        ...state,
        message: action.message,
        color: action.color,
        open: action.open
      }
    case 'CLOSE_SNACKBAR':
      return {
        ...state,
        open: action.open
      }
    default:
      return state
  }
}
