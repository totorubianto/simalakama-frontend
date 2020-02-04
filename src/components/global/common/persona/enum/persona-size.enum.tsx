enum PersonaSize {
    SMALL = 'SMALL',
    MEDIUM = 'MEDIUM',
    BIG = 'BIG',
}
enum PersonaMode {
    VERTICAL = 'VERTICAL',
    HORIZONTAL = 'HORIZONTAL',
}
const getNum = (en: string): number => {
    switch (en) {
        case PersonaSize.SMALL:
            return 40;
        case PersonaSize.MEDIUM:
            return 50;
        case PersonaSize.BIG:
            return 75;
        default:
            return 50;
    }
};

export { PersonaSize, getNum, PersonaMode };
