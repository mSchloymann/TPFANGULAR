import { Component, OnInit } from '@angular/core';
import { ApiLegoService } from '../services/api-lego.service';
import { Observable } from 'rxjs';
import { Lego } from '../types/types';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public legoResult$!: Observable<Lego[]>;
  constructor(private api: ApiLegoService, private router: Router) {}
  ngOnInit(): void {
    this.legoResult$ = this.api.getAllLegos();
  }
  onLegoCliked(detalleId: string | undefined ): void {
    this.router.navigate(['/detalle', detalleId]);
  }
}
