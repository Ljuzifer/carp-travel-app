// **** general ****

export type SubTitle = {
    primary: string;
    secondary: string;
};

export type SubTitleProps = {
    caption: SubTitle;
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
    subTitle: SubTitle;
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
    subTitle: SubTitle;
    description: AboutDescription[];
    banner: AboutBanner;
};

// **** offer ****

export interface OfferDetails {
    id: number;
    bg: string;
    image: string;
    promo: string;
    title: string;
    text: string;
}

// **** benefits ****
