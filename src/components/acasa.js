import React, {Component} from 'react';
import "../styles/acasa.css"
import getTranslation from "../constants/getTranslation";
import {store} from "../constants/store"


class Acasa extends Component {
    render() {
        return (

            <div class="landing-grid">

                <br>
                </br>
                <br>
                </br>

                <h1> {getTranslation(
                    store.getState(),
                    'bunVenit/welcome',
                )}</h1>

                <p>
                    <p1>
                        {getTranslation(
                            store.getState(),
                            'descriere/describe',
                        )}</p1>

                </p>

                <a href="/despre" className="btn">{getTranslation(
                    store.getState(),
                    'citesteMaiMulte/readMore',
                )}</a>

                <footer>
                    <br>
                    </br><br>
                </br><br>
                </br><br>
                </br><br>
                </br><br>
                </br><br>
                </br><br>
                </br><br>
                </br><br>
                </br><br>
                </br><br>
                </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    Made by <a href="https://www.twitter.com/">@IoanaCristea</a>
                </footer>
            </div>


        );
    }
}

export default Acasa;
