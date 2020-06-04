import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-avengers-layout',
  templateUrl: './avengers-layout.component.html',
  styleUrls: ['./avengers-layout.component.scss']
})
export class AvengersLayoutComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public goToIronMan(): void {
    this.router.navigate([{ outlets: { rightHandPanel: null } }], { relativeTo: this.route });
  }
}
