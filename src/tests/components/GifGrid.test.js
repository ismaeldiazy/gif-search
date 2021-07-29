import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('tests on GifGrid component', () => {

    const category = 'Attack on Titan';

    test('component should render correctly', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={category} />)

        expect(wrapper).toMatchSnapshot();
    });

    test('should render items when images are load with useFetchGifs custom hook', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquiercosa'
        },
        {
            id: 'DEF',
            url: 'https://localhost/cosa/cualquier.jpg',
            title: 'Cosacualquier' 
        },
        {
            id: 'DEFG',
            url: 'https://localhost/cosa/cualquier.jpg',
            title: 'Cosacualquier' 
        }

    ]
        
        // mocking useFetchGifs
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    })
    
    
})
