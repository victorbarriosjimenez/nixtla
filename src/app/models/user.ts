export interface User {
    uid?: string;
    name?: string;
    email?: string;
    photoUrl?: string;
    curp?: string;
    rfc?: string;
    nss?: string;
    password?: string;
    employeeKey?: string;
    salary?: number; 
    salaryType?: string; 
    status?: boolean;
}
export interface Administrator extends User { 
    isAdmin?: boolean;
}
export interface Promoter extends User { 
    city: string;
    state: string;
    address: string;
    contractDateBegin: Date;
    contractDateExp: Date;
    birthDate: Date;
    postalCode: string;
    image: string,
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