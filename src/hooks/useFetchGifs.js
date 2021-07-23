import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";
import { apiKey } from "../secret";

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
   
    useEffect( () => {
        getGifs(category, 10, apiKey)
        .then(imgs => {

            setstate({
                data: imgs,
                loading: false
            });
        })
 
    
    }, [category])

    return state;
}
