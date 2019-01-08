import React, { Component } from 'react';
import { bmiCalculation } from './BMICalculator';

class DisplayResult extends Component {
    calculate() {
        let weight = this.props.weight;
        let height = this.props.height;
        let method = this.props.method;

        console.log(method)

        return bmiCalculation(weight, height, method);
    }

    render() {
        return (
            <div id="result">
                {this.calculate()}
            </div>
        )
    }
}

export default DisplayResult