import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseManagementComponent } from './pages/managements/course-management/course-management.component';
import { ManagementsComponent } from './pages/managements/managements.component';
import { CategoryManagementComponent } from './pages/managements/category-management/category-management.component';

const mainTitle = 'Edu-Track';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: `Home | ${mainTitle}`, pathMatch: 'full'},
  { path: 'management', component: ManagementsComponent, children: [
    { path: 'course', component: CourseManagementComponent, title: `Course-Managemet | ${mainTitle}`},
    { path: 'category', component: CategoryManagementComponent, title: `Category-Management | ${mainTitle }`},
    { path: '**', redirectTo: '/management/category', pathMatch: 'full'}

  ]},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];
