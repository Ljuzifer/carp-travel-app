// **** general ****

export type subTitle = {
    primary: string;
    secondary: string;
};

export type subTitleProps = {
    caption: subTitle;
    styles: string;
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

// **** about ****
