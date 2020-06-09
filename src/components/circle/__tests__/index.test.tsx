
import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Circle } from '../index';
describe('test Circle suite', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Circle />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should be selectable by class "dtc-circle-default"', function () {
        expect(shallow(<Circle />).is('.dtc-circle-default')).toBe(true);
    })
    it('should mount in a full DOM', function () {
        expect(mount(<Circle />).find('.dtc-circle-default').length).toBe(1);
    });
})
