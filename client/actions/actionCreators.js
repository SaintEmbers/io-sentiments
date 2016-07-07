export function update(name, value){
  console.log('updating')
  return dispatch => dispatch({
    type: 'FORM_UPDATE_VALUE',
    name, value
  });
}

export function submit(value){
  console.log('submitting action')
  return dispatch => dispatch({
    type: 'SUBMIT',
    value
  });
}

export function newForm(){
  return dispatch => dispatch({
    type: 'NEW_DEALER'
  })
}
