export interface User {
    uid?: string;
    name?: string;
    email?: string;
    photoUrl?: string;
    curp?: string;
    rfc?: string;
    nss?: string;
    departamento?: string;
    password?: string;
    employeeKey?: string; 
}
export interface Administrator extends User { 
}
export interface Promoter extends User { 
}
export interface Supervisor extends User {
}