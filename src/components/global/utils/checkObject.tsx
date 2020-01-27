const checkObject = (check: any, object: any) => {
    let objectArr = check.split('.');
    objectArr[0] = 'object';
    let text: string = '';
    let key: string = '';
    let keyLength = objectArr.length;
    let result: boolean = false;
    objectArr.map((objectkey: any, i: number) => {
        key = key.concat(i === 0 ? objectkey.toString() : '.' + objectkey.toString());
        text = text.concat(i === keyLength - 1 ? key : key + ' && ');
        return text;
    });
    // eslint-disable-next-line
    if (eval(text)) result = true;
    return result;
};

export { checkObject };
