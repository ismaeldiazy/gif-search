import React from 'react';
import { shallow } from 'enzyme';
import { getGifs } from '../../helpers/getGifs';

describe('test getGifs', () => {

    test('should return 10 elements', async() => {
        
        const gifs = await getGifs('Attack on Titan', 10, 'e4Rbc8Hq9DMMjYD6rbhsFUnRdqoxGorD');

        expect(gifs.length).toBe(10);
    })

    test('should return empty list', async() => {
        
        const gifs = await getGifs('', 10, 'e4Rbc8Hq9DMMjYD6rbhsFUnRdqoxGorD');

        expect(gifs.length).toBe(0);
    })
    
});