import react, { useEffect, useState } from 'react';
import './YangiliklarPage.css';
import MiniCard from '../miniCard/MiniCard';
import MiddleCard from '../middleCard/MiddleCard';
import axios from 'axios';
import YangiliklarPosts from '../YangiliklarPosts/YangiliklarPosts';
import Pagination from '../pagination/Pagination';


function YangiliklarPage() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/yangiliklar')
            .then(res => {
                // console.log(res);
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err);

            })
    }, [])

    const [elems, setElems] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [countmini, setCountmini] = useState(0);
    const [message, setMessage] = useState('yana yuklash');
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        axios.get('http://localhost:4000/yangiliklar/1')
            .then(res => {
                // console.log(res);
                setElems(res.data)
            })
            .catch(err => {
                console.log(err);

            })
    }, [])

    function Loadmore() {
        axios.get('http://localhost:4000/yangiliklar')
            .then(res => {
                if (countmini === res.data.length) {
                    setMessage("Tugadi");
                }
                // console.log(res);
                let posts = res.data.slice(0, countmini + 3);
                setPosts(posts);
                setCountmini(countmini + 3);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <section class="third">
                <div class="uk-container">
                    <div class="uk-grid uk-flex uk-child-width-expand@s" uk-grid>
                        <div className="uk-width-2-3@m uk-width-1-1@s uk-first-column">
                            <div className="sarlavha sarlavha-manual">БАРЧА ЯНГИЛИКЛАР</div>
                            {/* {posts.map(post => <MiniCard
                          title = {post.title}
                          countryName = {post.countryName}  
                          date = {post.date}
                          numberView = {post.numberView}                          
                          description = {post.description.slice(0,58) + '...'}
                          img = {post.img}

                          
                          />)} */}
                            <YangiliklarPosts posts={currentPosts} />

                            {/* <div>
                                <ul class="uk-pagination uk-flex-center pagination-manual" uk-margin>
                                    <li><a href="#"><span uk-pagination-previous></span></a></li>
                                    <li><a href="#">1</a></li>                                    
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>                                    
                                    <li><a href="#">4</a></li>
                                    <li><a href="#"><span uk-pagination-next></span></a></li>
                                </ul>
                            </div>
                        </div> */}

                            <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={posts.length}
                                paginate={paginate} />
                        </div>

                        <div class="uk-width-1-3@m">
                            <div className="uk-flex uk-flex-between uk-flex-bottom">
                                <div className="sarlavha">Янгиликлар</div>
                            </div>
                            {<MiddleCard
                                description={elems.title}
                                img={elems.img}
                            />}
                            {posts.map(post => <MiniCard data={post} description={post.description.slice(0, 58) + '...'} img={post.img} />)}
                            <center>
                                <button onClick={Loadmore} class="uk-button uk-button-primary"
                                >{message}</button></center>
                        </div>


                    </div>
                </div>
            </section>



        </div>
    )
}

export default YangiliklarPage;