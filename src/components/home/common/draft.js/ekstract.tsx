const hashTags = (data: any) => {
    let match: any[] = [];
    let matchArr: any[] = []; // eslint-disable-next-line
    const regex = /\#[\w\u0590-\u05ff]+/g;
    if (data.blocks.length > 0) {
        for (let index = 0; index < data.blocks.length; index++) {
            const element = data.blocks[index];
            match = element.text.match(regex);
            if (match) {
                match.forEach((element) => {
                    matchArr.push(element);
                });
            }
        }
    }
    return matchArr;
};

const mentions = (data: any) => {
    let array: any = [];
    console.log(data);
    Object.keys(data.entityMap).map((e: any, i: number) => {
        if (data.entityMap[e].type === 'mention') {
            array.push(data.entityMap[e].data.mention._id);
            // const element = data.blocks[0].entityRanges[i];
            // const stringText = data.blocks[0].text.substr(element.offset, element.length);
            // array.push(stringText);
            // console.log(element);
        }
        return {};
    });
    return array;
};

export { hashTags, mentions };
