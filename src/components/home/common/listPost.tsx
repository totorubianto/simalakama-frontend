import React from 'react';
import { connect } from 'react-redux';
import Card from '../../global/style/card';

interface Props {
    posts: any[];
}

const listPost: React.FC<Props> = ({ posts }) => {
    return (
        <div>
            {posts.map((data: any, i: number) => (
                <Card margin={{ bottom: 10 }} padding={{ all: 20 }}>
                    <div>{data.content}</div>
                </Card>
            ))}
        </div>
    );
};

export default connect(null, {})(listPost);
