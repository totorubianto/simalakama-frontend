import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../../global/style/card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPosts, getPostsScroll } from '../../../stores/post/action';
import ListPostStyle from '../styles/listPostStyle';
import { Persona, PersonaPresence, PersonaSize } from 'office-ui-fabric-react';
interface Props {
    posts: any;
    getPosts: Function;
    getPostsScroll: Function;
}

const ListPost: React.FC<Props> = ({ posts: { posts, countPosts }, getPosts, getPostsScroll }) => {
    const [state, setState] = useState({ limit: 5, skip: 0, hashMore: true, count: 1 });
    const { limit, skip, hashMore } = state;
    async function onGetPosts() {
        await getPosts(limit, skip);
        setState({ ...state, skip: skip + limit, count: countPosts });
    }
    useEffect(() => {
        onGetPosts();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (posts.length === countPosts) {
            setState({ ...state, hashMore: false });
        }
        // eslint-disable-next-line
    }, [posts]);

    const fetchImages = async () => {
        setState({ ...state, skip: skip + limit });
        await getPostsScroll(limit, skip);
    };
    const avatar = () => {
        return {
            imageUrl: 'asdasda',
            imageInitials: 'AB',
            text: 'gello',
            secondaryText: 'Software Engineer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
        };
    };

    return (
        <ListPostStyle>
            <InfiniteScroll
                dataLength={1}
                next={fetchImages}
                hasMore={hashMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {posts.map((data: any, i: number) => (
                    <Card key={i} margin={{ bottom: 20 }}>
                        <div className="post-author">
                            <Persona
                                {...avatar()}
                                size={PersonaSize.size40}
                                presence={PersonaPresence.away}
                                hidePersonaDetails={false}
                            />
                        </div>
                        <div className="post-content">
                            <div>{data.content}</div>
                        </div>

                        {data.images.length === 1 ? (
                            <div className="img-cover-1">
                                <figure className="gallery-item-1">
                                    <img className="img-post" src={data.images[0].url} alt="" />
                                    <div className="gallery-overlay gallery-item-1"></div>
                                </figure>
                            </div>
                        ) : data.images.length === 2 ? (
                            <div className="img-cover-2">
                                <figure className="gallery-item-1">
                                    <img className="img-post" src={data.images[0].url} alt="" />
                                    <div className="gallery-overlay gallery-item-1"></div>
                                </figure>

                                <figure className="gallery-item gallery-item-2">
                                    <img className="img-post" src={data.images[1].url} alt="" />
                                    <div className="gallery-overlay gallery-item-2"></div>
                                </figure>
                            </div>
                        ) : data.images.length === 3 ? (
                            <div className="img-cover-3">
                                <figure className="gallery-item-1">
                                    <img className="img-post" src={data.images[0].url} alt="" />
                                    <div className="gallery-overlay gallery-item-1"></div>
                                </figure>
                                <figure className="gallery-item-2">
                                    <img className="img-post" src={data.images[1].url} alt="" />
                                    <div className="gallery-overlay gallery-item-2"></div>
                                </figure>
                                <figure className="gallery-item-3">
                                    <img className="img-post" src={data.images[2].url} alt="" />
                                    <div className="gallery-overlay gallery-item-2"></div>
                                </figure>
                            </div>
                        ) : null}
                    </Card>
                ))}
            </InfiniteScroll>
        </ListPostStyle>
    );
};

const mapStateToProps = (state: any) => ({
    posts: state.posts,
});
export default connect(mapStateToProps, { getPosts, getPostsScroll })(ListPost);
