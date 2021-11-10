import React, { useContext } from 'react'
import { DataContext } from '../../Contexts/ProviderData'

import './MusicCard.css'

function MusicCard({band}) {

    const { setLgShow, data, setData } = useContext(DataContext)

    const addInformation = () => {
            setLgShow(true)

            setData({
                name: band.name,
                year: band.year,
                members: band.members,
                genre: band.genreCode,
                country: band.country,
                albums: band.discography
            })
    }

    console.log(data)

    return (         

        <section className="music-player">
            <main className="music-player--main">
                <div className="music-player--controls">
                    <div className="song-info">
                        <div className="song-info--title">{band.name}</div>
                        <div className="song-info--artist">{band.genreCode}</div>
                    </div>
                </div>
            </main>
            <button className="btn__view" onClick={() => addInformation()}>About band</button>
        </section>
  
    )
}

export default MusicCard
