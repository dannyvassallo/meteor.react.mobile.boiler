export default function drawer(state, action) {
  if (typeof state === 'undefined') {
    return {
      drawerOpen: false
    }
  }

  switch (action.type) {
    case 'OPEN_DRAWER':
      return { ...state, drawerOpen: action.open }
    case 'CLOSE_DRAWER':
      return { ...state, drawerOpen: action.open }
    default:
      return state
  }
}
