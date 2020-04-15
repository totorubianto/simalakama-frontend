const hashTag = (data: any) => {
    let match: any[] = [];
    let matchArr: any[] = []; // eslint-disable-next-line
    const regex = /\#[\w\u0590-\u05ff]+/g;
    if (data.blocks.length > 0) {
        for (let index = 0; index < data.blocks.length; index++) {
            const element = data.blocks[index];
            match = element.text.match(regex);
            console.log(match);
            if (match) {
                match.forEach((element) => {
                    matchArr.push(element);
                });
            }
        }
    }
    return matchArr;
};

const mention = (data: any) => {
    let match: any[] = [];
    let matchArr: any[] = []; // eslint-disable-next-line
    const regex = /\#[\w\u0590-\u05ff]+/g;
    if (data.blocks.length > 0) {
        for (let index = 0; index < data.blocks.length; index++) {
            const element = data.blocks[index];
            match = element.text.match(regex);
            match.forEach((element) => {
                matchArr.push(element);
            });
        }
    }
    return matchArr;
};

export { hashTag, mention };
