import React, { useEffect, useState } from 'react';
import './Header.css'
import Logo from './big_logo.png';
import SquareMenu from './square_menu.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Header() {

    const [visible, setVisible] = useState(true);
    // const ScrollButton = () => {


    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 0) {
            setVisible(false)
        }
        else if (scrolled <= 0) {
            setVisible(true)
        }
    };
    // };
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'auto'
            /* you can also use 'auto' behaviour 
               in place of 'smooth' */
        });

    };

    window.addEventListener('scroll', toggleVisible);


    return (
        <header>
            <section className="first">
                <div className="uk-container">
                    <div className="uk-grid uk-flex-between uk-flex uk-flex-middle" uk-grid>
                        <div className="uk-flex uk-flex-middle uk-width-1-3@m uk-width-2-3@s uk-width-2-3">
                            {/* <img src={Logo} className="logo_img" /> */}
                            <div className="uk-padding-small">
                                {/* <div className="logo"><a href="#">taqvo.uz</a></div> */}
                                <div className="logo_info">тақво истаганлар учун</div>
                            </div>
                        </div>
                        <div className="navbar uk-visibel@l">
                            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
                                <div className="uk-navbar-right">
                                    <ul className="uk-navbar-nav my-className" hidden>
                                        {/* <li className="uk-active"><Link to="/">Бош саҳифа</Link></li>
                                <li><Link to="/yangiliklar">Янгиликлар</Link></li>
                                <li><Link to="/maqola">Мақолалар </Link></li>
                                <li><Link to="/video">Медиа </Link></li>
                                <li><Link to="/yangiliklar">Муаллиф</Link></li>
                                <li><Link to="/yangiliklar">Боғланиш</Link></li> */}

                                        {/* newcode */}

                                        <li className="uk-active"><Link to="/">Бош саҳифа</Link></li>
                                        <li><Link to="/yangiliklar">Янгиликлар</Link></li>
                                        <li><Link to="/maqola">Мақолалар </Link></li>
                                        <li><Link to="/video">Медиа </Link></li>
                                        <li><Link to="/yangiliklar">Муаллиф</Link></li>
                                        <li><Link to="#"
                                            onClick={scrollToBottom}
                                        >Боғланиш</Link></li>
                                        {/* <li className="uk-active"><a href="/">Бош саҳифа</a></li>
                                        <li><a href="/yangiliklar">Янгиликлар</a></li>
                                        <li><a href="/maqola">Мақолалар </a></li>
                                        <li><a href="/video">Медиа </a></li>
                                        <li><a href="/yangiliklar">Муаллиф</a></li>
                                        <li><a href="#"
                                            onClick={scrollToBottom}
                                        >Боғланиш</a></li> */}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="uk-width-auto ">
                            <div className="uk-visible@l"
                                uk-toggle="target: .my-className; animation: uk-animation-slide-right-medium; queued: true">
                                <div className="square_menu ">
                                    <img src={SquareMenu} alt="" />
                                </div>
                            </div>
                            <div className="uk-hidden@l"
                                uk-toggle="target:  #offcanvas-nav; animation: uk-animation-slide-right-medium; queued: true">
                                <div className="square_menu">
                                    <img src={SquareMenu} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* //navbar */}

                    </div>
                    {/* //uk-grid */}
                </div>
                {/* uk-container */}
            </section>
        </header>
    )
}

export default Header;