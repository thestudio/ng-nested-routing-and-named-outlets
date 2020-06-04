import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-iron-man',
  templateUrl: './edit-iron-man.component.html',
  styleUrls: ['./edit-iron-man.component.scss']
})
export class EditIronManComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
