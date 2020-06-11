// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;
import "./PersonnelsSante.sol";


contract Administrateur {
    string idAdmin;
    string nomAdmin;
    string prenomAdmin;
    uint256 numeroTel;
    string mailAdmin;

    //declaration de structure pour les roles
    struct role_Struct {
        string typeRole;
        string permission;
    }
    mapping(string => role_Struct) Role;

    string[] public listRole;

    PersonnelsSante Employe;

    function initAdministrateur(
        string memory _idAdmin,
        string memory _nomAdmin,
        string memory _prenomAdmin,
        uint256 _numeroTel,
        string memory _mailAdmin
    ) public {
        idAdmin = _idAdmin;
        nomAdmin = _nomAdmin;
        prenomAdmin = _prenomAdmin;
        numeroTel = _numeroTel;
        mailAdmin = _mailAdmin;
    }

    function addRole(string memory nv_role, string memory _permission) public {
        // uint256  newRole = listRole.length + 1;

        Role[nv_role].typeRole = nv_role;
        Role[nv_role].permission = _permission;

        listRole.push(nv_role);
    }

    function getRoleByName(string memory _typerole)
        public
        view
        returns (string memory, string memory)
    {
        //cree une celle (struct) pour contenir le role stoqué dans la blockchain
        role_Struct storage tmp = Role[_typerole];

        return (tmp.typeRole, tmp.permission);
    }

    function getAllRole() public view returns (string memory) {
        //récupéré les nom de roles contenu dans le tableau listRole
        for (uint256 i = 0; i < listRole.length; i++) {
            return listRole[i];
        }
    }
    /*
    function creatNewPersonnel(
        string memory _rolePersonnel,
        string memory nomPersonnel,
        string memory prenomPersonnel,
        string memory mailPersonnel
    ) public {
        //récupéré role avec le nom de role 
        role_Struct storage tmp = Role[_rolePersonnel];

         //cree un nouveau personnel de ssante 
       Employe.setNewPersonnel(tmp.typeRole,nomPersonnel,prenomPersonnel,mailPersonnel);
    }
*/
}
