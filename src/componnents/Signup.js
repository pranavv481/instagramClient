import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';
function Signup() {
    const history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const PostData = () => {
        // validation
        if (!/^[a-zA-z]*$/.test(name)) {
            M.toast({ html: "Name Is Invalid", classes: "#c62828 red darken-3" })
            return
        }

        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid Email", classes: "#c62828 red darken-3" })
            return
        }
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
            M.toast({ html: "password Must be 8 Character With Lower And Uppercase", classes: "#c62828 red darken-3" })
            return
        }

        // post signup

        fetch("http://localhost:5000/signUp", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                }
                else {
                    M.toast({ html: data.message, classes: "#2e7d32 green darken-3" })
                    history.push('/signin')
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        //signup form
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={() => PostData()}>Signup</button>
                <h5><Link to="/signin">Already Have An Account?</Link></h5>
            </div>
        </div>
    )
}

export default Signup