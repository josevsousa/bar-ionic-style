import { Component, OnInit } from '@angular/core';
import { Despesa } from "../../../interfaces/despesa";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { DespesasService } from 'src/app/services/despesas.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-detalhes-despesas',
  templateUrl: './detalhes-despesas.page.html',
  styleUrls: ['./detalhes-despesas.page.scss'],
})
export class DetalhesDespesasPage implements OnInit {

  despesaTitle: string = "Nova Despesa";
  btTitle: string = "Cadastrar";
  validar: boolean = true;

  novaDespesa: Despesa = {
    uid: null,
    nome: '',
    tipo: 'comum',
    valor: null,
    descricao: ''
  }

  constructor(
    private despesasService: DespesasService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }
  
  onSave(){
    this.presentToast('Salvando....');
    setTimeout( () => this.router.navigateByUrl('/list-despesas') , 1950 );
  }

  // validar o bt submit
  ngValidar(){
    if (this.novaDespesa.nome == '' || this.novaDespesa.valor == null) {
      this.validar = true;
    } else {
      this.validar = false;
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({message, duration: 1600});
    toast.present();
  }

}
