import Store from "../../reducers/index.js";

function setLoading(value){
  Store.dispatch({
    type: "LOADING",
    isLoading: value
  });
}

export default setLoading;
