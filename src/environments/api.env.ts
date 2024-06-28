import { environment } from 'src/environments/environment';

export const urls_apis = {

    //GESTION DE L'AUTHENTIFICATION
    API_LOGIN               : environment.API_URL + "auth/login",
    API_REFRESH_TOKEN       : environment.API_URL + "auth/refresh-token",
    API_CREATE_USER         : environment.API_URL + "auth/signOn",

    //GESTION DES UTILISATEURS
    API_All_USERS           : environment.API_URL + "user",

};
