import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifSearchApp = () => {
    // const categories = ['One punch', 'Samurai X', 'Dragon ball'];
    const [categories, setCategories] = useState(['One punch']);

    // const handleAdd = () => {
    //     // setCategories( ['Attack on Titan', ...categories]);
    //     setCategories(cats => [...cats, 'Attack on Titan']);
    // }

    return (
        <>
            <h2>GifSearchApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />


            <ol>
                { 
                    categories.map( category => 
                        <GifGrid 
                            key= { category }
                            category={ category } 
                        />  
                    )
                }
            </ol>
        </>
    );
}

export default GifSearchApp;