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
    class: string;
    image: string;
    slogan: string;
    name: string;
    text: string;
}

export type OfferBadgeProps = {
    slogan: string;
    image: string;
    name: string;
    text: string;
};

export type OfferMenuProps = {
    slideOrderNumber: number;
    slogan: string;
    onMenuSelect: (e: React.MouseEvent<HTMLLIElement>) => void;
};

// **** benefits ****
