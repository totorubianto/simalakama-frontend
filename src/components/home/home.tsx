import React from 'react';
import MeCard from './common/meCard';
import ListCard from './common/listPost';
import Friends from './common/friends';
import { connect } from 'react-redux';
import { getPosts } from '../../stores/post/action';
import Post from './common/post';
import { useQuery } from '../global/utils/reactRouter';

interface Props {
    auth: any;
    getPosts: Function;
    posts: any;
}

const Home: React.FC<Props> = ({ auth, getPosts, posts }) => {
    let query = useQuery();
    let token = query.get('hashtag');
    console.log(token);
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3">
                        <MeCard></MeCard>
                        <Friends></Friends>
                    </div>
                    <div className="col-md-6">
                        <Post></Post>
                        <ListCard></ListCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    auth: state.auth,
    error: state.error,
    posts: state.posts,
});
export default connect(mapStateToProps, { getPosts })(Home);
