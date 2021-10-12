import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.less'],
})
export class PessoasComponent implements OnInit {
  pessoa = 'João';

  constructor() {}

  ngOnInit(): void {}
}
