import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';



describe('Pruebas sobre el componente <GifGridItem />', () => {

    const title = 'title';
    const url = 'https://test.com';
    const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

    test('should return the component', () => {
    
        expect(wrapper).toMatchSnapshot();
    })

    test('img should have url and alt like props', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('should have animate__fadeIn class in Div', () => {
        const className = wrapper.find('div').prop('className');

        expect(className.includes('animate__fadeIn')).toBe( true );
    })
    
    
    
})


