import React, {useContext} from 'react'

function Photos() {
    const {allPhotoes} =useContext(Context)

    const imageElements = allPhotoes((img, 1) => (
        <Image key={img.id} img={img} className={getClasse(<index of image>)} />
    ))
    return (
        <main className="cart-page">
            <h1>Check out</h1>
        </main>
    )
}

export default Photos