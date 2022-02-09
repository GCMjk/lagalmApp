export interface IRegisterUser {
    uid: string | null;
    name: string;
    lastname: string;
    birthday: string;
    phone: string;
    email: string;
    password: string;
    adress: string;
    curp: string;
    rfc: string;
    civilStatus: string;
    scholarship: string;
    accountNumber: number;
    employeeNumber: number;
    securityNumber: number;
    infonavit: boolean;    
    emergencyNumber: string;
    photo: string;
    rol: 'empleado' | string;
    area: string;
    jobDescription: string;
}

export interface ILoginUser {
    email: string;
    password: string;
}
