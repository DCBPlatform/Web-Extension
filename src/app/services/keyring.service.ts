import { Injectable } from '@angular/core';
import { Keyring } from '@polkadot/keyring';
import { mnemonicGenerate, blake2AsHex, signatureVerify } from '@polkadot/util-crypto';
import { stringToU8a, u8aToHex, hexToString, stringToHex } from '@polkadot/util';
import { cryptoWaitReady } from '@polkadot/util-crypto';


import { Message } from '@angular/compiler/src/i18n/i18n_ast';

import * as CryptoJS from 'crypto-js';



@Injectable({
  providedIn: 'root'
})
export class KeyringService {

    primaryWallet;
    wallets;

    contacts;
    
    constructor() {      
        //localStorage.removeItem("wallets");
        this.getLocalWallets();
        
    }

    lol() {
// initial setup
cryptoWaitReady()
  .then((): void => {
    console.log('crypto initialized');

    // load all the keyring data
    

    console.log('initialization completed');
  })
  .catch((error): void => {
    console.error('initialization failed', error);
  });        
    }

    generateKeyring() {
        const mnemonic = mnemonicGenerate();
        const keyring = new Keyring({ type: 'sr25519', ss58Format: 42 }); // 42 is substrate ss58 id
        const newKeyring = keyring.createFromUri(mnemonic);
        let newKeyringJson = {
            'public': newKeyring.toJson().address,
            'mnemonic': mnemonic
        }
        return newKeyringJson;
    }

    signMessage(keyring, _message) {
        const message = stringToU8a(_message);
        const signature = keyring.sign(message);
        return signature
    }

    verifyMessage(signature, address, message) {
        const { isValid } = signatureVerify(message, signature, address);
        return isValid
    }

    encodeMessageFromString(message) {
        const hash = blake2AsHex(message)
        return hash        
    }

    decodeMessageFromHash(hash) {
        const message = hexToString(hash)
        return message
    }

    getLocalWallets() {
        this.wallets = JSON.parse(localStorage.getItem('wallets'));
        if (this.wallets != null) {
            this.primaryWallet = this.wallets[0];
        }
        return this.wallets;
    }

    getLocalContacts() {
        this.contacts = JSON.parse(localStorage.getItem('contacts'));
        return this.contacts;
    }

    addLocalWallet(publicKey, mnemonic, password) {

        let encrypted_mnemonic = this.encrypt(mnemonic, password);

        let newWallet = {
            'address': publicKey,
            'mnemonic': encrypted_mnemonic
        }

        let wallets = JSON.parse(localStorage.getItem('wallets'));
        console.log(wallets)

        if (wallets == null) {
            let newWallets = [];
            newWallets.push(newWallet);
            wallets = newWallets;
        } else {            
            wallets.push(newWallet);
        }
        console.log(wallets)
        localStorage.setItem('wallets', JSON.stringify(wallets));
        this.wallets = wallets;
        return wallets;
    }

    removeLocalWallet(publicKey) {
        let wallets = JSON.parse(localStorage.getItem('wallets'));

        if (wallets.length > 0) {
            let walletIndex = wallets.findIndex(element => element.publicKey = publicKey);
            wallets.splice(walletIndex, 1)
        } 

        localStorage.setItem('wallets', JSON.stringify(wallets));
        this.wallets = wallets;  
        return wallets;      
    }

    setPrimaryLocalWallet(publicKey) {
        let wallets = JSON.parse(localStorage.getItem('wallets'));

        if (wallets.length > 0) {
            let walletIndex = wallets.findIndex(element => element.publicKey = publicKey);
            wallets.splice(walletIndex, 1)
        } 

        let wallet = wallets.find(element => element.publicKey = publicKey);
        wallets.unshift(wallet);

        localStorage.setItem('wallets', JSON.stringify(wallets));
        this.wallets = wallets;  
        return wallets;        
    }

    emptyAllLocalWallets() {
        localStorage.removeItem("wallets");
    }

    encrypt(value : string, secretKey: string) : string{
        return CryptoJS.AES.encrypt(value, secretKey.trim()).toString();
    }
    
    decrypt(textToDecrypt : string, secretKey){
        return CryptoJS.AES.decrypt(textToDecrypt, secretKey.trim()).toString(CryptoJS.enc.Utf8);
    }    



}