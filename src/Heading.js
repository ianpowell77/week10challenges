import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Heading extends Component {
	render() {
      	return (
          	<h1>Hello World, {this.props.name}</h1>
      	);
    }
}

Heading.PropTypes = {
	name: PropTypes.string.isRequired,
}

export default Heading;