import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { KeyringService } from "src/app/services/keyring.service";

@Component({
  selector: "app-apps",
  templateUrl: "./apps.component.html",
  styleUrls: ["./apps.component.scss"]
})
export class AppsComponent implements OnInit {

  constructor(
    private router: Router,
    public keyringService: KeyringService
  ) {}

  ngOnInit() {
    if(!this.keyringService.wallets) {
      this.router.navigateByUrl('/wallet-new')
    }
  }
}
