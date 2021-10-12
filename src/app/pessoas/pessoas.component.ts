import { Component, OnInit } from '@angular/core';
import { Pessoas } from '../pessoa';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.less'],
})
export class PessoasComponent implements OnInit {
  pessoa: Pessoas = {
    id: 1,
    name: 'João',

    id2: 2,
    name2: 'Maria',
  };

  constructor() {}

  ngOnInit(): void {}
}
