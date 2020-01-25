const inputType = (event: any, state: any, setState: Function) => {
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
            setState({ ...state, [event.target.name]: event.target.checked });
            break;
        default:
            break;
    }
    return 'toto';
};

export { inputType };
