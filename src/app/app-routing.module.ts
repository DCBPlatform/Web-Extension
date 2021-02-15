import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { HomeComponent } from "./pages/home/home.component";
import { AppsComponent } from "./pages/apps/apps.component";
import { WalletComponent } from "./pages/wallet/wallet.component";
import { WalletNewComponent } from "./pages/wallet/new/new.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "apps",
    component: AppsComponent
  },     
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "wallet",
    component: WalletComponent
  }, 
  {
    path: "wallet-new",
    component: WalletNewComponent
  },   
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
