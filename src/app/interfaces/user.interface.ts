export interface User{
    nickname: string;
    password: string | "NA";
    tipo: "CIUDADANO" | "ADMIN";
}