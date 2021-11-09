import React from 'react'
import { useHistory } from 'react-router'

function Home() {

    let log = useHistory()

    return (
        <div>
            <h2 className="text-center p-3">Hello </h2>
            <h6 className="text-center">This is your Homepage</h6>
            <div className="mt-5 container">

            </div>
            <div className="mt-5 text-center">
                <button onClick={() => log.push('./')} className="mt-5 btn btn-danger">Logout</button>

            </div>
        </div>
    )
}

export default Home
