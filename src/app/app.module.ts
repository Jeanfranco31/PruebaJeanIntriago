import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './component/login/login.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductosDashboardComponent } from './Dashboard/Productos/productosDashboard/productosDashboard.component';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterProductFormComponent } from './Dashboard/RegisterProductForm/RegisterProductForm.component';
import { ProductoService } from './Service/Producto.service';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { MatInputModule } from '@angular/material/input';
import { ShowProductComponent } from './Dashboard/ShowProduct/ShowProduct.component';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CarritoComponent } from './component/carrito/carrito.component';
import { UtilityComponent } from './Utility/Utility.component';

@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    ProductosDashboardComponent,
    RegisterProductFormComponent,
    ShowProductComponent,
    CarritoComponent,
      UtilityComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    [ProductoService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
