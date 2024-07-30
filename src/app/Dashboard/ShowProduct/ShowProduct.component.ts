import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { IProduct } from '../../Interfaces/IProduct';
import { CarritoServiceService } from '../../Service/CarritoService.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table'; // Importa MatTableModule

@Component({
  selector: 'app-ShowProduct',
  templateUrl: './ShowProduct.component.html',
  styleUrls: ['./ShowProduct.component.css']
})
export class ShowProductComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { product: IProduct },
    private cartService: CarritoServiceService,
    private dialogRef:MatDialog,
    private _snackBar: MatSnackBar
  ) { }


  ngOnInit() {
  }
  addToCart(): void {
    this.cartService.addToCart(this.data.product);
    console.log('Producto agregado al carrito:', this.data.product);
    this.dialogRef.closeAll();
    this._snackBar.open("Producto agregado al carrito",undefined,{
      duration:5000
    });
  }

  onClose():void{
    this.dialogRef.closeAll();
  }
}
