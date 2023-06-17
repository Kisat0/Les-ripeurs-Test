import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShowIpComponent } from './tools/show-ip/show-ip.component';
import { ShowDatetimeComponent } from './tools/show-datetime/show-datetime.component'
import { PostArticleComponent } from './tools/post-article/post-article.component';


const ROUTES:Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'tools/show-ip',
		component: ShowIpComponent,
	},
	{
		path: 'tools/show-datetime',
		component: ShowDatetimeComponent,
	},
	{
		path: 'post/new',
		component: PostArticleComponent,
	},
];


@NgModule({
	imports: [RouterModule.forRoot(ROUTES, {})],
	exports: [RouterModule]
})
export class AppRoutingModule {}
