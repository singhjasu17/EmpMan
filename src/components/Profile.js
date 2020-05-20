import React, { Component } from "react";
import { withUserContext,UserContext } from "./UserContext";
import { withStitch } from "./Stitch";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './Profile.css'
import {
    Stitch
  } from "mongodb-stitch-browser-sdk";
class Profile extends Component {
    constructor(props)
    {
        super(props)
        console.log(props)

    }
    static contextType=UserContext
    

        
     render()
    {
        const {updateUser} = this.context
        

        const user=this.props.stitch.client.auth.currentUser.customData
       
        
        


        return (<div className="container emp-profile">
            
                    <form method="post">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                                    <div className="file btn btn-lg btn-primary">
                                        Change Photo
                                        <input type="file" name="file"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="profile-head">
                                            <h5>
                                                
                                            </h5>
                                            <h6>
                                                Gori 
                                            </h6>
                                            <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-work">
                                    <p>WORK LINK</p>
                                    <a href="">Website Link</a><br/>
                                    <a href="">Bootsnipp Profile</a><br/>
                                    <a href="">Bootply Profile</a>
                                    <p>SKILLS</p>
                                    <a href="">Web Designer</a><br/>
                                    <a href="">Web Developer</a><br/>
                                    <a href="">WordPress</a><br/>
                                    <a href="">WooCommerce</a><br/>
                                    <a href="">PHP, .Net</a><br/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="tab-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>User Id</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>{user.userId}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Company Name</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>{user.companyName}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Company EMS iD</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>{user.ems_id}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Phone</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>123 456 7890</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Profession</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>Web Developer and Designer</p>
                                                    </div>
                                                </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Experience</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>Expert</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Hourly Rate</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>10$/hr</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Total Projects</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>230</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>English Level</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>Expert</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Availability</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>6 months</p>
                                                    </div>
                                                </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>Your Bio</label><br/>
                                                <p>Your detail description</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>           
                </div>)
    }
}
export default withStitch(withUserContext(Profile))
