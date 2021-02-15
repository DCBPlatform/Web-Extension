import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { injectExtension } from '@polkadot/extension-inject';
import { KeyringService } from "src/app/services/keyring.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {


  
  constructor(public keyringService: KeyringService, private router: Router) {
  
    
  }
  ngOnInit() {
    if(!this.keyringService.wallets) {
      this.router.navigateByUrl('/wallet-new')
    }
  }

}
