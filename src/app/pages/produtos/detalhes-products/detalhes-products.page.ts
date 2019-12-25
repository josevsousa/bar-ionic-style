import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-products',
  templateUrl: './detalhes-products.page.html',
  styleUrls: ['./detalhes-products.page.scss'],
})
export class DetalhesProductsPage implements OnInit {

  productTitle: string = "Novo Produto";

  constructor(
  ) { }

  ngOnInit() { }
  
}
