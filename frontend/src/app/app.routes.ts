import { Routes } from '@angular/router';

import { MainComponent} from './layout/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
// import { ServicesComponent} from './shared/services/services.component';
// import { LoginComponent} from './auth/login/login.component';
// import { RegisterComponent} from './auth/register/register.component';
// import { ContactComponent } from './layout/contact/contact.component';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { ServiciosComponent } from './layout/servicios/servicios.component';
// import { NavbarComponent} from './navbar/navbar.component'
// import { MessageListComponent} from '../app/admin/message-list/message-list.component';
// import { AdminGuard} from '../core/guard/admin.guard';
// import { LoginComponent} from './auth/login/login.component';
// import { RegisterComponent} from './auth/register/register.component';
// import { HomeComponent } from './home/home.component';
// import { MapComponent} from '../app/map/map.component';
// import { PrototiposLandingComponent} from '../app/layout/prototipos-landing/prototipos-landing.component'


export const routes: Routes = [
  { path:'', component: MainComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta inicial redirige a /home
  { path: 'home', component: MainComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
//   { path: 'services', component: ServicesComponent},
//   { path: 'contact', component: ContactComponent},
//   { path: '**', redirectTo: 'home' }, //ruta por defecto
];
