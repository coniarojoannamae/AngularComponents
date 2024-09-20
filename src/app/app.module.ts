import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {DisplayhelloworldComponent} from "./components/displayhelloworld/displayhelloworld.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";

const routes: Route[] = [
  {path: "", component: DisplayhelloworldComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppComponent
  ],
  declarations: [
    DisplayhelloworldComponent,

  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
