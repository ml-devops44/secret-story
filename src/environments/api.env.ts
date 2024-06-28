import { environment } from 'src/environments/environment';

export const urls_apis = {

    //GESTION DE L'AUTHENTIFICATION
    API_LOGIN               : environment.API_URL + "auth/login",
    API_REFRESH_TOKEN       : environment.API_URL + "auth/refresh-token",
    API_CREATE_USER         : environment.API_URL + "auth/signOn",

    //GESTION DES UTILISATEURS
    API_All_USERS           : environment.API_URL + "users/all",
    API_UPDATE_USER         : environment.API_URL + "users/update",
    API_DELETE_USER         : environment.API_URL + "users/delete/",

    //GESTION DES STATISTIQUES
    API_GLOBAL_STATS        : environment.API_URL + "statistics/anonym",
    API_VERSIONS_STATS      : environment.API_URL + "statistics/anonym/version",
    API_GET_ALL_BY_IP       : environment.API_URL + "statistics/anonym/ip/",

    //GESTION DES APIS
    API_ALL_ENTRIES_ANONYM  : environment.API_URL + "ges-api"
};
