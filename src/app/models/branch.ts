export class Branch { 
        name?: string;
        city?: string;
        state?: string;
        supervisorMin?: number;
        supervisorMax?: number;     
        promotersMin: number;
        promotersMax: number;           
        address1?: string;     
        address2?: string;
        postalCode?: string;
        contact?: string;
        contactEmail?: string;     
        scheduleMonFriOpen?: string; 
        scheduleMonFriClose?: string;         
        scheduleSatOpen?: string;
        scheduleSatClose?: string;        
        scheduleSunOpen?: string; 
        scheduleSunClose?: string;      
        details?: string;
        image?: string;
        extraHours?: number;
        coordintatesLat?: number;
        coordinatesLng?: number;
}