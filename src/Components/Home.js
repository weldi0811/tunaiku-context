import React, { Component } from 'react';
import Slider from './Slider'
import Summary from './Summary'
import Form from './Form'

class Home extends Component {
    render() { 
        return (
            <div>
                <Slider />
                <Form />
            </div>
        );
    }
}
 
export default Home;