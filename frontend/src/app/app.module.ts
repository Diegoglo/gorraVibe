import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';



import { NavbarComponent} from './layout/navbar/navbar.component';
import { FooterComponent} from './layout/footer/footer.component';
import { MainComponent} from './layout/main/main.component'; 
import { AboutUsComponent} from './shared/about-us/about-us.component';
import { MenuComponent} from './shared/menu/menu.component';
import { OfertasComponent} from './shared/ofertas/ofertas.component';
import { LoginComponent} from './auth/login/login.component';
import { RegisterComponent} from './auth/register/register.component';
import { ServicesComponent} from './shared/services/services.component';
import { ProductDiscountComponent} from './shared/product-discount/product-discount.component';
import { CallToActionComponent} from './shared/call-to-action/call-to-action.component';
import { ContactComponent} from './shared/contact/contact.component';
import { ProductCatalogComponent} from './shared/product-catalog/product-catalog.component';
import { ProductCatalog2Component} from './shared/product-catalog2/product-catalog2.component';


// import { ScheduleComponent} from '../app/schedule/schedule.component';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
// import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    AboutUsComponent,
    MenuComponent,
    OfertasComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent,
    ProductDiscountComponent, 
    CallToActionComponent,
    ContactComponent,
    ProductCatalogComponent,
    ProductCatalog2Component

    // ProductInfoComponent,
    // ServicesComponent,
    // BarberProfileComponent,
    // DiaryComponent,
    // LoginComponent,
    // RegisterComponent,
    // BarbersComponent,
    // ScheduleTableComponent,
    // PracticaExamenComponent
    // ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    // GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
