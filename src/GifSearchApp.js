import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { DiReact } from "react-icons/di"; 

export const GifSearchApp = ( ) => {
    // const categories = ['One punch', 'Samurai X', 'Dragon ball'];
    const [categories, setCategories] = useState( ['Berserk'] );

    // const handleAdd = () => {
    //     // setCategories( ['Attack on Titan', ...categories]);
    //     setCategories(cats => [...cats, 'Attack on Titan']);
    // }

    return (
        <>  
            <div className="header-block">
                <div className="title-block">
                    <h2>GifSearchApp</h2>
                    <DiReact className="reactIcon"/>
                </div>
                <AddCategory setCategories={ setCategories }/>
            </div>


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