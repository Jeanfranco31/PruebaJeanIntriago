import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../Service/Producto.service';
import { IProduct } from '../../../Interfaces/IProduct';
import { RegisterProductFormComponent } from '../../RegisterProductForm/RegisterProductForm.component';
import { MatDialog } from '@angular/material/dialog';
import { ShowProductComponent } from '../../ShowProduct/ShowProduct.component';
import { CarritoComponent } from '../../../component/carrito/carrito.component';

@Component({
  selector: 'app-productosDashboard',
  templateUrl: './productosDashboard.component.html',
  styleUrls: ['./productosDashboard.component.css']
})
export class ProductosDashboardComponent implements OnInit {

  constructor(private _service:ProductoService, public dialog:MatDialog) { }
  product!:any;

  ngOnInit() {
    this.GetAllProducts();
  }

  public GetAllProducts(){
    this._service.GetAll().subscribe(response =>{
      this.product = response;
    })
  }

  showModalADD(): void {
    const dialogRef = this.dialog.open(RegisterProductFormComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  showInfo(productId:number){
    console.log('ID:',productId);
    this._service.GetById(productId).subscribe(response=>{
      this.dialog.open(ShowProductComponent, {
        data: { product: response },
        width: '900px'
      });
    })
  }
  verCarrito(): void {
    this.dialog.open(CarritoComponent, {
      width: '800px',
      height: '70vh' 
    });
  }
}
