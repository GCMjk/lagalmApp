export interface ILoginUser {
    email: string;
    password: string;
}

export interface IRegisterUser extends ILoginUser {
    uid: string | null;
    id: number;
    name: IName;
    birthday: IBirthday;
    curp: string;
    rfc: string;
    civilStatus: string;
    scholarship: string;
    phone: string;
    emergencyPhone: number;
    address: IAddress;
    cardNumber: number;
    securityNumber: number;
    infonavit: boolean;
    photo: string;
    job: IJob;
}

interface IName {
    first: string;
    last: string;
}
interface IBirthday {
    day: number;
    month: number;
    year: number;
}
interface IAddress {
    street: string;
    number: number;
    exNumber: string;
    city: string;
    state: string;
    zip: number
}
interface IJob {
    rol: string;
    area: string;
    description: string;
}
