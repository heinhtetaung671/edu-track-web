import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseManagementComponent } from './pages/managements/course-management/course-management.component';
import { ManagementsComponent } from './pages/managements/managements.component';

const mainTitle = 'Edu-Track';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: `Home | ${mainTitle}`, pathMatch: 'full'},
  { path: 'management', component: ManagementsComponent, children: [
    { path: 'course', component: CourseManagementComponent, title: `Course-Managemet | ${mainTitle}`}
  ]}
];
