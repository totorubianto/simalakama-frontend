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
import createEmojiPlugin from 'draft-js-emoji-plugin';
import {
    Dropdown,
    IDropdownOption,
    DropdownMenuItemType,
    IDropdownProps,
    Icon,
} from 'office-ui-fabric-react';

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
    scope: {
        key: string;
        text: string;
        data: { icon: string };
    };
}

class Post extends Component<Props, State> {
    private editor: any;
    constructor(props: any) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            suggestion: [],
            images: '',
            scope: {
                key: 'FRIEND',
                text: 'Friend',
                data: { icon: 'Memo' },
            },
        };
        this.onPost = this.onPost.bind(this);
        this.onFile = this.onFile.bind(this);
    }

    mentionPlugin = createMentionPlugin();
    hashtagPlugin = createHashtagPlugin();
    linkifyPlugin = createLinkifyPlugin();
    emojiPlugin = createEmojiPlugin();

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
        this.props.createPost(
            [content, hashtag, mention, this.state.scope.key],
            this.state.images,
            1,
            0,
        );
        this.setState({ editorState: EditorState.createEmpty() });
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

    onSetScope = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
        this.setState({
            scope: { key: item.key.toString(), text: item.text, data: { icon: 'Memo' } },
        });
    };
    render() {
        const { EmojiSuggestions, EmojiSelect } = this.emojiPlugin;
        const { MentionSuggestions } = this.mentionPlugin;
        const plugins = [
            this.mentionPlugin,
            this.hashtagPlugin,
            this.linkifyPlugin,
            this.emojiPlugin,
        ];
        return (
            <PostStyle>
                <div className="input-group-post align-item-center">
                    <Text
                        type={TextType.HEADLINE}
                        text="Create Post"
                        textSize={TextSize.MEDIUM}
                        margin={{ bottom: 10, top: 0 }}
                    />
                    <Dropdown
                        selectedKey={this.state.scope ? this.state.scope.key : null}
                        onChange={(event: any, i: any) => this.onSetScope(event, i)}
                        placeholder="Select an option"
                        onRenderOption={(e: any) => onRenderOption(e)}
                        onRenderTitle={(e: any) => onRenderTitle(e)}
                        onRenderPlaceholder={(e: any) => onRenderPlaceholder(e)}
                        options={dropdownControlledExampleOptions}
                        styles={dropdownStyles}
                    />
                </div>

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
                    <EmojiSuggestions />
                </div>
                <div className="input-group-post">
                    <div className="left">
                        <FileFieldGroup name="images" multiple={true} onChange={this.onFile} />
                        <EmojiSelect />
                    </div>
                    <div className="right">
                        <Button type="button" value="Kirim" onClick={this.onPost}></Button>
                    </div>
                </div>
            </PostStyle>
        );
    }
}

const iconStyles = { marginRight: '8px' };
const dropdownStyles = { dropdown: { width: 100 } };

const onRenderPlaceholder = (props: IDropdownProps): JSX.Element => {
    console.log(props);
    return (
        <div className="dropdownExample-placeholder">
            <Icon style={iconStyles} iconName={'MessageFill'} aria-hidden="true" />
            <span>{props.placeholder}</span>
        </div>
    );
};

const onRenderTitle = (options: IDropdownOption[]): JSX.Element => {
    const option = options[0];

    return (
        <div>
            {option.data && option.data.icon && (
                <Icon
                    style={iconStyles}
                    iconName={option.data.icon}
                    aria-hidden="true"
                    title={option.data.icon}
                />
            )}
            <span>{option.text}</span>
        </div>
    );
};

const onRenderOption = (option: IDropdownOption): JSX.Element => {
    return (
        <div>
            {option.data && option.data.icon && (
                <Icon
                    style={iconStyles}
                    iconName={option.data.icon}
                    aria-hidden="true"
                    title={option.data.icon}
                />
            )}
            <span>{option.text}</span>
        </div>
    );
};

const dropdownControlledExampleOptions = [
    { key: 'Scope', text: 'Scope', itemType: DropdownMenuItemType.Header },
    { key: 'PUBLIC', text: 'Public', data: { icon: 'Globe' } },
    { key: 'FRIEND', text: 'Friend', data: { icon: 'Globe' } },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
];

const mapStateToProps = (state: any) => ({
    posts: state.posts,
    error: state.error,
    friends: state.friends,
});

export default connect(mapStateToProps, { createPost, getFriendByUsername })(Post);
