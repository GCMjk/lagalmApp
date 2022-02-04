export interface IUser {
    uid: string | null;
    name: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    photo: string;
    rol: 'empleado' | string;
    area: string;
}
