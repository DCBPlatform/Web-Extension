import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { KeyringService } from "src/app/services/keyring.service";

@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.component.html",
  styleUrls: ["./wallet.component.scss"]
})
export class WalletComponent implements OnInit {

  public wallets;

  constructor(
    private router: Router,
    public keyringService: KeyringService
  ) {
    this.wallets = this.keyringService.wallets;
    this.wallets.forEach(element => {
      element['publicKeyDisplay'] = element['publicKey'].substr(0, 12) + '...' + element['publicKey'].substr(30, 42);
    });
  }

  ngOnInit() {
    if(!this.keyringService.wallets) {
      this.router.navigateByUrl('/wallet-new')
    }
  }


  addWallet() {
    this.router.navigateByUrl('/wallet-new')
  }

  
}
