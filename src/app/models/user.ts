export interface User {
    uid?: string;
    name?: string;
    photoUrl?: string;
    curp?: string;
    rfc?: string;
    nss?: string;
    departamento?: string;
    employeeKey?: string; 
}
export interface Administrator extends User { 
}
export interface Promoter extends User { 
}
export interface Supervisor extends User {
}