const checkObject = (object: any) => {
    const objectArr = object.split('.');
    let text: string = '';
    let key: string = '';
    let keyLength = objectArr.length;
    objectArr.map((objectkey: any, i: number) => {
        key = key.concat(i === 0 ? objectkey.toString() : '.' + objectkey.toString());
        text = text.concat(i === keyLength - 1 ? key : key + ' && ');
        return text;
    });
    return text;
};

export { checkObject };
