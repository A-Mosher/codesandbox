import React, { Component } from 'react';

class IceCream extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flavors: ['chocolate', 'vanilla', 'superman']
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            
        })
    }
}

export default IceCream;