import { Component, OnInit } from '@angular/core';
import { Produto } from "../../../interfaces/produto";
import { ProdutosService } from 'src/app/services/produtos.service';
import { LoadingController } from "@ionic/angular";
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
 
  constructor(
      private produtosService: ProdutosService,
      public loadingController: LoadingController,
      private router: Router
    ) { }
   
 
  ngOnInit() {

    // carregando o loading na view
    this.presentLoadin();
  
    //buscando produtos
    this.produtos$ = this.produtosService.produtos.valueChanges();
    this.produtos$
      .pipe(take(4))
      .subscribe(() => this.loading.dismiss()); 

    // total produtos 
    this.produtos$.forEach(data=>{
      this.totalProdutos =  data.length;
    })

  }

  async presentLoadin(){
    this.loading = await this.loadingController.create({ message: 'Carregando' });
    return this.loading.present();
  }

  ngOnDestroy(){
    this.loading = null;
  }

  ngEdit(produto: Produto){
    this.produtosService.setEditProduto(produto);
    this.router.navigateByUrl('/detalhes-products');
  }

}
