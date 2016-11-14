function loading(isLoading){
  console.log('hit');
  return {
    type: "LOADING",
    isLoading
  };
}

export default loading;
