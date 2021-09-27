import React from 'react'
import MiniCard from '../miniCard/MiniCard'

export default function YangiliklarPosts({ posts }) {
    return (
        <div>
            {posts.map(post => <MiniCard
                data={post}
                key={post.id}
                title={post.title}
                countryName={post.countryName}
                date={post.date}
                numberView={post.numberView}
                description={post.description.slice(0, 58) + '...'}
                img={post.img}
            />)}
        </div>
    )
}
