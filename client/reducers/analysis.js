import assign from 'lodash.assign';
function analysis(state = {}, action) {
  console.log(state, action);
  switch(action.type) {
    case 'FORM_UPDATE_VALUE' : 
      return assign({}, state, {
        [action.name] : action.value
      })
    case 'SUBMIT' :
      //send to firebase
      console.log('reducer', action.value)
      return assign({}, state, {success: true})
    
    default:
      return state
  }
  return state;
}


export default dealerInfo;