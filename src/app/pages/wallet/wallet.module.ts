import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { RouterModule } from "@angular/router";

import { WalletComponent } from "./wallet.component";
import { WalletNewComponent } from "./new/new.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    WalletComponent,
    WalletNewComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule, 
    TooltipModule.forRoot(), BsDropdownModule.forRoot(), CollapseModule.forRoot()]
})
export class WalletModule {}
