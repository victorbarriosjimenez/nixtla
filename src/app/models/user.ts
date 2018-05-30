// User representa al usuario en general, Administrator, Promoter y Supervisor
export interface User {
    uid?: string; // Id 
    name?: string; // Nombre
    email?: string; //correo electronico 
    curp?: string; // CURP
    rfc?: string; //RFC
    nss?: string; // Numero de seguridad social
    password?: string; // Contraseña (login)
    employeeKey?: string; // Tipo de empleado
    status?: boolean; // Estatus del empleado
}
export interface Administrator extends User { 
    isAdmin?: boolean;
}
export interface Promoter extends User { 
    city: string;
    state: string;
    address: string;
    contractDateBegin: Date; // Fecha de inicio de contrato
    contractDateExp: Date; // Fecha de fin de contrato
    birthDate: Date; // Fecha de nacimiento
    postalCode: string; //Codigo postal
    image: string, // Fotografia
}
export interface Supervisor extends User {
    city: string;
    state: string;
    address: string;
    contractDateBegin: Date;
    contractDateExp: Date;
    birthDate: Date;
    postalCode: string;
    image: string,
}
export const stateGroups = [
    {
      name: 'A',
      states: [
        { value: 'Aguascalientes' }
      ]
    },
    {
      name: 'B',
      states: [
        { value: 'Baja California' },
        { value: 'Baja California Sur' }
      ]
    },
    {
      name: 'C',
      states: [
        { value: 'Campeche'},
        { value: 'Coahuila de Zaragoza'},
        { value: 'Colima'},
        { value: 'Chiapas'},
        { value: 'Chihuahua'},  
        { value: 'CDMX'}                              
      ]
    },
    {
      name: 'D',
      states: [
        { value: 'Durango'}                              
      ]
    },
    {
      name: 'G',
      states: [
        { value: 'Guanajuato'},
        { value: 'Guerrero'}                                                                       
      ]
    },
    {
      name: 'H',
      states: [
        { value: 'Hidalgo'}                                                                               
      ]
    },
    {
      name: 'J',
      states: [
        { value: 'Jalisco'}                                                                                      
      ]
    },
    {
      name: 'M',
      states: [
        { value: 'México'},
        { value: 'Michoacán de Ocampo'},
        { value: 'Morelos'}          
      ]
    },
    {
      name: 'N',
      states: [
        { value: 'Nayarit'},
        { value: 'Nuevo León'}
      ]
    },
    {
      name: 'O',
      states: [
        { value: 'Oaxaca'}        
      ]
    },
    {
      name: 'P',
      states: [
        { value: 'Puebla'}        
      ]
    },
    {
      name: 'Q',
      states: [
        { value: 'Quintana Roo'} 
      ]
    },
    {
      name: 'S',
      states: [
        { value: 'San Luis Potosi'},
        { value: 'Sinaloa'},
        { value: 'Sonora'}                         
      ]
    },
    {
      name: 'T',
      states: [
        { value: 'Tabasco'},
        { value: 'Tamaulipas'},
        { value: 'Tlaxcala'},        
      ]
    },
    {
      name: 'V',
      states: [
        { value: 'Veracruz'}
      ]
    },
    {
      name: 'Y',
      states: [
        { value: 'Yucatán'}
      ]
    },
    {
      name: 'Z',
      states: [
        { value: 'Zacatecas'}
      ]
    }
  ]; 