// **** general data ****

export type subTitle = {
    primary: string;
    secondary: string;
};

// **** header ****

export type MobileMenuProps = {
    isMenuOpen: boolean;
    toggleMenu: () => void;
};

// **** hero ****

export type HeroData = {
    mainTitle: string;
    subTitle: subTitle;
    description: string;
    towns: string;
};
