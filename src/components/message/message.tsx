import React, { useEffect } from 'react';
import './style.css';
import AreaChat from './areaChat';
import HeaderChat from './headerChat';
import AreaConversation from './areaConversation';
import AreaSidebar from './areaSidebar';
import socket from 'socket.io-client';
import { connect } from 'react-redux';
import { getFriend } from 'stores/friend/action';
import { getMessages, getMessagesMore } from 'stores/message/action';
import { withRouter } from 'react-router-dom';
import { useQuery } from '../global/utils/useQuery';
import { create } from '../../stores/message/action';
import UIfx from 'uifx';
import audio from '../../sound/just-saying.mp3';
const htmlaudio: any = new Audio(audio);

interface Props {
    auth: any;
    getFriend: Function;
    friends: any;
    history: any;
    messages: any;
    create: Function;
    getMessages: Function;
    getMessagesMore: Function;
}

const Message = (props: Props) => {
    useEffect(() => {
        props.getFriend();
        // eslint-disable-next-line
    }, []);
    let location = useQuery().get('id');

    useEffect(() => {
        props.getMessages(location);
        // eslint-disable-next-line
    }, [location]);

    const io = socket('http://localhost:5000');
    useEffect(() => {
        io.on('MESSAGE', (data: any) => {
            if (data.recipient == props.auth._id) htmlaudio.play();
            props.getMessagesMore(data);

            // const chat: [any] = props.message;
            // setMessage([...message, data]);
            // props.message.push(data);
        });
        // eslint-disable-next-line
    }, []);

    console.log(props.messages.message);
    return (
        <div className="app">
            <HeaderChat></HeaderChat>
            <div className="wrapper">
                <AreaConversation
                    friends={props.friends}
                    history={props.history}
                ></AreaConversation>
                <AreaChat
                    create={props.create}
                    messages={props.messages.message}
                    auth={props.auth}
                />
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
    messages: state.messages,
});
export default withRouter(
    connect(mapStateToProps, { getFriend, getMessages, getMessagesMore, create })(Message),
);
