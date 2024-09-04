import { Component, OnInit, Input, inject } from '@angular/core';
import { ApiLegoService } from '../services/api-lego.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { lego } from '../types/types';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  route: ActivatedRoute = inject(ActivatedRoute); 
  legoId = this.route.snapshot.params['id'];
  public lego$!: Observable<lego>
  private api: ApiLegoService= inject(ApiLegoService)
  @Input('id') lego!: string | undefined
  ngOnInit(): void{
    this.lego$ = this.api.getOne(this.legoId);
  }
}

// import { Component, inject, Input, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { IHero } from '../types/types';
// import { ApiService } from '../services/api.service';
// // import { ActivatedRoute } from '@angular/router';*17-
// import { AsyncPipe } from '@angular/common';

// @Component({
//   selector: 'app-hero',
//   standalone: true,
//   imports: [AsyncPipe],
//   templateUrl: './hero.component.html',
//   styleUrl: './hero.component.css',
// })
// export class HeroComponent implements OnInit {
//   // route: ActivatedRoute = inject(ActivatedRoute); *17-
//   // heroId = this.route.snapshot.params['id'];*17-
//   public hero$!: Observable<IHero>;
//   private api: ApiService = inject(ApiService);
//   @Input('id') heroId!: string; //si la variable heroId se llamara id, no necesito indicarle el nombre del param al decorador Input
//   ngOnInit(): void {
//     this.hero$ = this.api.getOne(this.heroId);
//   }
// }

