import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../../global/style/card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPosts, getPostsScroll } from '../../../stores/post/action';
import ListPostStyle from '../styles/listPostStyle';
import { EditorState, convertFromRaw, CompositeDecorator } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from '../../global/draft.js/hashtag';
import createLinkifyPlugin from '../../global/draft.js/linkfy';
import {
    Persona,
    PersonaPresence,
    PersonaSize,
    Shimmer,
    ShimmerElementsGroup,
    ShimmerElementType,
} from 'office-ui-fabric-react';
import createMentionPlugin from 'draft-js-mention-plugin';
import Comment from './comment';
interface Props {
    posts: any;
    getPosts: Function;
    getPostsScroll: Function;
}

const ListPost: React.FC<Props> = ({ posts: { posts, countPosts }, getPosts, getPostsScroll }) => {
    const [state, setState] = useState({ limit: 5, skip: 0, hashMore: false, count: 1 });
    const { limit, skip, hashMore } = state;
    const hashtagPlugin = createHashtagPlugin();
    const linkifyPlugin = createLinkifyPlugin();
    const plugins = [hashtagPlugin, linkifyPlugin];
    useEffect(() => {
        getPosts(limit, skip);
        setState({ ...state, skip: skip + limit, count: countPosts });
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (posts.length !== 0 && posts.length === countPosts) {
            setState({ ...state, hashMore: false });
        }
        if (posts.length !== 0 && posts.length !== countPosts) {
            setState({ ...state, hashMore: true });
        }
        // eslint-disable-next-line
    }, [posts]);

    const fetchImages = async () => {
        setState({ ...state, skip: skip + limit });
        await getPostsScroll(limit, skip);
    };
    const avatar = (data: any) => {
        return {
            imageUrl: data?.actor?.avatar?.url,
            imageInitials: 'AB',
            text: `${data?.actor?.firstName} ${data?.actor?.lastName}`,
            secondaryText: 'Software Engineer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
        };
    };
    const linkDecoration = createLinkifyPlugin();
    const hashtagDecoration = createHashtagPlugin();
    const mentionDecoration = createMentionPlugin();
    const decorationArr = [
        linkDecoration.decorators[0],
        hashtagDecoration.decorators[0],
        mentionDecoration.decorators[0],
    ];
    const decorator = new CompositeDecorator(decorationArr);
    const content = (data: any) => {
        const parse = JSON.parse(data);
        const contentState = convertFromRaw(parse);
        const editorState = EditorState.createWithContent(contentState, decorator);
        return editorState;
    };

    return (
        <ListPostStyle>
            <InfiniteScroll
                dataLength={posts.length}
                next={fetchImages}
                hasMore={hashMore}
                loader={
                    <>
                        {[...Array(5)].map((x, i) => (
                            <Card key={i} margin={{ bottom: 20 }} padding={{ all: 20 }}>
                                <Shimmer
                                    customElementsGroup={_getCustomElementsExampleTwo()}
                                    width={300}
                                />
                                <Shimmer
                                    shimmerElements={[
                                        { type: ShimmerElementType.gap, width: '100%' },
                                    ]}
                                />
                                <Shimmer />
                                <Shimmer
                                    shimmerElements={[
                                        { type: ShimmerElementType.gap, width: '100%' },
                                    ]}
                                />
                                <Shimmer width="75%" />
                                <Shimmer
                                    shimmerElements={[
                                        { type: ShimmerElementType.gap, width: '100%' },
                                    ]}
                                />
                                <Shimmer width="50%" />
                            </Card>
                        ))}
                    </>
                }
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
                                {...avatar(data)}
                                size={PersonaSize.size40}
                                presence={PersonaPresence.away}
                                hidePersonaDetails={false}
                            />
                        </div>
                        <div className="post-content">
                            {/* {data.content} */}
                            <Editor
                                editorState={content(data.content)}
                                onChange={() => null}
                                readOnly={true}
                                plugins={plugins}
                            />
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
                        ) : data.images.length === 4 ? (
                            <div className="img-cover-4">
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
                                    <div className="gallery-overlay gallery-item-3"></div>
                                </figure>
                                <figure className="gallery-item-4">
                                    <img className="img-post" src={data.images[3].url} alt="" />
                                    <div className="gallery-overlay gallery-item-4"></div>
                                </figure>
                            </div>
                        ) : data.images.length > 4 ? (
                            <div className="img-cover-5">
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
                                    <div className="gallery-overlay gallery-item-3"></div>
                                </figure>
                                <figure className="gallery-item-4">
                                    <div className="gallery-label">+{data.images.length - 4}</div>
                                    <img className="img-post" src={data.images[3].url} alt="" />
                                    <div className="gallery-more gallery-item-4"></div>
                                </figure>
                            </div>
                        ) : null}
                        <Comment></Comment>
                    </Card>
                ))}
            </InfiniteScroll>
        </ListPostStyle>
    );
};

const _getCustomElementsExampleTwo = (): JSX.Element => {
    return (
        <div style={{ display: 'flex' }}>
            <ShimmerElementsGroup
                shimmerElements={[
                    { type: ShimmerElementType.circle, height: 40 },
                    { type: ShimmerElementType.gap, width: 16, height: 40 },
                ]}
            />
            <ShimmerElementsGroup
                flexWrap={true}
                width="100%"
                shimmerElements={[
                    {
                        type: ShimmerElementType.line,
                        width: '100%',
                        height: 10,
                        verticalAlign: 'bottom',
                    },
                    { type: ShimmerElementType.line, width: '90%', height: 8 },
                    { type: ShimmerElementType.gap, width: '10%', height: 20 },
                ]}
            />
        </div>
    );
};
const mapStateToProps = (state: any) => ({
    posts: state.posts,
});
export default connect(mapStateToProps, { getPosts, getPostsScroll })(ListPost);
