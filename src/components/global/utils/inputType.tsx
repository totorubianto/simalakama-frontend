const inputType = (event: any, state: any, setState: Function, option?: any) => {
    switch (event.target.type) {
        case 'text':
            setState({ ...state, [event.target.name]: event.target.value });
            break;
        case 'password':
            setState({ ...state, [event.target.name]: event.target.value });
            break;
        case 'email':
            setState({ ...state, [event.target.name]: event.target.value });
            break;
        case 'checkbox':
            setState({
                ...state,
                [event.target.name]: option?.checkbox?.antonym
                    ? !event.target.checked
                    : event.target.checked,
            });
            break;
        case 'file':
            setState({ ...state, [event.target.name]: event.target.files });
            break;
        default:
            break;
    }
};

export { inputType };
