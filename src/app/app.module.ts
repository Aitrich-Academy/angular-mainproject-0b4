import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { ProductDetailsService } from './services/product-details.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    SharedmoduleModule,
    ProductDetailsService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
