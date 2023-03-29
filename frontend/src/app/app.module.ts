import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/hero/hero.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewHabilidadComponent } from './components/habilidad/new-habilidad.component';
import { EditHabilidadComponent } from './components/habilidad/edit-habilidad.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    HabilidadComponent,
    EducacionComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewHabilidadComponent,
    EditHabilidadComponent,
    NeweducacionComponent,
    EditeducacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
