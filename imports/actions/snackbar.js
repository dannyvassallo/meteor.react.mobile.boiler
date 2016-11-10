function setSnackBar(open, message, color){
  if(typeof message != 'undefined' && typeof color != 'undefined'){
    return {
      type: "DISPATCH_SNACKBAR",
      open,
      message,
      color
    };
  } else {
    return {
      type: "CLOSE_SNACKBAR",
      open
    }
  }
}


export default setSnackBar;
