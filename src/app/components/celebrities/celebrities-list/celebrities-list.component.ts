import { Observable } from 'rxjs';
import { CelebritiesService } from './../../../shared/services/celebrities.service';
import { Component, OnInit } from '@angular/core';
import { Celebrity } from '../../../shared/models/celebritie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-celebrities-list',
  templateUrl: './celebrities-list.component.html',
  styleUrls: ['./celebrities-list.component.css']
})
export class CelebritiesListComponent implements OnInit {
  celebrities$: Observable<Celebrity[]>;

  constructor(
    private celebritiesService: CelebritiesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCelebrities();
  }

  onClickDelete(celebrity: Celebrity) {
    this.celebritiesService.deleteCelebrity(celebrity).subscribe(() => {
      this.getCelebrities();
    });
  }

  onClickEdit(celebrity: Celebrity) {
    this.router.navigate(['/celebrities', celebrity.id, 'edit']);
  }

  private getCelebrities() {
    this.celebrities$ = this.celebritiesService.getCelebrities();
  }

}
