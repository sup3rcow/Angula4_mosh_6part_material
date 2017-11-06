import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

// definiras custom token, kojeg ces ubacivati u konstoruktor od ove klase, pomocu DI
// to definiras u app.module.ts - providers
// export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');
// ne zelis da ubacis prazan objekt pomocu DI, nego objekt iz komponente koja poziva dialog
// zato umjesto DIALOG_DATA, pises MAT_DIALOG_DATA

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  // kada se otvori dialog, data parametar se ubaciti u constructor
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    console.log(data);
  }

  ngOnInit() {
  }

}
