import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ToastrModule } from "ngx-toastr";
import { TagInputModule } from "ngx-chips";
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MarkdownModule } from 'ngx-markdown';
import { NgxSpinnerModule } from "ngx-spinner";


import { AppComponent } from './app.component';

import { AppRoutingModule } from "./app-routing.module";

import { CommonModule } from "@angular/common";
import { HomeModule } from "./pages/home/home.module";
import { AppsModule } from "./pages/apps/apps.module";
import { WalletModule } from "./pages/wallet/wallet.module";

let components = [
  AppsModule,
  HomeModule,
  WalletModule
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule, 
    FormsModule,
    RouterModule, 
    HttpClientModule,
    BsDropdownModule.forRoot(), 
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    CollapseModule.forRoot(),
    TagInputModule,
    MarkdownModule.forRoot(),
    NgxSpinnerModule,

    

    components
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

