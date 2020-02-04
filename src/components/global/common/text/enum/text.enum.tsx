enum TextType {
    HEADLINE = 'HEADLINE',
    PARAGRAPH = 'PARAGRAPH',
}
enum TextSize {
    SMALL = 'SMALL',
    NORMAL = 'NORMAL',
    MEDIUM = 'MEDIUM',
    BIG = 'BIG',
}
const getStr = (en: string): string => {
    switch (en) {
        case TextType.HEADLINE:
            return 'HEADLINE';
        case TextType.PARAGRAPH:
            return 'PARAGRAPH';
        default:
            return 'PARAGRAPH';
    }
};



const getNum = (en: string): number => {
    switch (en) {
        case TextSize.SMALL:
            return 14;
        case TextSize.NORMAL:
            return 16;
        case TextSize.MEDIUM:
            return 20;
        case TextSize.BIG:
            return 25;
        default:
            return 16;
    }
};

export { TextType, TextSize, getStr, getNum };
