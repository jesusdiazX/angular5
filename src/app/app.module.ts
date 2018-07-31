import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MyOwnCustomMaterialModule }from'./app.materializemodule';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import {UserService} from './service/user.service';
import {LoginComponent} from './login/login/login.component';
import { MenuComponent } from './menu/menu.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireDatabaseModule} from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
    ,MyOwnCustomMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireDatabaseModule,

    AngularFireModule.initializeApp(environment.firebase,'empleados')
    
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
