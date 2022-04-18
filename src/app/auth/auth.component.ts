import { AutofillMonitor } from '@angular/cdk/text-field';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class AuthComponent implements OnInit, AfterViewInit {
  constructor(private _autofill: AutofillMonitor) {}

  ngOnInit() {
    this.test();
  }

  ngAfterViewInit(): void {}

  async test() {
    const provider: any = await detectEthereumProvider();
    if (provider) {
      let web3 = new Web3(provider);
      provider === window.ethereum;
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      console.log('accounts: ', accounts);

      // Get provider from Metamask
      const provider2 = new ethers.providers.Web3Provider(window.ethereum!);
      console.log('provider2: ', provider2);
      // Set signer
      const signer = provider2.getSigner();
      console.log('signer: ', signer);

      // const marketPlace = new ethers.Contract()
    } else {
      console.log('Please install MetaMask!');
    }
  }
}
