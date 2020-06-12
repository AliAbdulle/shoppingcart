import React, {useState} from "react"

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    
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
