enum PersonaSize {
    SMALL = 'SMALL',
    MEDIUM = 'MEDIUM',
    BIG = 'BIG',
}
const getStr = (en: string): number => {
    switch (en) {
        case PersonaSize.SMALL:
            return 25;
            break;
        case PersonaSize.MEDIUM:
            return 50;
            break;
        case PersonaSize.BIG:
            return 75;
            break;
        default:
            return 50;
            break;
    }
};

export { PersonaSize, getStr };
