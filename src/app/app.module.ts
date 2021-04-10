import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AddClientComponent } from "./home-page/add-user/add-client.component";
import { ClientsListComponent } from "./home-page/clients-list/clients-list.component";

@NgModule({
  imports: [FormsModule, BrowserModule],
  declarations: [AppComponent, AddClientComponent, ClientsListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
