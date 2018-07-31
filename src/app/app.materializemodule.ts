
import {MatButtonModule, 
  MatCheckboxModule,MatInputModule,
  MatCardModule,MatTableModule, MatSortModule,MatPaginatorModule,MatIconModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
            MatInputModule,MatCardModule,MatTableModule,MatSortModule,MatPaginatorModule,MatIconModule],
  exports: [MatButtonModule,MatCheckboxModule,MatInputModule,
            MatCardModule,MatTableModule,MatSortModule,MatPaginatorModule,MatIconModule],
})
export class MyOwnCustomMaterialModule { }