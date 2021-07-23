


 export const getGifs = async(category, limit, apiKey) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=${limit}&api_key=${apiKey}`
    console.log(url);
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    // console.log(gifs);

    // console.log(images);
    return gifs;
}