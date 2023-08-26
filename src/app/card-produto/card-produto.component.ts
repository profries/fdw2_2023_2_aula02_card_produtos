import { Component } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent {
  produto: Produto = new Produto('Produto 1',30);

  getNome() {
    const {nome} = this.produto; 
    return nome.toUpperCase();
  }
  getPreco() {
    const {preco} = this.produto;
    const moeda = preco.toFixed(2).replace('.',',');
    return moeda;
  }

}
