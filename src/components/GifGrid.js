import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
    const apiKey = 'e4Rbc8Hq9DMMjYD6rbhsFUnRdqoxGorD';
    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs(category, 10, apiKey)
            .then( setImages )
    }, [category]);

    // const getGifs = async() => {

    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }=10&api_key=e4Rbc8Hq9DMMjYD6rbhsFUnRdqoxGorD`
    //     const response = await fetch(url);
    //     const { data } = await response.json();

    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     });

    //     // console.log(gifs);

    //     // console.log(images);
    //     setImages(gifs);
    // }


    return (
        <>
        <h3> { category } </h3>
        <div className="card-grid">
            {
                images.map( img => (
                    <GifGridItem
                        key={ img.id }
                        { ...img }
                        // key={ img.id } 
                        // value={...img} 
                    />
                ))
            }
        </div>
        </>
    )
}
