import { Component, OnInit } from '@angular/core';
import { Produto } from "../../../interfaces/produto";
import { ProdutosService } from 'src/app/services/produtos.service';
import { ToastController } from "@ionic/angular";
import { take } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.page.html',
  styleUrls: ['./list-products.page.scss'],
})
export class ListProductsPage implements OnInit {

  produtos$: Observable<Produto[]>;
  totalProdutos: number;
  public loading: any;
  loadList: boolean = true;
 
  constructor(
      private produtosService: ProdutosService,
      // public loadingController: LoadingController,
      private toastController: ToastController,
      private router: Router
    ) { }
   
 
  ngOnInit() {

    // carregando o loading na view
    // this.presentLoadin();
  
    //buscando produtos
    this.produtos$ = this.produtosService.produtos.valueChanges();
    this.produtos$
      .pipe(take(2))
      .subscribe(() => this.loadList = false); 

    // total produtos 
    this.produtos$.forEach(data=>{
      this.totalProdutos =  data.length;
    })

  }

  valorDose(produto: Produto): Array<any>{
    const  doses = produto.ml/parseInt(produto.mlDose);
    const valorDose = produto.valor/doses;
    const valorFinal = valorDose+(valorDose*(produto.lucroDose/100))
    return [valorFinal,doses]
  }

  validaTipoDeBebida(produto: Produto){
    let ret = true;
    const tipo = produto.tipo;
    if( (tipo == 'agua') || (tipo == 'refrigerante') ){
      ret = false
    }
    return ret
  }

  // async presentLoadin(){
  //   this.loading = await this.loadingController.create({ message: 'Carregando' });
  //   return this.loading.present();
  // }

  ngOnDestroy(){
    // this.loading = null;
  }

  // passagem do produto para a page detalhes-products
  ngEdit(produto: Produto){
    this.produtosService.setEditProduto(produto);
    this.router.navigateByUrl('/detalhes-products');
  }

  ngDelete(produto: Produto){
    console.log(produto);
    this.produtosService.delete(produto);
    this.presentToast("Produto deletado!");
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({ message, duration: 2000 });
    toast.present();
  }

  atualizarItems(){
    this.produtosService.produtos.valueChanges().forEach(item => {
          item.map((i)=>{
            // this.produtosService.update(i);
            // if(i.estoque == 12){
              this.produtosService.update({
                uid: i.uid,
                codigo: i.codigo,
                nome: i.nome,
                tipo: i.tipo,
                ml: i.ml,
                mlDose: i.mlDose,
                lucroDose: 100,
                valor: i.valor,
                descricao: i.descricao,
                estoque: i.estoque,
                dataCreate: i.dataCreate
              });
            // }
          })   
    });
  }

}
