import React from 'react'

function Profile() {
    return (
        <div className="profile-wrapper">
            <div className="profile-container">
                <div >
                    <img src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="profilePic" />
                </div>
                <div>
                    <h4>Test User</h4>
                    <div className="posts-follow">
                        <h5>40 Posts</h5>
                        <h5>40 Followers</h5>
                        <h5>40 Following</h5>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="item" />
                <img src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="item" />
                <img src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="item" />
                <img src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="item" />
                <img src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="item" />
                <img src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="item" />
            </div>
        </div>
    )
}

export default Profile
