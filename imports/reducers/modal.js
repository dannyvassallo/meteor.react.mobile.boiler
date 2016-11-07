export default function modal(state, action) {
  if (typeof state === 'undefined') {
    return {
      open: false
    }
  }

  switch (action.type) {
    case 'MODAL_OPEN':
      return { ...state, open: action.open }
    default:
      return state
  }
}
