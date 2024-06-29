import { environment } from 'src/environments/environment';

export const urls_apis = {

    //GESTION DE L'AUTHENTIFICATION
    API_LOGIN               : environment.API_URL + "auth/login",
    API_REFRESH_TOKEN       : environment.API_URL + "auth/refresh-token",
    API_CREATE_USER         : environment.API_URL + "auth/signOn",

    //GESTION DES UTILISATEURS
    API_All_USERS           : environment.API_URL + "user",


    API_ADD_PROP            : environment.API_URL + "proposition/new",
    API_UPDATE_PROP         : environment.API_URL + "getScoreupdate",
    API_GET_PROPS           : environment.API_URL + "proposition",
    API_GET_SCORE           : environment.API_URL + "proposition/result",
};
