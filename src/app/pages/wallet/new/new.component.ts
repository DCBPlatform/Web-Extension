import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { KeyringService } from "src/app/services/keyring.service";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.scss"]
})
export class WalletNewComponent implements OnInit {

  public importWalletSecret;
  public importWalletMnemonic;
  public newWalletSecret;

  constructor(
    private router: Router,
    public keyringService: KeyringService
  ) {
  }

  ngOnInit() {
    console.log(this.keyringService.wallets)
  }

  onCreateWallet() {
    let item = this.keyringService.generateKeyring()
    this.keyringService.addLocalWallet(item.public, item.mnemonic, this.newWalletSecret);
    this.router.navigateByUrl('/')
  }

  onImportWallet() {}

  
}
