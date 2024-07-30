import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductoService } from '../../Service/Producto.service';
import { IProduct } from '../../Interfaces/IProduct';

@Component({
  selector: 'app-RegisterProductForm',
  templateUrl: './RegisterProductForm.component.html',
  styleUrls: ['./RegisterProductForm.component.css']
})
export class RegisterProductFormComponent implements OnInit {
  
  form!:FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductoService, private dialogRef:MatDialog) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', [Validators.required]],
    });
  }
  ngOnInit() {
  }

  public enviar(): void {
    if (this.form.valid) {
      const producto: IProduct = this.form.value;
      console.log(this.form.value);
      this.productService.Add(producto).subscribe(
        response => {
          console.log('Producto añadido con éxito:', response);
          this.dialogRef.closeAll();
        },
        error => {
          console.error('Error al añadir el producto:', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
  

}
