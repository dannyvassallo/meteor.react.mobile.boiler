import Store from "../../reducers/index.js";

function setSnackBar(open, message, color){
  Store.dispatch({
    type: "SET_SNACKBAR_OPEN",
    open: open
  });
  Store.dispatch({
    type: "SET_SNACKBAR_MESSAGE",
    message: message
  });
  Store.dispatch({
    type: "SET_SNACKBAR_COLOR",
    color: color
  });
}

export default setSnackBar;
