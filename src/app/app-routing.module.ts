import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { MessagesModule } from './messages/messages.module';


const routes: Routes = [
  {
    path: 'customers',
    //loadChildren: () => CustomersModule

    // loadChildren: './customers/customers.module#CustomerModule'
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'orders',
    //loadChildren: () => OrdersModule
    //loadChildren: './customers/customers.module#CustomerModule'
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'messages',
    //loadChildren: () => MessagesModule

    //loadChildren: '.  /customers/customers.module#CustomerModule'
    loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
