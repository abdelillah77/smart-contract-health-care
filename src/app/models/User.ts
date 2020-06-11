export interface User {
    prenomPersonnel: string,
    nomPersonnel: string,
    age?: number,
    mailPersonnel?: string,

    isActive?: boolean,
    registered?: any,
    hide?: boolean
}
/*
 uint256 idPersonnel;
        string rolePersonnel;
        string nomPersonnel;
        string prenomPersonnel;
        string mailPersonnel;
        */