import React, {Component} from 'react';
import "../styles/Noutati.css"
import YouTube from 'react-youtube';
import getTranslation from "../constants/getTranslation";
import {store} from "../constants/store";

class Noutati extends Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { //https://developers.google.com/youtube/watch?time_continue=2&v=Gl6OyO2nkWo&feature=emb_logo
                autoplay: 1
            }
        };
        return (
            <div>

                <div className="article">
                    <div className="wrapper">
                        <div className="wrapperText">
                            <h2>

                                <mark> {getTranslation(
                                    store.getState(),
                                    'titluStire/titleNews',
                                )}</mark>
                            </h2>
                        </div>

                    </div>


                    <div className="articleText">
                        <h4 className="introduction">Some services on Android and iPhone automatically stores your
                            movements even after you pause the ‘location history’ setting.</h4>

                        <p>Google wants to know where you go so badly that it records your movements even when you
                            explicitly tell it not to.
                            An Associated Press investigation found that many Google services on Android devices and
                            iPhones store your location data
                            even if you've used a privacy setting that says it will prevent Google from doing so.
                            Computer science researchers at Princeton confirmed these findings at the AP's request.</p>
                        <h2>Allow Access</h2>
                        <p>

                            For the most part, Google is upfront about asking permission to use your location
                            information.
                            An app like Google Maps will remind you to allow access to location if you use it for
                            navigating.
                            If you agree to let it record your location over time, Google Maps will display that history
                            for you in a “timeline” that maps out your daily movements..
                        </p>
                        <p>Storing your minute-by-minute travels carries privacy risks and has been used by police to
                            determine the location of suspects.
                            So the company will let you “pause” a setting called “location history”.

                            Google says that will prevent the company from remembering where you've been.
                            Google's support page on the subject states: “You can turn off Location History at any time.
                            With Location History off, the places you go are no longer stored.”
                            That isn't true. Even with “location history” paused, some Google apps automatically store
                            time-stamped location data without asking.</p>
                        <h2>Company response</h2>
                        <p>“There are a number of different ways that Google may use location to improve people's
                            experience, including: Location History,
                            Web and App Activity, and through device-level Location Services,” a Google spokesperson
                            said in a statement to the AP.</p>

                        <p> “We provide clear descriptions of these tools, and robust controls so people can turn them
                            on or off, and delete their histories at any time.”</p>

                        <p>To stop Google from saving these location markers, the company says, users can turn off
                            another setting, one that does not specifically reference location information.
                            Called “web and app activity” and enabled by default, that setting stores a variety of
                            information from Google apps and websites to your Google account.</p>

                        <YouTube
                            videoId="Gl6OyO2nkWo"
                            opts={opts}
                            onReady={this._onReady}
                        />
                    </div>
                    <footer>
                        Made by <a href ="https://github.com/ioanac977/presentation-resume-template">@IoanaCristea</a>
                    </footer>

                </div>


            </div>
        )
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default Noutati;
