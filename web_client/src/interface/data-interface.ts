export interface IIntroCompany {
    logo: string;
    name: string;
    description: string;
}

export interface IFieldActives {
    icon: string;
    title: string;
    text: string;
    image: string;
}

export interface IPosts {
    id: string;
    image: string;
    title: string;
    date: string;
    sub_title: string;
}

export interface IMemberCompany {
    image: string;
    logo: string;
    text: string;
}

export interface IMenu {
    href: string;
    text: string;
    menu_sub: IMenu[];
}
