import { Component, OnInit } from '@angular/core';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
import Web3 from 'web3';
import { BlockHeader, Block } from 'web3-eth';

interface ConnectInfo {
  chainId: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.test();
  }

  async test() {
    let web3 = new Web3();
    // console.log(web3);
    // web3;
    // const provider: any = await detectEthereumProvider();
    // if (provider) {
    // provider === window.ethereum;
    // const provider2 = new ethers.providers.Web3Provider(window.ethereum!);
    // console.log(provider2);
    // ethers.providers
    // } else {
    //   console.log('Please install MetaMask!');
    // }
  }
}
