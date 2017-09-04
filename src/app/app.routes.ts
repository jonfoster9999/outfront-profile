import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'about', component: AboutComponent }
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]

})
export class AppRoutes {}