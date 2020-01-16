import { Component, OnInit } from '@angular/core';
import { Despesa } from "src/app/interfaces/despesa";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { take } from "rxjs/operators";
import { Observable } from "rxjs";

import { DespesasService } from "src/app/services/despesas.service";

@Component({
  selector: 'app-list-despesas',
  templateUrl: './list-despesas.page.html',
  styleUrls: ['./list-despesas.page.scss'],
})
export class ListDespesasPage implements OnInit {

  despesas$: Observable<Despesa[]>;
  loading: any;
  loadList: boolean = true;

  constructor(
    private despesasService: DespesasService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    // buscando despesas
    this.despesas$ = this.despesasService.despesas.valueChanges();
    this.despesas$
      .pipe(take(2))
      .subscribe(()=> this.loadList = false);
  }

  //passagem de despesa para a page detalhes-despesa
  ngEdit(despesa: Despesa){
    this.despesasService.setEditDespesa(despesa);
    this.router.navigateByUrl('/detalhes-despesas');
  }

  ngDelete(despesa: Despesa){
    this.despesasService.delete(despesa);
    this.presentToast('Despesa deletada!');
  }
  
  async presentToast(message: string) {
    const toast = await this.toastController.create({ message, duration: 2000 });
    toast.present();
  }

}
