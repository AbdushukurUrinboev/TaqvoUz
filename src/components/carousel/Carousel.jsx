import React, { useEffect } from 'react';
import './Carousel.css'
import BigLogo from './image/big_logo.png';
import 'slider'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { useState } from 'react';



function Carousel() {

    const [namozTimes, setNamozTimes] = useState({});
    const [city, setCity] = useState('Fargona');
    const [currentTime, setCurrentTime] = useState({});

    function SetTime(city, times) {
        switch (city) {
            case 'Fargona':
                setCurrentTime(times.Fargona);
                break;
            case 'Andijon':
                setCurrentTime(times.Andijon)
                break;
            case 'Namangan':
                setCurrentTime(times.Namangan)
                break;
            case 'Toshkent':
                setCurrentTime(times.Toshkent)
                break;
            default:
                break;
        }
    }

    useEffect(async () => {
        const data = await axios.get('http://localhost:4000/NamozTimes');
        setNamozTimes(data.data);
        setCurrentTime(data.data.Fargona)
    }, 0);

    // useEffect(async () => {
    //     SetTime(city, namozTimes);
    // }, [city]);

    return (
        <section className="big_slide">
            <div className="blue_cover">
                <div className="uk-container">
                    <div class="uk-flex date-search-manual">
                        <div class="uk-flex-left">
                            <div className="data_month">
                                <div className="hijriy"> 1440 йил 19 рабиъус сони <p>2020 йил 21 октябрь, чоршанба</p>
                                </div>
                            </div>
                            {/* data_month */}
                        </div>
                        {/* Item-1-finished */}
                        <div class="uk-flex uk-flex">
                            <div class="item2">
                                <div class="uk-child-width-expand@s uk-text-center" uk-grid>
                                    <div>
                                        <div class="uk-card">
                                            <div className="big_logo logo-for-carus">
                                                <img src={BigLogo} alt="" />
                                            </div>
                                            <div class="logo_name">
                                                <a href="#">
                                                    <div class="bold_name">
                                                        taqvo.uz
                                                    </div>
                                                    <div class="light_name">
                                                        тақво истаган қалблар саҳифаси
                                                    </div>
                                                </a>
                                            </div>
                                            {/* logo finished */}
                                            <section className="second">
                                                <div className="uk-container">
                                                    <div className="namaz_time-style">

                                                        <UncontrolledDropdown>
                                                            <DropdownToggle caret color="success">
                                                                <span style={{ color: "white" }}>Шаҳар</span>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem
                                                                    onClick={() => { SetTime("Fargona", namozTimes) }}>Фарғона</DropdownItem>
                                                                <DropdownItem
                                                                    onClick={() => { SetTime("Andijon", namozTimes) }}>Андижон</DropdownItem>
                                                                <DropdownItem
                                                                    onClick={() => { SetTime("Namangan", namozTimes) }}>Наманган</DropdownItem>
                                                                <DropdownItem divider />
                                                                <DropdownItem
                                                                    onClick={() => { SetTime("Toshkent", namozTimes) }}>Тошкент</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </div>
                                                    {/* //namaz_time */}
                                                    <div className="all-time-line"></div>
                                                    <div className="all_times uk-flex uk-flex-center">
                                                        <a href="#" className="one_time">
                                                            <div className="bold_time">{currentTime.Tong}</div>
                                                            <div className="time_name">Тонг</div>
                                                        </a>

                                                        <a href="#" className="one_time">
                                                            <div className="bold_time">{currentTime.Quyosh}</div>
                                                            <div className="time_name">Қуёш</div>
                                                        </a>

                                                        <a href="#" className="one_time">
                                                            <div className="bold_time">{currentTime.Peshin}</div>
                                                            <div className="time_name">Пешин</div>
                                                        </a>

                                                        <a href="#" className="one_time">
                                                            <div className="bold_time">{currentTime.Shom}</div>
                                                            <div className="time_name">Шом</div>
                                                        </a>

                                                        <a href="#" className="one_time">
                                                            <div className="bold_time">{currentTime.Xufton}</div>
                                                            <div className="time_name">Хуфтон</div>
                                                        </a>
                                                        {/* <a href="#" className="one_time">
                                                            <div className="bold_time">06:13</div>
                                                            <div className="time_name">Тонг</div>
                                                        </a>

                                                        <a href="#" className="one_time">
                                                            <div className="bold_time">07:34</div>
                                                            <div className="time_name">Қуёш</div>
                                                        </a>

                                                        <a href="#" className="one_time">
                                                            <div className="bold_time">12:13</div>
                                                            <div className="time_name">Пешин</div>
                                                        </a>

                                                        <a href="#" className="one_time">
                                                            <div className="bold_time">16:52</div>
                                                            <div className="time_name">Шом</div>
                                                        </a>

                                                        <a href="#" className="one_time">
                                                            <div className="bold_time">18:14</div>
                                                            <div className="time_name">Хуфтон</div>
                                                        </a> */}
                                                    </div>
                                                </div>
                                                {/* //container */}
                                            </section>
                                            {/* second */}



                                            <div className="header_hadis">
                                                <div className="black_text">Абу Ҳурайра розияллоҳу анҳудан ривоят қилинади:
                                                </div>
                                                <div className="light_white">Расулуллоҳ соллалоҳу алайҳи ва саллам шундай
                                                    дедилар:
                                                </div>
                                                <div className="middle-text">
                                                    <p> “Ким илм излаш йўлини тутса, Аллоҳ таоло</p>
                                                    <p>унга жаннат йўлини енгил қилиб қўяди”</p>


                                                </div>


                                                <div className="black_text bottom-margin-of-text">Термизий ривояти</div>
                                            </div>
                                            {/* uk-logo */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Item-2finished */}
                            <div className="item3 text-lang-right">
                                <div className="uk-margin">
                                    <form className="color-input uk-search uk-search-default">
                                        <span uk-search-icon="uk-search-icon-flip"></span>
                                        <input className="uk-search-input manual-borderr" type="search" placeholder="Қидириш" />
                                    </form>
                                </div>
                                <div>

                                </div>
                                <div>
                                    <UncontrolledDropdown>
                                        <DropdownToggle caret color="#0c4f35">
                                            Тилни танлаш
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>O'zb</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Рус</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                                {/* language */}
                            </div>
                        </div>
                    </div>

                    {/* uk-container */}




                </div>
            </div>
        </section>
    )
}

export default Carousel