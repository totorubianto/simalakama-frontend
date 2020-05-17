import React from 'react';
import { useScrollToBottom, useSticky } from 'react-scroll-to-bottom';
interface Props {
    messages: [];
    user: any;
}

const MessageList = (props: Props) => {
    const scrollToBottom = useScrollToBottom();
    const [sticky] = useSticky();
    console.log(scrollToBottom);
    return (
        <div className="chat-area-main">
            {!sticky && <button onClick={scrollToBottom}>Click me to scroll to bottom</button>}
            {props.messages.map((msg: any, i: number) =>
                msg.requester === props.user._id ? (
                    <div className="chat-msg owner" key={i}>
                        {/* {console.log(msg.requester, props.user._id)} */}
                        <div className="chat-msg-profile">
                            <img
                                className="chat-msg-img"
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
                                alt=""
                            />
                            <div className="chat-msg-date">{msg.createdAt}</div>
                        </div>
                        <div className="chat-msg-content">
                            {/* <div className="chat-msg-text">
                                Luctus et ultrices posuere cubilia curae.
                            </div> */}
                            {/* <div className="chat-msg-text">
                                <img
                                    src="https://media0.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47344fb5d835f832a976d1007c241548cc4eea4e7e&rid=giphy.gif"
                                    alt=""
                                />
                            </div> */}
                            <div className="chat-msg-text">{msg.message}</div>
                        </div>
                    </div>
                ) : (
                    <div className="chat-msg" key={i}>
                        {/* {console.log(msg.requester, props.user._id)} */}
                        <div className="chat-msg-profile">
                            <img
                                className="chat-msg-img"
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
                                alt=""
                            />
                            <div className="chat-msg-date">{msg.createdAt}</div>
                        </div>
                        <div className="chat-msg-content">
                            {/* <div className="chat-msg-text">
                                Luctus et ultrices posuere cubilia curae.
                            </div> */}
                            {/* <div className="chat-msg-text">
                                <img
                                    src="https://media0.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47344fb5d835f832a976d1007c241548cc4eea4e7e&rid=giphy.gif"
                                    alt=""
                                />
                            </div> */}
                            <div className="chat-msg-text">{msg.message}</div>
                        </div>
                    </div>
                ),
            )}
        </div>
    );
};

export default MessageList;
