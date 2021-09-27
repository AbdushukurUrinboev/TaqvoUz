import React from 'react';
import './Footer.css';
import BigImg from './big_img.jpg';
import Infog1 from './infog1.jpg';
import BigNews from './big_news.jpg';
import Book from './book.jpg';
import Book2 from './book2.jpg';
import Book3 from './book3.jpg';
import SlideImg from './slide_img.jpg'
import VideImg from './video.jpg';
import Link1 from './link1.png';
import Link2 from './link2.png';
import Link3 from './link3.png';
import Link4 from './link4.png';
import LogoFooter from './logo_footer.png';
import CallPng from './call.png';
import LocationPng from './location.png';
import MailPng from './mail.png';

function Footer() {
    return (
        <section className="fiveth">
            <div className="uk-container">



                <div className="footer_menu uk-visible@l">
                    <div className="uk-flex uk-flex-middle uk-flex-between">
                        <div className="uk-width-1-3@m">
                            <div className="uk-flex uk-flex-middle">
                                <img src={LogoFooter} alt="" className="logo_footer" />
                                <div className="logo_name">
                                    <a href="#">
                                        <div className="bold_name">
                                            taqvo.uz
                                        </div>
                                        <div className="light_name">
                                            тақводорлар саҳифаси
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- //1-3 --> */}
                        <div className="uk-width-2-3@m">
                            <div className="navbar">
                                <nav className="uk-navbar-container uk-navbar-transparent uk-navbar">
                                    <div className="uk-navbar-right">
                                        <ul className="uk-navbar-nav">
                                            <li className="uk-active"><a href="#">Бош саҳифа</a></li>
                                            <li><a href="/yangiliklar">Янгиликлар</a></li>
                                            <li><a href="/maqola">Мақолалар </a></li>
                                            <li><a href="/video">Медиа </a></li>
                                            <li><a href="#">Муаллиф</a></li>
                                            <li><a href="#">Боғланиш</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        {/* <!-- //2-3 --> */}
                    </div>
                    {/* <!-- //uk-flex --> */}
                </div>
                {/* <!-- //footer_menu --> */}

                <div className="contact uk-margin-medium">
                    <div className="uk-margin uk-child-width-expand@m  uk-child-width-1-3@m uk-grid-small uk-grid">
                        <div className="about_us">
                            <div className="sarlavha">Биз ҳақимизда</div>
                            <div className="italic_text">
                                Раббимиз инсониятни яратиб унга бир қатор вазифаларни дастурулаъмал қилиб берди, уларнинг
                                гултожиси эса тақводир. Биз жамаомиз билан биргаликда соф ислом ақидасини етказиш, ислом
                                таълимотларини янада кенгроқ ва осонроқ тушунтириш
                                мақсади ила тақводорлар учун бизнинг тухфа ўлароқ мазкур сайтга асос солдик
                            </div>
                            <a href="#" className="more">Батафсил</a>
                        </div>

                        <div className="contact_us">
                            <div className="sarlavha">Биз билан боғланиш</div>
                            <div className="uk-flex uk-flex-middle uk-grid-small uk-grid">
                                <img src={CallPng} alt="" />
                                <div className="phone_numbers">
                                    <div><a href="tel:+998905137070">(+998-90) 513-70-70</a> </div>
                                    <div><a href="tel:+998905137070">(+998-91) 411-00-03</a></div>
                                </div>
                            </div>

                            <div className="uk-flex uk-flex-middle uk-grid-small uk-grid">
                                <img src={LocationPng} alt="" />
                                <div>Бухоро вилояти, Бухоро шаҳри, <br />
                                    Мустақиллик кўчаси, 45/75А-уй</div>
                            </div>

                            <div className="uk-flex uk-flex-middle uk-grid-small uk-grid">
                                <img src={MailPng} alt="" />
                                <div>
                                    <div><a href="mailto:info@taqvo.uz">info@taqvo.uz</a></div>
                                </div>
                            </div>
                            <div className="uk-flex uk-flex-middle uk-grid-small social_links uk-grid">
                                <a href="" uk-icon="icon: facebook"></a>
                                <a href="" uk-icon="icon: twitter"></a>
                                <a href="" uk-icon="icon: instagram"></a>
                                <a href="" uk-icon="icon: whatsapp"></a>
                                <a href="" uk-icon="icon: pinterest"></a>
                            </div>
                        </div>
                        <div className="useful_footer_links">
                            <div className="sarlavha">Фойдали ҳаволалар</div>
                            <div className="footer_links">
                                <p><a href="http://www.muslim.uz">muslim.uz</a> - Ўзбекистон Мусулмонлар идораси </p>
                                <p><a href="http://www.islom.uz">islom.uz</a> - Маърифат маскани </p>
                                <p><a href="http://www.madrasalar.uz">madrasalar.uz</a> - Ўзбекистон Мадрасалари </p>
                                <p><a href="http://www.muslim.uz">muslim.uz</a> - Ўзбекистон Мадрасалари </p>
                                <p><a href="http://www.islom.uz">islom.uz</a> - Маърифат маскани </p>
                                <p><a href="http://www.madrasalar.uz">madrasalar.uz</a> - Ўзбекистон Мадрасалари </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- //contact_us --> */}
            </div>
            {/* <!-- //uk-container --> */}
        </section>
        // <!-- //fiveth -->
    )
}

export default Footer;