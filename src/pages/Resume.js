import React, { Component } from "react";
// import axios from 'axios';
import "./style.css";
import NavBar from "../components/NavBar";

class Resume extends Component {
    // state = {}

    // componentDidMount () {
    //     axios
    // }

    render() {
        return (
            <div className="page_body">
                <NavBar />
                <h1>Resume</h1>
                <div className='text_style'>
                    <h6>Prow scuttle parrel  <a href="#" className="link"> Sail ho shrouds </a> spirits boom</h6>
                </div>
            </div>
        );
    }

}

export default Resume;