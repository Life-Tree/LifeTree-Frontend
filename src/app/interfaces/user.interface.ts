export interface User{
    _id?: any;
    nickname: string;
    password: string | "NA";
    tipo?: "CIUDADANO" | "ADMIN";
}