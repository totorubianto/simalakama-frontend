import React, { useState } from 'react';
import { connect } from 'react-redux';
import Card from '../../global/style/card';
import InfiniteScroll from 'react-infinite-scroll-component';
interface Props {
    posts: any[];
}

const listPost: React.FC<Props> = ({ posts }) => {
    const [state, setstate] = useState({ count: 1, start: 1 });
    const fetchImages = () => {
        const { count, start } = state;
        setstate({ ...state, start: start + count });
        // this.setState({ start: this.state.start + count });
        // axios
        //     .get(`/api/photos?count=${count}&start=${start}`)
        //     .then(res => this.setState({ images: this.state.images.concat(res.data) }));
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
                        <div>{data.content}</div>
                    </Card>
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default connect(null, {})(listPost);
