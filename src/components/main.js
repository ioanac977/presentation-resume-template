import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Noutati from './noutati';
import Contact from './contact';
import Despre from './despre';
import Acasa from './acasa';
import Profil from './profil';
import Coordonator from "./coordonator";



const Main = () => (
    <Switch>
        <Route exact path="/" component={Acasa}/>
        <Route path="/acasa" component={Acasa}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/despre" component={Despre}/>
        <Route path="/noutati" component={Noutati}/>
        <Route path="/profil" component={Profil}/>
        <Route path="/coordonator" component={Coordonator}/>




    </Switch>
)

export default Main;
