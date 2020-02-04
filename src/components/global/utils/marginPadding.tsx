const margin = (margins: any) => {
    if (margins.all) {
        return `margin: ${margins.all}px;`;
    }
    const margin = Object.keys(margins);
    let text: string = '';
    let textString: string = '';
    margin.map(data => {
        textString = `margin-${data}: ${margins[data]}px;`;
        text = text.concat(textString);
        return text;
    });
    return text;
};

const padding = (paddings: any) => {
    if (paddings.all) {
        return `padding: ${paddings.all}px;`;
    }
    const margin = Object.keys(paddings);
    let text: string = '';
    let textString: string = '';
    margin.map(data => {
        textString = `padding-${data}: ${paddings[data]}px;`;
        text = text.concat(textString);
        return text;
    });
    return text;
};

export { margin, padding };
