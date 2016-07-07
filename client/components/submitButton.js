import React from 'react';

const SubmitButton = React.createClass({
  handleSubmit(e) {
    const {dealerInfo} = this.props;
    const name = dealerInfo.firstname + '-' + dealerInfo.lastname
    e.preventDefault();
    this.props.submit({ [name] : dealerInfo })
  },
  newForm(){
    this.props.newForm()
  },

  render() {    
    return (
      <div className="center">
        <button type="button" className="btn btn-primary btn-block submit-btn" 
          onClick={this.props.type === "Submit" ? this.handleSubmit : this.newForm}>{this.props.type}</button>
      </div>
    )
  }
});

export default SubmitButton;