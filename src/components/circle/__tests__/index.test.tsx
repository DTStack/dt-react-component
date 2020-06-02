
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
    it('should be selectable by class "circle_default"', function () {
        expect(shallow(<Circle />).is('.circle_default')).toBe(true);
    })
    it('should mount in a full DOM', function () {
        expect(mount(<Circle />).find('.circle_default').length).toBe(1);
    });
})
