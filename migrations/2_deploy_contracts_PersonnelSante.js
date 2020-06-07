const PersonnelsSante = artifacts.require("./PersonnelsSante.sol");

module.exports = function(deployer) {
  deployer.deploy(PersonnelsSante);
};
