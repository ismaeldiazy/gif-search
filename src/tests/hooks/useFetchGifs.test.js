import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';

describe('testing useFetchGifs custom hook', () => {
    
    test('should return the initial state', async() => {
        
        // const { data, loading } = useFetchGifs( 'One Punch' );

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch ') )

        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect( data.length ).toEqual(0);
        expect( loading ).toEqual(true);

    })

    test('should return a images array and loading set in false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch ') )
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toEqual(10);
        expect( loading ).toEqual(false);

    })
    

    
})
