import React, { useEffect } from 'react';
import MeCard from './common/meCard';
import ListCard from './common/listPost';
import { connect } from 'react-redux';
import { getPosts } from '../../stores/post/action';

interface Props {
    auth: any;
    getPosts: Function;
    posts: any;
}

const Home: React.FC<Props> = ({ auth, getPosts, posts }) => {
    useEffect(() => {
        getPosts();
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3">
                        <MeCard user={auth && auth.user}></MeCard>
                    </div>
                    <div className="col-md-6">
                        <ListCard posts={posts.posts}></ListCard>
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
