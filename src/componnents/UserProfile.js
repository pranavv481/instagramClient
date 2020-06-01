import React, { useEffect, useState, useContext, Fragment } from 'react';
import { UserContext } from '../App';
import { useParams } from "react-router-dom";
function UserProfile() {
    const [userProfile, setProfile] = useState(null)
    const { state, dispatch } = useContext(UserContext)
    const { userid } = useParams()
    console.log(userid)
    useEffect(() => {
        fetch(`/user/${userid}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setProfile(result)
            })
    }, [])
    return (
        <Fragment>
            {userProfile ?
                <div className="profile-wrapper">
                    <div className="profile-container">
                        <div >
                            <img src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="profilePic" />
                        </div>
                        <div>
                            <h4>{userProfile.user.name}</h4>
                            <h5>{userProfile.user.email}</h5>
                            <div className="posts-follow">
                                <h5>{userProfile.posts.length} Posts</h5>
                                <h5>40 Followers</h5>
                                <h5>40 Following</h5>
                            </div>
                        </div>
                    </div>
                    <div className="gallery">
                        {
                            userProfile.posts.map(mypic => {
                                return (
                                    <img key={mypic._id} src={mypic.photo} alt={mypic.title} className="item" />
                                )
                            })
                        }
                    </div>
                </div>
                : <h2>Loading</h2>}

        </Fragment>
    )
}

export default UserProfile
