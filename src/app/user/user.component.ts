import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';
import { MatTableDataSource,MatSort,MatPaginator } from '../../../node_modules/@angular/material';
import { iuser } from '../Models/modeluser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {



displayedColumns = ['id', 'nombre', 'edad'];
dataSource;
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
ListaEmpleado:iuser[];
adduser:iuser={
  $key:'',
  nombre:'',
  pais:'',
  apellido:'',
  edad:0
};



  constructor(private  _UserService:UserService) { }

  ngOnInit() {
    debugger
  this._UserService.getUser().snapshotChanges().subscribe(item=>{
this.ListaEmpleado=[];
item.forEach(element=>{
  let x=element.payload.toJSON();
  x['$key']=element.key;
  this.ListaEmpleado.push(x as iuser);
})
  });
  console.log(this.ListaEmpleado);


      this.dataSource = new MatTableDataSource(this.ListaEmpleado);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onSubmit() {
    if(this.adduser.nombre != '' && this.adduser.apellido != '') {
      //this.taskService.addTask(this.task);
      console.log(this.adduser);
    }
  }

}
