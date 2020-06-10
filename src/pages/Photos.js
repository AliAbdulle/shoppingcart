import React, {useContext} from 'react'

import Image from '../components/Image'
import {Context} from '../Context'
import {getClass} from '..//utils'

function Photos() {
    const {allPhotos} = useContext(Context)

    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)}>} />
    ))
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
        </main>
    )
}

export default Photos