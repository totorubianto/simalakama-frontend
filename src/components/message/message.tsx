import React, { useState, useEffect } from 'react';
import './style.css';
import AreaChat from './areaChat';
import HeaderChat from './headerChat';
import AreaConversation from './areaConversation';
import AreaSidebar from './areaSidebar';
import socket from 'socket.io-client';
import { connect } from 'react-redux';
import { getFriend } from 'stores/friend/action';
import { withRouter, useLocation } from 'react-router-dom';
import { useQuery } from '../global/utils/useQuery';
interface Props {
    auth: any;
    getFriend: Function;
    friends: any;
    history: any;
}

const Message = (props: Props) => {
    useEffect(() => {
        props.getFriend();
        // eslint-disable-next-line
    }, []);
    let location = useQuery().get('id');

    useEffect(() => {
        console.log('masuk');
    }, [location]);

    const [message, setMessage]: any[] = useState([]);
    const io = socket('http://localhost:5000');
    io.on('MESSAGE', (data: any) => {
        // const chat: [any] = props.message;
        setMessage([...message, data]);
        // props.message.push(data);
    });

    return (
        <div className="app">
            <HeaderChat></HeaderChat>
            <div className="wrapper">
                <AreaConversation
                    friends={props.friends}
                    history={props.history}
                ></AreaConversation>
                <AreaChat messages={message} auth={props.auth} />
                <AreaSidebar></AreaSidebar>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    auth: state.auth,
    error: state.error,
    posts: state.posts,
    friends: state.friends,
});
export default withRouter(connect(mapStateToProps, { getFriend })(Message));
