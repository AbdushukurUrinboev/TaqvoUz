import React from 'react';
import './MainPage.css'
import MiddleCardMainPage from '../middleCardMainPage/MiddleCardMainPage';
import ElektronKutubhona from '../elektronKutubhona/ElektronKutubhona';
import Fotoreportaj from '../fotoreportaj/Fotoreportaj';
import Videoreportaj from '../videoreportaj/Videoreportaj';
import SavolJavob from '../savolJavob/SavolJavob';
import SungiYangiliklar from '../sunggiYangiliklar/SungiYangiliklar';
import FoydaliHavola from '../foydaliHavola/FoydaliHavola';

function MainPage() {
    return (
        <div>            
            <MiddleCardMainPage />
            <ElektronKutubhona />
            <Fotoreportaj />
            <Videoreportaj />
            <SavolJavob />
            <SungiYangiliklar />
            <FoydaliHavola />
        </div>
    )
}

export default MainPage;