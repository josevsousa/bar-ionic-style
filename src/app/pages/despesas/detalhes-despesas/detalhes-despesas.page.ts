import { Component, OnInit } from '@angular/core';
import { Despesa } from "../../../interfaces/despesa";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { DespesasService } from 'src/app/services/despesas.service';

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
    //ver se esta vindo alguma despesa
    const despesaOk: any = this.despesasService.despesaEdit;
    if( despesaOk != undefined ){
      this.novaDespesa = despesaOk;
      this.despesaTitle = "Editar Despesa";
      this.btTitle = "Alterar";
      this.validar = false;
    }
  }

  ngOnDestroy(){
    this.despesasService.despesaEdit = undefined;
  }
  
  onSave(){
    // envia a despesa para create ou update
    const operation: Promise<void> =
      (!this.novaDespesa.uid)
        ? this.despesasService.create(this.novaDespesa)
        : this.despesasService.update(this.novaDespesa);

      operation
        .then(()=>{
          // feedback do crud
          (!this.novaDespesa.uid)
            ? this.presentToast('Salvando....')
            : this.presentToast('Atualizando...');

            setTimeout( () => this.router.navigateByUrl('/list-despesas') , 1950 );
        })
        .catch((error)=>{
          console.log(error);
        })
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
