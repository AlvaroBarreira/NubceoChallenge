import Axios from 'axios';

const getData = async (setGenre,setBands,setAlbums) => {

    try {
        
        const response = await Axios.get(`https://my-json-server.typicode.com/improvein/dev-challenge/db`)
        console.log(response.data)
        setGenre(response.data.genre)
        setBands(response.data.bands)
        setAlbums(response.data.albums)

    } catch (error) {

        return error;
        
    }

}

export { getData }