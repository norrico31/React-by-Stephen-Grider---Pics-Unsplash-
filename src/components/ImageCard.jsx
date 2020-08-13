import React, { useState, useRef, useEffect } from 'react'

const ImageCard = ({ image }) => {
    const [state, setState] = useState({ spans: 0 })
    let imageRef = useRef()

    useEffect(() => {
        console.log(imageRef.current.clientHeight)

        const height = imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)
        setState({ spans })
        // eslint-disable-next-line
    }, [imageRef.current])

    return (
        <div style={{ gridRowEnd: `span ${state.spans}` }}>
            <img ref={imageRef} src={image.urls.regular} alt={image.alt_description}/>
        </div>
    )
}

export default ImageCard
