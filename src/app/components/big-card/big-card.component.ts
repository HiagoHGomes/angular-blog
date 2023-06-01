import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  bigCardImg:string = "";
  @Input()
  bigCardTitle:string = "Entrevista: Avenged Sevenfold e a montanha-russa do novo álbum ‘Life Is But a Dream…’";
  @Input()
  bigCardDescription:string = "Johnny Christ revelou os bastidores do novo disco, retorno aos palcos e planos sobre o Brasil";

  constructor() { }

  ngOnInit(): void {
  }

}
