import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MaqolaPage from './maqolaPage/MaqolaPage';
import SavolJavob from './savolJavob/SavolJavob';
import UhshashYangiliklar from './uhshashYangiliklar/UhshashYangiliklar';
import VideoPage from './videoPage/VideoPage';
import YangiliklarPage from './yangiliklarPage/YangiliklarPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Carousel from './carousel/Carousel';
import { MaqolaProvider } from '../context/maqolaCont';
import MiddleCardMainPage from './middleCardMainPage/MiddleCardMainPage';
import FoydaliHavola from './foydaliHavola/FoydaliHavola';
import ElektronKutubhona from './elektronKutubhona/ElektronKutubhona';
import Fotoreportaj from './fotoreportaj/Fotoreportaj';
import Videoreportaj from './videoreportaj/Videoreportaj';
import MainPage from './mainPage/MainPage';
import { VideoProvider } from '../context/video';





function App() {
    return (
        <div>
            <BrowserRouter>
                <MaqolaProvider>
                    <VideoProvider>
                        <Header />
                        <Carousel />

                        <Switch>
                            <Route exact path="/">
                                <MainPage />
                            </Route>
                            <Route path="/yangiliklar">
                                <YangiliklarPage />
                            </Route>
                            <Route path="/maqola">
                                <MaqolaPage />
                            </Route>
                            <Route path="/video">
                                <VideoPage />
                            </Route>
                        </Switch>
                        {/* <Route path="/" component={MainPage} />
                    <Route path="/yangiliklar" component={YangiliklarPage} />
                    <Route path="/maqola" component={MaqolaPage} />
                    <Route path="/video" component={VideoPage} /> */}
                        <Footer />
                    </VideoProvider>
                </MaqolaProvider>
            </BrowserRouter>



        </div>
    )


}

export default App;