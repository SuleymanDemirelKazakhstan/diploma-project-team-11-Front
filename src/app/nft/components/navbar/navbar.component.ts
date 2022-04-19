import { Component, OnInit } from '@angular/core';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
import Web3 from 'web3';

@Component({
  selector: 'nft-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  async connectWallet() {
    console.log('connecting');
    const provider: any = await detectEthereumProvider();
    if (provider) {
      let web3 = new Web3(provider);
      provider === window.ethereum;

      try {
        const accounts = await provider.request({ method: 'eth_requestAccounts' });
        console.log('accounts: ', accounts);
      } catch (error) {
        console.error("can't connect to meta mask", error);
      }

      // Get provider from Metamask
      const providerMeta = new ethers.providers.Web3Provider(window.ethereum!);
      console.log('provider2: ', providerMeta);
      // Set signer
      // const signer = provider2.getSigner();
      // console.log('signer: ', signer);

      // const marketPlace = new ethers.Contract()
    } else {
      console.log('Please install MetaMask!');
    }
  }
}
