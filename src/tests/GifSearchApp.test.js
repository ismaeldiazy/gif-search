import { shallow } from 'enzyme';
import React from 'react';
import { GifGrid } from '../components/GifGrid';
import { GifSearchApp } from '../GifSearchApp';

describe('testing GifSearchApp', () => {

    const wrapper = shallow( <GifSearchApp /> )

    test('should match snapshot', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    // test('should show a categories list', () => {
    //     const categories = ['One Punch', 'Dragon Ball'];

    //     const wrapper = shallow( <GifSearchApp defaultCategories = {categories}/>)

    //     expect( wrapper ).toMatchSnapshot();
    //     expect( wrapper.find('GifGrid').length).toBe(categories.length);
    // })
    
    
})
