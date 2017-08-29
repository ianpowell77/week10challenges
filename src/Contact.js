import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {

	constructor(){
    	super();

    	this.handleClick = this.handleClick.bind(this);

    	this.state = {
      		statusText: "Pending...",
      		bgColor: 'orange'
    	}
  	}

  	handleClick(){ 		
  		this.setState({
  			statusText: "Done!",
  			bgColor: "lightgreen"
  		})
  	}

	render() {
      	return (
      		<div>
        		<p>You need to contact {this.props.firstName} {this.props.lastName} at {this.props.phoneNumber}</p>
        		<span className="pending" style={{backgroundColor:this.state.bgColor}}>{this.state.statusText}</span>
        		<button onClick={this.handleClick}>&#9742;</button>
        	</div>
      	);
    }
}

Contact.PropTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	phoneNumber: PropTypes.number.isRequired,
}

export default Contact;