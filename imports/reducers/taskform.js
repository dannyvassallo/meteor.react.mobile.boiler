export default function taskform(state, action) {
  if (typeof state === 'undefined') {
    return {
      open: false
    }
  }

  switch (action.type) {
    case 'TASK_FORM_OPEN':
      return { ...state, open: action.open }
    default:
      return state
  }
}
