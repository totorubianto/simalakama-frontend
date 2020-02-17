import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../../global/style/card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPosts, getPostsScroll } from '../../../stores/post/action';
interface Props {
    posts: any[];
    getPosts: Function;
    getPostsScroll: Function;
}

const ListPost: React.FC<Props> = ({ posts, getPosts, getPostsScroll }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    const [state, setstate] = useState({ count: 2, start: 1 });
    const fetchImages = () => {
        const { count, start } = state;
        setstate({ ...state, start: start + count });
        getPostsScroll();
    };
    return (
        <div>
            <InfiniteScroll
                dataLength={posts.length}
                next={fetchImages}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {posts.map((data: any, i: number) => (
                    <Card key={i} margin={{ bottom: 10 }} padding={{ all: 20 }}>
                        {data.images.map((img: any) => (
                            <img src={img.url} width="100%" alt="" />
                        ))}

                        <div>{data.content}</div>
                    </Card>
                ))}
            </InfiniteScroll>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    posts: state.posts.posts,
});
export default connect(mapStateToProps, { getPosts, getPostsScroll })(ListPost);
