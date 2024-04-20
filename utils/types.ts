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
    screen: boolean;
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

export type AboutDescription = {
    primary: string;
    secondary: string;
};

export type AboutBanner = {
    from: string;
    to: string;
    offer: string;
};

export type AboutData = {
    subTitle: subTitle;
    description: AboutDescription[];
    banner: AboutBanner;
};

// **** offer ****
