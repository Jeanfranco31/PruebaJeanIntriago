import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Interfaces/IProduct';
import { CarritoServiceService } from '../../Service/CarritoService.service';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cart:any[]=[];
  loading:boolean=false;

  constructor(
    private carritoService:CarritoServiceService,
    private dialog:MatDialog,
    private _snackBar: MatSnackBar

  ) { }

  ngOnInit():void{
    this.cart = this.carritoService.getCart();
  }

  loadCart():void{
    this.cart = this.carritoService.getCart();
  }

  eliminarDelCarrito(id:number){
    this.carritoService.removeFromCart(id);
    this.loadCart(); 
  }
  generarCompra() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      console.log('Compra generada exitosamente');
    }, 8000); 
    setTimeout(() => {
      this.carritoService.removeAll();
      this.dialog.closeAll();
      this._snackBar.open("Factura generada con exito",undefined,{
        duration:5000
      });
    }, 8000); 
  }
  regresar():void{
    this.dialog.closeAll();
  }
}
