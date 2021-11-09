import React, { useState } from 'react'
import app from './firebase'
function InfoForm() {

    const realdb = app.database()
    const [name, Setname] = useState('')
    const [num, Setnum] = useState('')
    const [email, Setemail] = useState('')

    function submit(e) {
        e.preventDefault()
        var data = {
            name: name,
            number: num,
            email: email
        }
        Setname('')
        Setnum('')
        Setemail('')
        realdb.ref('contacts').push(data, function (err) {
            if (!err)
                alert('Contact saved Succesfully')
            else
                alert('Something went wrong')
        })


    }

    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded corner">
            <div className="mt-4">
                <input type="text" value={name} onChange={(e) => Setname(e.target.value)} className="form-control mt-4" placeholder="Enter Name" />
                <input type="text" value={num} onChange={(e) => Setnum(e.target.value)} className="form-control mt-4" placeholder="Enter Number" />
                <input type="email" value={email} onChange={(e) => Setemail(e.target.value)} className="form-control mt-4" placeholder="Enter Email" />

                <input type="button" value="Submit" onClick={submit} className="mt-4 btn btn-primary" />


            </div>
        </div>

    )
}

export default InfoForm
