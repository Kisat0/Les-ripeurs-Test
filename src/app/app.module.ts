import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  MatButtonModule } from '@angular/material/button';
import {  MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowIpComponent } from './tools/show-ip/show-ip.component';
import { ShowDatetimeComponent } from './tools/show-datetime/show-datetime.component';
import { PostArticleComponent } from './tools/post-article/post-article.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ShowIpComponent,
		ShowDatetimeComponent,
		PostArticleComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,

		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatMenuModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
