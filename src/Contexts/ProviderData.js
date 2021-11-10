import{ useEffect, createContext, useState } from 'react'
import { getData } from '../Services/getData.service'
const DataContext = createContext();

function ProviderData({children}) { 


    const [bands, setBands] = useState([]);
    const [genre, setGenre] = useState([]);
    const [albums, setAlbums] = useState([])
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [lgShow, setLgShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: '',
        year: '',
        members: [],
        genre: '',
        country: '',
        albums: [],
    })

    useEffect(() => {
       getData(setGenre,setBands,setAlbums)
    }, [])

    const values = {
        bands,
        setBands,
        user, 
        setUser,
        password,
        setPassword,
        genre,
        setGenre,
        data,
        setData,
        albums,
        setAlbums,
        lgShow,
        setLgShow,
        loading,
        setLoading,
    }
    
    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}

export default ProviderData;
export { DataContext };