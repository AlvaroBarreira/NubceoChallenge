import React, { useContext, useState, useEffect } from 'react'
import MusicCard from '../MusicCard/MusicCard'
import SearchBox from '../SearchBox/SearchBox'
import { DataContext } from '../../Contexts/ProviderData'
import PopUp from '../PopUp/PopUp'
import './CardSection.css'

function CardSection() {

    const { bands, genre, setBands, albums } = useContext(DataContext)

    const [search, setSearch] = useState('')

    const [update, setUpdate] = useState(false);

    const [bandsCopy, setBandsCopy] = useState([]);


   
    //Function filter by name
    const nameFilter = bands.filter((d) => {

        //Filter by name band
        if (d.name.toLowerCase().includes(search.toLowerCase())) {
            return (
                d
            )
        }  else if (d.genreCode.toLowerCase().includes(search.toLowerCase())) {
            //Filter by genre name
            return {
                d
            }
        }
    })

     //Function filter by name for bandsCopy array
      const nameFilterCopy = bandsCopy.filter((d) => {

        //Filter by name band
        if (d.name.toLowerCase().includes(search.toLowerCase())) {
            return (
                d
            )
        }  else if (d.genreCode.toLowerCase().includes(search.toLowerCase())) {
            //Filter by genre name
            return {
                d
            }
        }
    })


    //Sorting array alphabetically 
    const sortedArray = [...bands].sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))

    //This function change the state of my button, then in the "bandsCopy" array
    const sortingAZ = () => {
        setUpdate(!update)
        setBandsCopy(sortedArray)
    }


    //I had replace the genreCode in the bands array for the real name using  the matching name code
    genre.map((gen) => {
        bands.map((dat) => {
            if (dat.genreCode === gen.code) {
                dat.genreCode = gen.name
            }
        })
    })


    //This map asign a new property called "discography" in the band array, this must be contain the matching albums by id
    bands.map((band) => {
        return [...bands, Object.assign(band, {
                        
            discography: ''
        })]
    })

    //This map iteratet the name of album in the "discography" property
    albums.map((album) => {
        bands.find((band) => {
            if (band.id === album.bandId) {
                band.discography = [...band.discography, album.name]
            }
        })
    })

    

    
    return (
        <>
            <SearchBox
                search={search}
                setSearch={setSearch}
            />

            <button className="btn__sort" onClick={() => sortingAZ()}>
                {update ? 'Refresh' : 'Filter alphabetically'}
            </button>

            <div className="card-container">


                {
                    nameFilter.length > 0 && (

                        update ? (
                            nameFilterCopy.map((band) => {
                                return (
                                    <MusicCard band={band} />
                                )
                            })
                        ) : (

                            nameFilter.map((band) => {

                                return (
                                    <MusicCard band={band} />
                                )

                            })
                        )

                    )
                }

            </div>

            <PopUp />
        </>
    )
}

export default CardSection
