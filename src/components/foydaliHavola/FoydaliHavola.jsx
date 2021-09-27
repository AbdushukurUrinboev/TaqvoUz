import React from 'react';
import './FoydaliHavola.css'
import Link1 from './img/link1.png'
import Link2 from './img/link2.png'
import Link3 from './img/link3.png'
import Link4 from './img/link4.png'

function FoydaliHavola() {
    return (
        <div className="uk-container">
            <div className="sarlavha foydaliHavola">Фойдали ҳаволалар</div>
            <div className="useful_links uk-margin-medium uk-visible@m foydaliHavola-container">
                <div className="links">
                    <div className="uk-child-width-1-2 uk-child-width-1-4@s uk-flex uk-flex-middle uk-child-width-1-4@m uk-light uk-grid-small"
                        uk-grid>
                        <div className="uk-animation-toggle" tabindex="0"><a href="http://islom.uz"><img src={Link1}
                            className="uk-animation-slide-bottom-medium" alt="" /></a></div>
                        <div className="uk-animation-toggle" tabindex="0"><a href="http://ziyo.uz"><img src={Link2}
                            className="uk-animation-slide-bottom-medium" alt="" /></a></div>
                        <div className="uk-animation-toggle" tabindex="0"><a href="http://ziyonet.uz"><img src={Link3}
                            className="uk-animation-slide-bottom-medium" alt="" /></a></div>
                        <div className="uk-animation-toggle" tabindex="0"><a href="http://kitoblardunyosi.uz"><img src={Link4}
                            className="uk-animation-slide-bottom-medium" alt="" /></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoydaliHavola;