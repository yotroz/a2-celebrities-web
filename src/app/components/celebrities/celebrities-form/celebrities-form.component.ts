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
  celebrity: Celebrity = new Celebrity();

  constructor(
    private celebritiesService: CelebritiesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.celebritiesService.createCelebrity(this.celebrity).subscribe((celebrity) => {
      this.router.navigate(['celebrities']);
    })
  }
}
