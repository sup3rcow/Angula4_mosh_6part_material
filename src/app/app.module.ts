import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { MatComponentsModule } from './mat-components.module';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent
  ],
  entryComponents: [ // tu registriras komponente koje se pojavljuju dinamicki, a to su dialog komponente
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule
  ],
  providers: [

    // kad god je parametar klase oznacen kao DIALOG_DATA, dipendency injection mu treba data prazan objekt {}
    // { provide: DIALOG_DATA, useValue: {}} // zakomentirao si, jer za dialog koristi direktivu MAT_DIALOG_DATA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
