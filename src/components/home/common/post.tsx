import React, { Component } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import mentions from './mention';
import { connect } from 'react-redux';
import { createPost } from '../../../stores/post/action';
import { Button } from 'components/global/common';
interface Props {
    createPost: any;
}
interface State {}

class Post extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = { editorState: EditorState.createEmpty(), suggestions: [] };
        this.onPost = this.onPost.bind(this);
    }
    componentDidMount() {
        // Load editor data (raw js object) from local storage
        const rawEditorData = this.getSavedEditorData();
        if (rawEditorData !== null) {
            const contentState = convertFromRaw(rawEditorData);
            this.setState({
                editorState: EditorState.createWithContent(contentState),
            });
        }
    }

    getSavedEditorData() {
        const savedData = localStorage.getItem('editorData');

        return savedData ? JSON.parse(savedData) : null;
    }

    state = {
        editorState: EditorState.createEmpty(),
        suggestions: mentions,
    };

    mentionPlugin = createMentionPlugin();
    onChange = (editorState: any) => {
        this.setState({
            editorState,
        });
    };

    onPost() {
        console.log(this);
        const raw = convertToRaw(this.state.editorState.getCurrentContent());
        const content = JSON.stringify(raw, null, 2);
        this.props.createPost(content, null, 1, 0);
    }

    onSearchChange = ({ value }: any) => {
        this.setState({
            suggestions: defaultSuggestionsFilter(value, mentions),
        });
    };

    onAddMention = () => {
        // get the mention object selected
    };

    render() {
        const { MentionSuggestions } = this.mentionPlugin;
        const plugins = [this.mentionPlugin];
        return (
            <div>
                <div className="editor">
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                    />
                    <MentionSuggestions
                        onSearchChange={this.onSearchChange}
                        suggestions={this.state.suggestions}
                        onAddMention={this.onAddMention}
                    />
                </div>
                <Button type="button" value="Kirim" onClick={this.onPost}></Button>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    posts: state.posts,
    error: state.error,
});

export default connect(mapStateToProps, { createPost })(Post);
