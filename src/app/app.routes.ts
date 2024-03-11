import { Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {LoginComponent} from "./login/login.component";
import {CiteComponent} from "./cites/cite/cite.component";
import {FastCiteComponent} from "./cites/fast-cite/fast-cite.component";


export const routes: Routes = [
    {
        path: '',
        component : IndexComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path : 'cites',
        children: [
            {
                path:'fast',
                component : FastCiteComponent
            },
            {
                path: 'specialist',
                component: CiteComponent
            }
        ]
    }
];
