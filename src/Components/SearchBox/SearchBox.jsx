import React from 'react'
import './SearchBox.css'



function SearchBox({search, setSearch}) {

    
    const handleChange = ({target}) => {

        setSearch(target.value)

    }

    return (
        <div className="s003">
      <form>
        <div className="inner-form">
          <div className="input-field second-wrap">
            <input 
              id="search" 
              type="text" 
              value={search}
              onChange={handleChange}
              placeholder="Search a Band" />
          </div>
        </div>
      </form>
    </div>
    )
}

export default SearchBox
