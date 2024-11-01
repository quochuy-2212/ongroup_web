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

export interface IHeader {
    href: string;
    text: string;
    menu?: IHeader[];
}
