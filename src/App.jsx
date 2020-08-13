import React, { useState, useEffect } from 'react'
import unsplash from './api/unsplash'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'

const App = () => {
    const [images, setImages] = useState([])

    const onSearchSubmit = async term => {
        const res = await unsplash.get(`/search/photos`, {
            params: {
                query: term
            }
        })
        setImages(res.data.results)
    }

    return (
        <div className="ui container" style={{ marginTop: '20px' }}>
            <SearchBar onSubmit={onSearchSubmit} />
            <ImageList images={images} />
        </div>
    )
}

export default App
