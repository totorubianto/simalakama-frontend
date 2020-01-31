enum PersonaSize {
    SMALL = 'SMALL',
    MEDIUM = 'MEDIUM',
    BIG = 'BIG',
}
const getNum = (en: string): number => {
    switch (en) {
        case PersonaSize.SMALL:
            return 25;
        case PersonaSize.MEDIUM:
            return 50;
        case PersonaSize.BIG:
            return 75;
        default:
            return 50;
    }
};

export { PersonaSize, getNum };
