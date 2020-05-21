import React, { useState, useEffect } from 'react';

interface Props {
    friends: any;
    history: any;
    auth: any;
    io: any;
}

const AreaConversation = (props: Props) => {
    const [connect, setConnect]: any[] = useState([]);
    useEffect(() => {
        props.io.on('CONNECT', (data: any) => {
            if (props.friends.friends.some((fr: any) => fr.friend._id === data)) {
                console.log(connect);
                setConnect([...connect, data]);
            }
        });
        // eslint-disable-next-line
    }, []);

    const [isActive, setIsActive] = useState(1);
    const onSetActive = (key: any) => {
        setIsActive(key);
        props.history.push(`?id=${key}`);
    };
    return (
        <div className="conversation-area">
            {console.log(connect)}
            {props.friends.friends.map((friend: any, key: number) => (
                <div
                    className={isActive === friend.friend._id ? 'msg active' : 'msg'}
                    key={key}
                    onClick={(e) => onSetActive(friend.friend._id)}
                >
                    <img
                        className="msg-profile"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
                        alt=""
                    />
                    <div className="msg-detail">
                        <div className="msg-username">{friend.friend.firstName}</div>
                        <div className="msg-content">
                            <span className="msg-message">What time was our meet</span>
                            {connect.includes(friend.friend._id) ? (
                                <span className="msg-date">online</span>
                            ) : (
                                <span className="msg-date">20m</span>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* <div className="msg active">
                <div className="msg-profile group">
                    <svg
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                    >
                        <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" />
                        <path d="M22 8.5l-10 7-10-7" />
                        <path d="M2 15.5l10-7 10 7M12 2v6.5" />
                    </svg>
                </div>
                <div className="msg-detail">
                    <div className="msg-username">CodePen Group</div>
                    <div className="msg-content">
                        <span className="msg-message">Aysenur: I love CSS</span>
                        <span className="msg-date">28m</span>
                    </div>
                </div>
            </div> */}
            {/* <div className="msg">
                <img
                    className="msg-profile"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%284%29+%281%29.png"
                    alt=""
                />
                <div className="msg-detail">
                    <div className="msg-username">Jared Jackson</div>
                    <div className="msg-content">
                        <span className="msg-message">Tattooed brooklyn typewriter gastropub</span>
                        <span className="msg-date">18m</span>
                    </div>
                </div>
            </div> */}

            <button className="add"></button>
            <div className="overlay"></div>
        </div>
    );
};

export default AreaConversation;
