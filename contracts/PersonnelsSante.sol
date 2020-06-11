// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;


contract PersonnelsSante {
    struct PersonnelSante {
        uint256 idPersonnel;
        string rolePersonnel;
        string nomPersonnel;
        string prenomPersonnel;
        string mailPersonnel;
    }

    mapping(uint256 => PersonnelSante) PersonnelSante_Struct;

    uint256[] public listPersonnel;

    function setNewPersonnel(
        string memory rolePersonnel,
        string memory nomPersonnel,
        string memory prenomPersonnel,
        string memory mailPersonnel
    ) public {
        // PersonnelSante_Struct[msg.sender].address_sender = msg.sender;
        uint256 newidPersonnel = listPersonnel.length + 1;

        PersonnelSante_Struct[newidPersonnel].idPersonnel = newidPersonnel;
        PersonnelSante_Struct[newidPersonnel].rolePersonnel = rolePersonnel;
        PersonnelSante_Struct[newidPersonnel].nomPersonnel = nomPersonnel;
        PersonnelSante_Struct[newidPersonnel].prenomPersonnel = prenomPersonnel;
        PersonnelSante_Struct[newidPersonnel].mailPersonnel = mailPersonnel;

        listPersonnel.push(newidPersonnel);
    }

    function getAllid() public view returns (uint256[] memory) {
        return listPersonnel;
    }

    function getRolePersonnel(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        PersonnelSante storage tmp = PersonnelSante_Struct[idPersonnel];
        return tmp.rolePersonnel;
    }

    function getNomPersonnel(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        PersonnelSante storage tmp = PersonnelSante_Struct[idPersonnel];
        return tmp.nomPersonnel;
    }

    function getPrenomPersonnel(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        PersonnelSante storage tmp = PersonnelSante_Struct[idPersonnel];
        return tmp.prenomPersonnel;
    }

    function getMailPersonnel(uint256 idPersonnel)
        public
        view
        returns (string memory)
    {
        PersonnelSante storage tmp = PersonnelSante_Struct[idPersonnel];
        return tmp.mailPersonnel;
    }
}
