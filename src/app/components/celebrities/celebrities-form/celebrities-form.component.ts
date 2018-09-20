import { Celebrity } from './../../../shared/models/celebritie.model';
import { CelebritiesService } from './../../../shared/services/celebrities.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-celebrities-form',
  templateUrl: './celebrities-form.component.html',
  styleUrls: ['./celebrities-form.component.css']
})
export class CelebritiesFormComponent implements OnInit {
  celebrity: Celebrity;

  constructor(
    private celebritiesService: CelebritiesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const celebrityId = params.get('id');

      if (celebrityId) {
        this.celebritiesService.getCelebrity(celebrityId).subscribe((celebrity: Celebrity) => {
          this.celebrity = celebrity;
        });
      } else {
        this.celebrity = new Celebrity();
      }
    });
  }

  onSubmit() {
    const method: string = this.celebrity.id ? 'updateCelebrity' : 'createCelebrity';

    this.celebritiesService[method](this.celebrity).subscribe(
      () => { this.router.navigate(['/celebrities']); },
      (error: HttpErrorResponse) => { debugger; }
    );
  }
}
