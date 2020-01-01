import { Component, OnInit, OnDestroy } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-detalhes-products',
  templateUrl: './detalhes-products.page.html',
  styleUrls: ['./detalhes-products.page.scss'],
})
export class DetalhesProductsPage implements OnInit {

  productTitle: string = "Novo Produto";
  btTitle: string = "Cadastrar";
  teste: string = "agua";
  novoProduto: Produto = {
    codigo: null,
    nome: '',
    tipo: '',
    ml: null,
    valor: null,
    descricao: '',
    estoque: null
  }
  validar: boolean = true;

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private toastController: ToastController
  ) {
   }

  ngOnInit() { 
    // ver se esta vindo algum produto
    const produtoOk: any = this.produtosService.produtoEdit; 
    if( produtoOk != undefined){
      this.novoProduto = produtoOk;
      this.productTitle = "Editar Produto";
      this.btTitle = "Alterar";
      this.validar = false;
    }else{
      this.maiorCodigo();
    }  
  }

  ngOnDestroy(){
    this.produtosService.produtoEdit = undefined;
    console.log('destruido');
  }
  
  onSave(){
    // envia o produto para create ou update
    const operation: Promise<void> = 
      (!this.novoProduto.uid)
        ? this.produtosService.create(this.novoProduto)
        : this.produtosService.update(this.novoProduto);

      operation
       .then(()=>{
        // feedback do crud 
        (!this.novoProduto.uid)  
          ? this.presentToast("Criado com sucesso!")
          : this.presentToast(`${this.novoProduto.nome} atualizado!!!`);
        
          this.router.navigateByUrl('/home');
       })
       .catch((error)=>{
         console.log(error);
       })
  }

  // validar o bt submit
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


  async presentToast(message: string) {
    const toast = await this.toastController.create({ message, duration: 2000 });
    toast.present();
  }

}
