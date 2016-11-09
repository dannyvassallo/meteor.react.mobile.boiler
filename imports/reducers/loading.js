export default function loading(state, action) {
  if (typeof state === 'undefined') {
    return {
      isLoading: false
    }
  }

  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: action.isLoading }
    default:
      return state
  }
}
