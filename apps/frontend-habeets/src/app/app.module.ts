import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TuiRootModule } from '@taiga-ui/core';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), TuiRootModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
