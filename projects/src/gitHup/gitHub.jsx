import axios from "axios";
import React from "react";
import { useState } from "react";
import './github.css'

function Github() {

    const [inputs, setInputs] = useState({});
    const [infor, setInfor] =useState();
    const [project, setProject]= useState();
    const [no, setNo] = useState(false)
    const [show, setShow] = useState(false)
    const [showFull,setShowFUll] = useState(false)
    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    const handleClick = async (data) => {
        axios.get(`https://api.github.com/users/${data}`)
            .then(function (response) {
                // handle success
                setInfor(response.data)
                setInputs({})
                setNo(false)
                setShow(true)
                setShowFUll(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setInputs({})
                setInfor()
                setNo(true)
                setShow(false)
                setShowFUll(false)
            })
    }
  
    const handleProfile = async (data) => {
        axios.get(`https://api.github.com/users/${data}/repos?sort=created`)
            .then(function (response) {
                // handle success
                setProject(response.data)
                setShow(false)
                setShowFUll(true)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setInputs({})
                setInfor()  
            })
    }

    return (
        <div className="github">
            <div className="box-input-gh">
                <input type="text" className="input-gh" placeholder="Search a Githup user"
                    name="name" value={inputs.name || ''} onChange={handleChange} onKeyPress={(e)=>{
                        if(e.key=== "Enter"){
                            handleClick(inputs.name)
                        }
                    }}
                />
                <button 
                    className="search-gh"
                    onClick={() => handleClick(inputs.name)}
                >search</button>
            </div >
            { show &&<div className="profile-gh" onClick={()=>handleProfile(infor.login)}>
                <div className="profile-gh-exist">
                    <div className="box-avatar-gh">
                        <img src={infor.avatar_url} alt="" className="avatar-gh"/>
                    </div>
                    <div className="infor-gh">
                        <h1 className="name-gh">{infor.name}</h1>
                        <p className="bio-gh">{infor.bio || 'null'}</p>
                        <div className="status-gh">
                            <p className="item-st-gh">{infor.followers} followers</p>
                            <p className="item-st-gh">{infor.following} following</p>
                            <p className="item-st-gh">{infor.public_repos} repos</p>
                        </div>
                        
                        
                    </div>
                </div>

            </div>}
            { showFull &&<div className="profile-gh-full">
                <div className="profile-gh-exist">
                    <div className="box-avatar-gh">
                        <img src={infor.avatar_url} alt="" className="avatar-gh"/>
                    </div>
                    <div className="infor-gh">
                        <h1 className="name-gh">{infor.name}</h1>
                        <p className="bio-gh">{infor.bio || 'null'}</p>
                        <div className="status-gh">
                            <p className="item-st-gh">{infor.followers} followers</p>
                            <p className="item-st-gh">{infor.following} following</p>
                            <p className="item-st-gh">{infor.public_repos} repos</p>
                        </div>
                        <div className="box-project-gh">
                            {project.map(e=>(
                               
                                <span className="project-gh" key={e.name}>{e.name}</span>
                                
                            ))}
                        </div>
                        
                    </div>
                </div>

            </div>}
            {no && <div className="profile-gh">
                <p>No profile with this username</p>
            </div>}

        </div>
    )

}
export default Github;