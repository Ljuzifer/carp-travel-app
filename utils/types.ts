import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";

// **** general ****

export type SubTitle = {
    primary: string;
    secondary: string;
};

export type SubTitleProps = {
    caption: SubTitle;
    styles: string;
};

export type FormData = {
    name: string;
    email: string;
    position?: string;
    phone?: string;
    message: string;
    confirm?: boolean;
};

export type InputInfo = {
    id: string;
    type: string;
    autoComplete: string;
    placeholder: string;
    aria: string;
    error: string | null;
    required: boolean;
    pattern?: ValidationRule<RegExp>;
    minLength?: ValidationRule<number>;
    label: string;
    formData: FormDataOptions;
};

export type InputOptions = {
    required: boolean;
    pattern?: ValidationRule<RegExp>;
    minLength?: ValidationRule<number>;
};

export type Textarea = {
    id: string;
    autoComplete: string;
    aria: string;
    label: string;
    formData: FormDataOptions;
};

export type FormContent = {
    inputs: InputInfo[];
    textarea: Textarea;
    policy?: CareerConfirm;
};

export type TextareaInfo = {
    id: string;
    autoComplete: string;
    aria: string;
    label: string;
    formData: FormDataOptions;
};

export type FormDataOptions =
    | "name"
    | "email"
    | "position"
    | "phone"
    | "message"
    | "confirm";

export type FormFieldsProps = {
    inputInfo: InputInfo;
    inputStyles?: string;
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
};

export type FormTextareaProps = {
    textarea: TextareaInfo;
    textareaStyles: string;
    register: UseFormRegister<FormData>;
};

export type FormConfirmProps = {
    confirm: CareerConfirm;
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
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

// **** career ****

export type CareerBenefit = {
    name: string;
    description: string;
};

export type CareerData = {
    subTitle: SubTitle;
    description: string;
    question: string;
    benefits: CareerBenefit[];
};

export type CareerConfirm = {
    text: string;
    error: string;
    formData: FormDataOptions;
};

export type CareerForm = {
    description: string;
    formContent: FormContent;
};
