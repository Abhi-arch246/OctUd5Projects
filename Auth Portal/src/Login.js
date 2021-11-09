import React, { useState } from 'react'
import { useHistory } from 'react-router'
import login from './login.png'
import Swal from 'sweetalert2'
import swal from 'sweetalert'

function Login() {
    let history = useHistory();
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user == 'atoz@gmail.com' && pass == 123456) {
            Swal.fire({
                title: 'Welcome A',
                html: '<b>Click Proceed to continue<b>',
                icon: 'success',
                allowOutsideClick: false,
                showDenyButton: true,
                confirmButtonText: `Proceed`,
                denyButtonText: `Cancel`,
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        history.push('./home')
                    } else if (result.isDenied) {
                        history.push('./')

                    }
                })

        }
        else
            swal("Wrong Credentials", "Please try again", "error")

    }






    return (
        <div>
            <div className="App-header">
                <h1>Login to Check A's</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img className="float-right" src={login} width="600" />
                    </div>
                    <div className="col-md-6 my-auto bg-dark p-5 rounded">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" value={user} className="form-control"
                                    placeholder="Enter email" onChange={(e) => setUser(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" value={pass} className="form-control" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
