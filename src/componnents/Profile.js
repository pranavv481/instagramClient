import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../App';
function Profile() {
    const [mypics, setPics] = useState([])
    const { state, dispatch } = useContext(UserContext)
    useEffect(() => {
        fetch("/mypost", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                setPics(result.mypost)
            })
    }, [])
    return (
        <div className="profile-wrapper">
            <div className="profile-container">
                <div >
                    <img src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="profilePic" />
                </div>
                <div>
                    <h4>{state ? state.name : "loading"}</h4>
                    <div className="posts-follow">
                        <h5>40 Posts</h5>
                        <h5>40 Followers</h5>
                        <h5>40 Following</h5>
                    </div>
                </div>
            </div>
            <div className="gallery">
                {
                    mypics.map(mypic => {
                        return (
                            <img key={mypic._id} src={mypic.photo} alt={mypic.title} className="item" />
                        )
                    })
                }


            </div>
        </div>
    )
}

export default Profile
