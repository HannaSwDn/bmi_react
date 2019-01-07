import React, { Component } from 'react';
import { bmiCalculation } from './BMICalculator';

class DisplayResult extends Component {
    calculate() {
        let weight = this.props.weight;
        let height = this.props.height;

        return bmiCalculation(weight, height);
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