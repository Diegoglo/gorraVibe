import { Component, HostListener  } from '@angular/core';
import { AuthService } from '../../../core/service/auth.service'; // Importa tu servicio de autenticación


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isSidebarOpen = false;
  activeLink: string = 'home'; // Por defecto, el enlace "Inicio" está activo

  isLoggedIn: boolean = false;
  userName: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      if (loggedIn) {
        this.userName = this.authService.getUserName();
      }
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  setActive(link: string) {
    this.activeLink = link;
    this.closeSidebar(); // Cerrar el sidebar cuando se selecciona un enlace
  }

  @HostListener('click', ['$event']) // metodo para ajustar de manera certera la guía a cualquier de los componentes de mi Home
  onClick(event: Event): void {
    const target = event.target as HTMLAnchorElement;
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
      event.preventDefault();
      const element = document.querySelector(target.getAttribute('href')!);
      const yOffset = -60; // Ajusta este valor según la altura de tu navbar
      const y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
