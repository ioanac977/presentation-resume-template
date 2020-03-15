import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import getTranslation from "./constants/getTranslation";
import {store} from "./constants/store";
import {LanguageSelector} from "./constants/LanguageSelector";

class App extends Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color"
                            title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Planning Gps
                                Presentation</Link>} scroll>

                        <LanguageSelector/>

                        <Navigation>
                            <Link to="/acasa">
                                <p1>
                                    {getTranslation(
                                        store.getState(),
                                        'acasa/home',
                                    )}
                                   </p1>
                            </Link>
                            <Link to="/noutati">
                                <p1>
                                    {getTranslation(
                                        store.getState(),
                                        'noutati/news',
                                    )}</p1>
                            </Link>
                            <Link to="/despre">
                                <p1>
                                    {getTranslation(
                                        store.getState(),
                                        'despre/about',
                                    )}</p1>
                            </Link>
                            <Link to="/profil">
                                <p1>
                                    {getTranslation(
                                        store.getState(),
                                        'profil/profile',
                                    )}</p1>
                            </Link>
                            <Link to="/coordonator">
                                <p1>
                                    {getTranslation(
                                        store.getState(),
                                        'coordonator/coordinator',
                                    )}</p1>
                            </Link>
                            <Link to="/contact">
                                <p1>
                                    {getTranslation(
                                        store.getState(),
                                        'contact/contact',
                                    )}</p1>
                            </Link>


                        </Navigation>

                    </Header>

                    <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Planning Gps</Link>}>
                        <Navigation>
                            <Link to="/acasa">
                                {getTranslation(
                                    store.getState(),
                                    'acasa/home',
                                )}</Link>
                            <Link to="/noutati">
                                {getTranslation(
                                    store.getState(),
                                    'noutati/news',
                                )}</Link>
                            <Link to="/despre">
                                {getTranslation(
                                    store.getState(),
                                    'despre/about',
                                )}</Link>
                            <Link to="/profil">
                                {getTranslation(
                                    store.getState(),
                                    'profil/profile',
                                )}</Link>
                            <Link to="/coordonator">
                                {getTranslation(
                                    store.getState(),
                                    'coordonator/coordinator',
                                )}</Link>
                            <Link to="/contact">
                                {getTranslation(
                                    store.getState(),
                                    'contact/contact',
                                )}</Link>

                        </Navigation>

                    </Drawer>


                    <Content>

                        <div className="page-content"/>

                        <Main
                        />

                    </Content>

                </Layout>


            </div>

        );
    }
}

export default App;
