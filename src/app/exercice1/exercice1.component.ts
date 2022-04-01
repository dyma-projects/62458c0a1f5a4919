import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public type = "date";

  public array = {
    nom: "Aurélien",
  };

  public changeType() {
    if (this.type === "date") {
      this.type = "text";
    } else {
      this.type = "date";
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
