import { Component, Output } from "@angular/core";

import { Client } from "./shared/models/client";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  clients: Client[] = [
    {
      id: 0,
      name: "Geovana",
      email: "geov@gmail.com",
      releaseData: "November 4, 2019",
      companyName: "MODA"
    },
    {
      id: 1,
      name: "Mariana",
      email: "mari@gmail.com",
      releaseData: "November 12, 2019",
      companyName: "Renner"
    },
    {
      id: 2,
      name: "Clayton",
      email: "clay@gmail.com",
      releaseData: "November 13, 2019",
      companyName: "Auto Peças"
    },
    {
      id: 3,
      name: "Leonardo",
      email: "leo@gmail.com",
      releaseData: "November 23, 2019",
      companyName: "Lanche Aqui"
    }
  ];
}
