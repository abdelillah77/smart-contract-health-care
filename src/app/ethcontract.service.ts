import { Injectable } from '@angular/core';
import * as Web3 from 'web3';
import * as TruffleContract from 'truffle-contract';
declare let require: any;
declare let window: any;
let Abi1 = require('../../build/contracts/Administrateur.json');
let Abi2 = require('../../build/contracts/PersonnelsSante.json');

@Injectable({
  providedIn: 'root'
})
export class EthcontractService {

  private web3Provider: null;
  private contracts: {};

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    window.web3 = new Web3(this.web3Provider);
  }
  /*
  getAccountInfo() {
    return new Promise((resolve, reject) => {
      window.web3.eth.getCoinbase(function (err, account) {
        if (err === null) {
          Web3.eth.getBalance(account, function (err, balance) {
            if (err === null) {
              return resolve({ fromAccount: account, balance: Web3.fromWei(balance, "ether") });
            } else {
              return reject("error!");
            }
          });
        }
      });
    });
  }
*/
  addUser(
    rolePersonnel,
    nomPersonnel,
    prenomPersonnel,
    mailPersonnel
  ) {
    let that = this;
    return new Promise((resolve, reject) => {
      let utilisateur = TruffleContract(Abi2);
      utilisateur.setProvider(that.web3Provider);
      utilisateur.deployed().then(function (instance) {
        return instance.setNewPersonnel(
          rolePersonnel,
          nomPersonnel,
          prenomPersonnel,
          mailPersonnel

        );
      }).then(function (status) {
        if (status) {
          console.log("yessssssssssssssss");
          return resolve({ status: true });
        }
      }).catch(function (error) {
        console.log(error);
        return reject("Error ");
      });
    });
  }
}



