import React, { Component } from 'react';
import { EditorState, convertToRaw, RichUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin from 'draft-js-mention-plugin';
import createHashtagPlugin from '../../global/draft.js/hashtag';
import createLinkifyPlugin from '../../global/draft.js/linkfy';
import { connect } from 'react-redux';
import { createPost } from '../../../stores/post/action';
import { Button } from 'components/global/common';
import PostStyle from '../styles/postStyle';
import { getFriendByUsername } from 'stores/friend/action';
import { hashTag } from './draft.js/ekstract';
import Text from '../../global/common/text/Text';
import { TextType, TextSize } from 'components/global/common/text/enum/text.enum';

interface Props {
    createPost: any;
    getFriendByUsername: Function;
    friends: {
        suggestion: [];
    };
}
interface State {
    editorState: any;
    suggestion: any[];
}

class Post extends Component<Props, State> {
    private editor: any;
    constructor(props: any) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty(),
            suggestion: [],
        };

        this.onPost = this.onPost.bind(this);
    }

    mentionPlugin = createMentionPlugin();
    hashtagPlugin = createHashtagPlugin();
    linkifyPlugin = createLinkifyPlugin();
    onChange = (editorState: any) => {
        this.setState({
            editorState,
        });
    };

    onPost() {
        const raw = convertToRaw(this.state.editorState.getCurrentContent());
        const content = JSON.stringify(raw, null, 2);
        const hashtag = hashTag(raw);
        this.props.createPost([content, hashtag], null, 1, 0);
    }

    UNSAFE_componentWillReceiveProps(nextProps: any) {
        if (nextProps.friends !== this.props.friends) {
            //Perform some operation
            this.setState({ suggestion: nextProps.friends.sugestion });
        }
    }

    onSearchChange = ({ value }: any) => {
        this.props.getFriendByUsername(value);
    };

    onAddMention = () => {
        // get the mention object selected
    };

    handleKeyCommand(command: any, editorState: any) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    focus = () => {
        this.editor.focus();
    };

    render() {
        // console.log(this.props.friends);
        const { MentionSuggestions } = this.mentionPlugin;
        const plugins = [this.mentionPlugin, this.hashtagPlugin, this.linkifyPlugin];
        return (
            <PostStyle>
                <Text
                    type={TextType.HEADLINE}
                    text="Create Post"
                    textSize={TextSize.MEDIUM}
                    margin={{ bottom: 10, top: 0 }}
                />
                <div className="editor" onClick={this.focus}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        ref={(element: any) => {
                            this.editor = element;
                        }}
                        handleKeyCommand={this.handleKeyCommand}
                    />
                    <MentionSuggestions
                        onSearchChange={this.onSearchChange}
                        suggestions={this.state.suggestion}
                        onAddMention={this.onAddMention}
                    />
                </div>
                <Button type="button" value="Kirim" onClick={this.onPost}></Button>
            </PostStyle>
        );
    }
}

const mapStateToProps = (state: any) => ({
    posts: state.posts,
    error: state.error,
    friends: state.friends,
});

export default connect(mapStateToProps, { createPost, getFriendByUsername })(Post);
