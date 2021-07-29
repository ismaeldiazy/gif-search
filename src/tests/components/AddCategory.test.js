import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('testing AddCategory component', () => {
    const value = 'Hola Mundo';
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } />);
    });

    test('component should match snapshot ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should change the text input', () => {
        wrapper.find('input').simulate('change', { target: {value} });
        
        expect(wrapper.find('input').prop('value').trim()).toBe(value);

    })

    test('setCategories func should not have been called', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect( setCategories ).not.toHaveBeenCalled();
    })

    test('should call setCategories func and clean the input text', () => {
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', { target: {value} });
        
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) )

        expect( wrapper.find('input').prop('value')).toBe('') ;

    })
    
    
    
    
})
