import { Component, Input } from "@angular/core";

import { Client } from "../../shared/models/client";

@Component({
  selector: "add-client",
  templateUrl: "./add-client.component.html"
})
export class AddClientComponent {
  showForm: boolean = false;
  showButton: boolean = true;
  showAlert: boolean = false;

  @Input() clientsList: Client[];

  clientName: string;
  clientEmail: string;
  clientCompanyName: string;

  show(showForm: boolean): boolean {
    if (this.showForm) {
      this.clientName = "";
      this.clientEmail = "";
      this.clientCompanyName = "";
      return (this.showForm = false) && (this.showButton = true);
    } else {
      return (this.showForm = true) && (this.showButton = false);
    }
  }

  AddNewClient(): void {
    if (
      this.clientName === undefined ||
      this.clientName.length < 6 ||
      (this.clientEmail === undefined || this.clientEmail.length < 13) ||
      (this.clientCompanyName === undefined ||
        this.clientCompanyName.length < 2)
    ) {
      this.showAlert = true;
    } else {
      let newClient: Client = {
        id: this.clientsList.length,
        name: this.clientName,
        email: this.clientEmail,
        releaseData: "April 6, 2021",
        companyName: this.clientCompanyName
      };
      this.clientsList.push(newClient);
      this.showAlert = false;
      this.showForm = false;
      this.showButton = true;
      this.clientName = "";
      this.clientEmail = "";
      this.clientCompanyName = "";
    }
  }
}
