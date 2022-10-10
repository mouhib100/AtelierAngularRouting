import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';

const routes: Routes = [
  { path: 'MainInvoice', component: MainInvoiceComponent },
  { path: 'InvoiceList', component: InvoiceListComponent },
  { path: 'Invoice', component: InvoiceComponent },
  { path: 'Invoice/:id', component: InvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
