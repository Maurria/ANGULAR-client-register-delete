import { Component, Input } from "@angular/core";
import { Client } from "../../shared/models/client";

@Component({
  selector: "clients-list",
  templateUrl: "clients-list.component.html"
})
export class ClientsListComponent {
  @Input() clientsList;

  deleteById(id: number): void {
    let index: number;

    for (let i = 0; i < this.clientsList.length; i++) {
      if (this.clientsList[i].id == id) {
        index = i;
      }
    }

    this.clientsList.splice(index, 1);
  }

  registerClient(client: Client): void {
    this.clientsList.push(client);
  }
}
