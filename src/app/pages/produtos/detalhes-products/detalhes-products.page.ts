import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-detalhes-products',
  templateUrl: './detalhes-products.page.html',
  styleUrls: ['./detalhes-products.page.scss'],
})
export class DetalhesProductsPage implements OnInit {

  productTitle: string = "Novo Produto";
  btTitle: string = "Cadastrar";

  novoProduto: Produto = {
    codigo: null,
    nome: '',
    valor: null,
    descricao: ''
  }
  validar: boolean = true;

  constructor(
    private produtosService: ProdutosService,
    private router: Router
  ) { }

  ngOnInit() { 
    // ver se esta vindo algum produto
    const p: any = this.produtosService.produtoEdit; 
    if( p != undefined){
      this.novoProduto = p;
      this.productTitle = "Editar Produto";
      this.btTitle = "Alterar";
      this.validar = false;
    }else{
      this.maiorCodigo();
    }  
  }
  
  onSave(){
 
    const operation: Promise<void> = 
      (!this.novoProduto.uid)
        ? this.produtosService.create(this.novoProduto)
        : this.produtosService.update(this.novoProduto);

      operation
       .then(()=>{
        this.router.navigateByUrl('/home');
       })
       .catch((error)=>{
         console.log(error);
       })
  }

  ngValidar(){
    if (this.novoProduto.nome == '' || this.novoProduto.valor == null) {
      this.validar = true;
    } else {
      this.validar = false;
    }
  }


  maiorCodigo(): void{
    this.produtosService.produtos.valueChanges().forEach(i => {
      let maiorCod = 0;
      i.forEach((j)=>{
         if(j.codigo > maiorCod){
           maiorCod = j.codigo;
         }
      });
      this.novoProduto.codigo = maiorCod+1;
    });
  }

}
