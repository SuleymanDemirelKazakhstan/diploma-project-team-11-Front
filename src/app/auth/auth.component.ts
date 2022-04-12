import { Component, OnInit } from '@angular/core';
import detectEthereumProvider from '@metamask/detect-provider';

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
    const provider: any = await detectEthereumProvider();
    console.log(provider);

    if (provider) {
      provider === window.ethereum;
      console.log(provider.isMetaMask);

      const chainId = await provider.request({
        method: 'eth_chainId'
      });

      console.log(chainId);
    } else {
      console.log('Please install MetaMask!');
    }
  }
}
