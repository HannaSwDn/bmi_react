import React from 'react';
import MethodSelect from './MethodSelect';

describe('<MethodSelect />', () => {
	it('has two methods to choose from', () => {
		const component = mount(<MethodSelect />);
		const selector = component.find('#method').instance()
		expect(selector.options.length).toEqual(2)
	}
)})