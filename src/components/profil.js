import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";
import profilPhoto from "../images/profilPhoto3.jpg";


class Profil extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img

                            src={profilPhoto}
                            alt="profilPhoto"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Cristea Ioana </h1>

                            <hr/>

                            <p>HTML/CSS | JavaScript | React | NodeJS | Java Spring Boot | MySQL | </p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* Github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                {/* Freecodecamp */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                </a>

                                {/* Youtube */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>

            </div>

        )
    }
}

export default Profil;
