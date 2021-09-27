import react, { useContext, useEffect, useState } from 'react';
import './MaqolaPage.css';
import MiniCard from '../miniCard/MiniCard';
import BigCard from '../bigCard/BigCard';
import MiddleCard from '../middleCard/MiddleCard';
import axios from 'axios';
import { MaqolaContext } from '../../context/maqolaCont';


function MaqolaPage() {
    const [posts, setPosts] = useState([])
    const [maqola, setMaqola] = useContext(MaqolaContext);

    useEffect(() => {
        axios.get('http://localhost:4000/maqolalar')
            .then(res => {
                // console.log(res);
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err);

            })
    }, [])



    const [elems, setElems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/maqolalar/1')
            .then(res => {
                // console.log(res);
                setElems(res.data)
            })
            .catch(err => {
                console.log(err);

            })
    }, []);


    function BigCards() {
        if (!maqola) {
            return (
                <BigCard
                    key={elems.id}
                    title={elems.title}
                    countryName={elems.countryName}
                    date={elems.date}
                    numberView={elems.numberView}
                    description={elems.description}
                    img={elems.img}
                />
            )
        } else if (maqola) {
            return (
                <BigCard
                    key={maqola.id}
                    title={maqola.title}
                    countryName={maqola.countryName}
                    date={maqola.date}
                    numberView={maqola.numberView}
                    description={maqola.description}
                    img={maqola.img}
                />
            )
        }
    }


    return (
        <div>
            <section class="third">
                <div class="uk-container">
                    <div class="uk-grid uk-flex" uk-grid>
                        <BigCards />
                        <div class="uk-width-1-3@m">
                            <div className="uk-flex uk-flex-between uk-flex-bottom">
                                <div className="sarlavha">МАҚОЛАЛАР</div>
                            </div>
                            {<MiddleCard description={elems.title} img={elems.img} />}

                            {posts.map((post, id) => <MiniCard key={id} data={post} description={post.description.slice(0, 58) + '...'} img={post.img} />)}
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default MaqolaPage;