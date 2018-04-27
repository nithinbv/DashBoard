import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main';


export const appRoutes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: MainComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
                                                                              useHash: true,
                                                                            });
