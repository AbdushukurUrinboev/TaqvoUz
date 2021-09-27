import React, {useState, useEffect, } from 'react';
import './SavolJavob.css'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MiniQuestionIcon from './img/mini_question_icon.jpg';
import OyatSavoldagi from './img/oyat_savoldagi.png'
import axios from 'axios';
import SavolJavobMiniCard from '../savolJavobMiniCard/SavolJavobMiniCard';
import Modal from 'react-awesome-modal';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'


function SavolJavob() {

const[posts, setPosts] = useState([])
const [visible, setVisible] = useState(false)

const [email, setEmail] = useState('');
const [savol, setSavol] = useState('');

useEffect(() => {
axios.get('http://localhost:4000/savoljavob')
.then(res => {
// console.log(res);
setPosts(res.data)
})
.catch(err => {
console.log(err);

})
}, [])


const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 1}

function openModal() {
    setVisible(true)
}
function closeModal() {
    setVisible(false)
}
function handleInput(e) {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "savol") setSavol(value);
  }

function jonatish() {
    axios.post('http://localhost:4000/savoljavob', {savol: savol, email: email})
    .then(res => {
        setEmail('');
        setSavol('');
        setVisible(false);
    })
    .catch(err => {
        console.log(err);
    })
}

return (
    
<section className="uk-container fourth">
    <div className="myEffect">
        <div className="green_question">
            <div className="uk-grid uk-flex uk-flex-middle" uk-grid>
                <div className="uk-width-1-3@m">
                    <div className="name_section"><img src={MiniQuestionIcon} alt="" /> савол ва жавоб</div>
                </div>
                <div className="uk-width-2-3@m right_text">
                    <img src={OyatSavoldagi} alt="" />
                </div>
            </div>
        </div>

        <div className="question_answer">
            <h2></h2>
            <Slider {...settings}>
                    {posts.map(post => <SavolJavobMiniCard savol={post.savol.slice(0, 150) + '...'} />)}
                
            </Slider>
            
            <div className="give_question_button uk-animation-toggle "
            onClick={() => { openModal() }}>
                <a className="uk-button uk-button-primary uk-button-large uk-animation-scale-up" href="#">Савол
                    йўллаш</a>
            </div>

                <Modal visible={visible} width="400" height="330" effect="fadeInUp" onClickAway={() => closeModal()}>
                    <div className="uk-padding text-center mb-2">
                        <h1>Savol yo'llash</h1>
                        <Form>
                            <FormGroup>
                            <Label className="mb-2" for="exampleEmail">Email</Label>
                            <Input onChange={handleInput} type="email" name="email" id="exampleEmail" placeholder="email" />
                            </FormGroup>
                            <FormGroup>
                            <Label className="mt-2 mb-2" for="exampleText">Savol</Label>
                            <Input onChange={handleInput} className="mb-3" type="textarea" name="savol" id="exampleText" />
                        </FormGroup>
                        </Form>    
                        <a className="p-2 yashil uk-button-primary ml-2" href="javascript:void(0);" onClick={jonatish}>Jo'natish</a> &nbsp;
                        <a className="p-2 uk-button-danger" href="javascript:void(0);" onClick={() => { closeModal() }}>Bekor qilish</a>
                    </div>
                </Modal>
        </div>
        
    </div>
</section>
);
}

export default SavolJavob;