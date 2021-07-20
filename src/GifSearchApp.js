import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifSearchApp = () => {
    // const categories = ['One punch', 'Samurai X', 'Dragon ball'];
    const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Dragon ball']);

    // const handleAdd = () => {
    //     // setCategories( ['Attack on Titan', ...categories]);
    //     setCategories(cats => [...cats, 'Attack on Titan']);
    // }

    return (
        <>
            <h2>GifSearchApp</h2>
            <AddCategory />
            <hr />


            <ol>
                { 
                    categories.map( category => {
                        return <li key={ category }>{ category }</li>  
                    })
                }
            </ol>
        </>
    );
}

export default GifSearchApp;