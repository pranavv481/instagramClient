import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from "../App";
import M from 'materialize-css';
function Signin() {
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const PostData = () => {
        // validation for sign in

        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid Email", classes: "#c62828 red darken-3" })
            return
        }

        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
            M.toast({ html: "password Must be 8 Character With Lower And Uppercase", classes: "#c62828 red darken-3" })
            return
        }

        // post for login
        fetch("http://localhost:5000/signIn", {
            method: "post",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                }
                else {
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))
                    dispatch({ type: "USER", payload: data.user })
                    M.toast({ html: "Successfully Signin", classes: "#2e7d32 green darken-3" })
                    history.push('/')
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (

        // sign in form
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>

                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={() => PostData()}>Signin</button>

                <h5><Link to="/signin">Create A New Account?</Link></h5>
            </div>
        </div>
    )
}

export default Signin
