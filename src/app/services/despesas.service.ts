import { Injectable } from '@angular/core';
import { Despesa } from '../interfaces/despesa';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  // desepesas do firebase
  despesas: AngularFirestoreCollection<Despesa>;

  // objeto Edit
  despesaEdit: any;

  constructor(private db: AngularFirestore) {
    this.despesas = this.db.collection<Despesa>('/despesas',
      (ref: CollectionReference) => ref.orderBy('nome','asc')
    );
   }

  create(despesa: Despesa): Promise<void> {
    const uid = this.db.createId();
    return this.despesas.doc<Despesa>(uid)
      .set({
        uid,
        nome: (despesa.nome).toLocaleLowerCase(),
        tipo: despesa.tipo,
        valor: despesa.valor,
        descricao: (despesa.descricao).toLocaleLowerCase(),
        dataCreate: new Date()
      })
  }

  update(despesa: Despesa): Promise<void> {
    return this.despesas.doc<Despesa>(despesa.uid)
      .update(despesa)
  }

  delete(despesa: Despesa): Promise<void> {
    return this.despesas.doc<Despesa>(despesa.uid)
      .delete();
  }

  get(uid: string): Observable<Despesa>{
    return this.despesas.doc<Despesa>(uid).valueChanges();
  }

  // despesa enviada da page list para a page detalhes 
  setEditDespesa(despesa: Despesa){
   this.despesaEdit = despesa;
  }

}
