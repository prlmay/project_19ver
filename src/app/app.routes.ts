import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PricesForServicesComponent } from './pages/prices-for-services/prices-for-services.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'layout',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'home',
                component: HomeComponent,
                title: 'Home'
            },
            {
                path: 'about',
                component: AboutComponent,
                title: 'About'
            },
            {
                path: 'gallery',
                component: GalleryComponent,
                title: 'Gallery'
            },
            {
                path: 'contact',
                component: ContactComponent,
                title: 'Contact'
            },
            {
                path: 'prices',
                component: PricesForServicesComponent,
                title: 'Prices'
            },
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
