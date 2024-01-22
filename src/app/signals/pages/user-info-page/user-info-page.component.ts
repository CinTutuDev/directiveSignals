import { User } from '../../interfaces/user-request.interface';
import { UserServicesService } from './../../services/user-services.service';
import { Component, OnInit, computed, inject, signal } from '@angular/core';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss'],
})
export class UserInfoPageComponent implements OnInit {
  private UserServices = inject(UserServicesService);
  public userId = signal(1);
  public CurrentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);
  public fullName = computed<string>(() => {
    if (!this.CurrentUser()) return 'Usuario no encontrado';
    return `${this.CurrentUser()?.first_name} ${this.CurrentUser()?.last_name}`;
  });

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if (id <= 0) return;

    this.userId.set(id);
    this.CurrentUser.set(undefined);

    this.UserServices.getUserById(id).subscribe({
      next: (user) => {
        this.CurrentUser.set(user);
        this.userWasFound.set(true);
      },
      error: () => {
        this.userWasFound.set(false);
        this.CurrentUser.set(undefined);
      },
    });
  }
}
