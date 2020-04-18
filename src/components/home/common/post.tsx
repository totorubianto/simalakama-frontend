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
import { hashTags, mentions } from './draft.js/ekstract';
import Text from '../../global/common/text/Text';
import { TextType, TextSize } from 'components/global/common/text/enum/text.enum';
import FileFieldGroup from 'components/global/common/input/FileFieldGroup';

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
    images: any;
}

class Post extends Component<Props, State> {
    private editor: any;
    constructor(props: any) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            suggestion: [],
            images: '',
        };
        this.onPost = this.onPost.bind(this);
        this.onFile = this.onFile.bind(this);
    }

    mentionPlugin = createMentionPlugin();
    hashtagPlugin = createHashtagPlugin();
    linkifyPlugin = createLinkifyPlugin();

    onChange = (editorState: any) => {
        this.setState({
            editorState,
        });
    };

    //untuk dikirim ke action post
    onPost() {
        const raw = convertToRaw(this.state.editorState.getCurrentContent());
        const content = JSON.stringify(raw, null, 2);
        const hashtag = hashTags(raw);
        const mention = mentions(raw);
        this.props.createPost([content, hashtag, mention], this.state.images, 1, 0);
    }

    // terima props
    UNSAFE_componentWillReceiveProps(nextProps: any) {
        if (nextProps.friends !== this.props.friends)
            this.setState({ suggestion: nextProps.friends.sugestion });
    }

    onSearchChange = ({ value }: any) => {
        this.props.getFriendByUsername(value);
    };

    //biar bisa bold italic dll
    handleKeyCommand(command: any, editorState: any) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (!newState) return 'not-handled';
        this.onChange(newState);
        return 'handled';
    }

    //untuk fokusin ke text editor
    focus = () => {
        this.editor.focus();
    };
    onFile = (e: any) => {
        this.setState({ images: e.target.files });
    };
    render() {
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
                    />
                </div>
                <FileFieldGroup
                    name="images"
                    multiple={true}
                    onChange={this.onFile}
                ></FileFieldGroup>
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
