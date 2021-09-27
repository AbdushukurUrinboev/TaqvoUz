import react, { useState, useEffect } from 'react';
import './VideoPage.css';
import MiniVideoCard from '../miniVideoCard/MiniVideoCard';
import BigVideoCard from '../bigVideoCard/BigVideoCard';
import MiddleVideoCard from '../middleVideoCard/MiddleVideoCard'
import axios from 'axios';
import { useContext } from 'react';
import { VideoContext } from '../../context/video';




function VideoPage() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/videolar')
            .then(res => {
                // console.log(res);
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err);

            })
    }, [])

    const [elems, setElems] = useState([]);
    const [video, SetVideo] = useContext(VideoContext);

    useEffect(() => {
        if (!video) {
            axios.get('http://localhost:4000/videolar/1')
                .then(res => {
                    // console.log(res);
                    setElems(res.data)
                })
                .catch(err => {
                    console.log(err);

                })
        } else {
            setElems(video)
        }
    }, []);

    function VideoCard() {
        if (!video) {
            return (
                <BigVideoCard
                    key={elems.id}
                    title={elems.title}
                    countryName={elems.countryName}
                    date={elems.date}
                    numberView={elems.numberView}
                    description={elems.description}
                    img={elems.img}
                    videoLink={elems.videoLink}
                />
            )
        } else {
            return (
                <BigVideoCard
                    key={video.id}
                    title={video.title}
                    countryName={video.countryName}
                    date={elems.date}
                    numberView={video.numberView}
                    description={video.description}
                    img={video.img}
                    videoLink={video.videoLink}
                />
            )
        }

    }

    return (
        <div>
            <section class="third">
                <div class="uk-container">
                    <div class="uk-grid uk-flex" uk-grid>
                        {/* {<BigVideoCard
                                key={elems.id}
                                title={elems.title}
                                countryName={elems.countryName}
                                date={elems.date}
                                numberView={elems.numberView}
                                description={elems.description}
                                img={elems.img}
                                videoLink={elems.videoLink}
                            />} */}
                        <VideoCard />
                        <div class="uk-width-1-3@m">
                            {<MiddleVideoCard description={elems.title} img={elems.img} videoLink={elems.videoLink} />}
                            {posts.map((post, i) => <MiniVideoCard key={i} data={post} description={post.description.slice(0, 56) + '...'} img={post.img} videoLink={post.videoLink} />)}
                        </div>


                    </div>
                </div>
            </section>



        </div>
    )
}

export default VideoPage;