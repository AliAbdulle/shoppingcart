import React, {useContext} from 'react'

import Image from '../components/Image'
import {Context} from '../Context'
import {getClass} from '../Utils/Index'

function Photos() {
    const {allPhotos} = useContext(Context)
    const likeable = fixAble
    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))

    return (
        <main className="photoes">
            {imageElements}
            {fixAble}
        </main>
    )
}

export default Photos