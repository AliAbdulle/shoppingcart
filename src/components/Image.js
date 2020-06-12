import React, {useState, useContext} from "react"
import {Context} from "../Context"

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)
    
    const heartIcon = hovered && <i className="ri-heart-line favorite"></i>
    const carttIcon = hovered && <i className="ri-add-circle-line cart"></i>
    return (
        <div className={`${className} image-container`}
        onMouseEnter={() => setHovered(true)}
        oneMouseLeave ={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon}
            {carttIcon}
        </div>
    )
}

export default Image
