import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from "rxjs/operators";

import { Product } from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private productsCollection = AngularFirestoreCollection<Product>;
  private productsCollection: AngularFirestoreCollection<Product>;

  constructor(private db: AngularFirestore) {
    this.productsCollection = this.db.collection<Product>('Products');
   }

   getProducts(){
     // snapshortChanges porque precisamos tambem do uid do produto
     return this.productsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
        })
      })
     );
   }

   addProduct(product: Product){

   }

   getProduct(id: string){

   }

   update(id: string, product: Product){

   }

  delete(id: string){
     
  }
}
