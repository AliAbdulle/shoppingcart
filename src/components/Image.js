import React, {useState, useContext} from "react"
import {Context} from "../Context"

function Image({className, img}) {
    //intialize the state
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)
    
    function heartIcon () {
        if (img.IsFavorite) {
            return <i className="ri-heart-fill favorite"></i>
        }else if (hovered) {
                
        }

    }= hovered && <i className="ri-heart-line favorite"></i>

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
