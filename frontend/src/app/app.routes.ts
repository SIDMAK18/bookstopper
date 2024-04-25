import {Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/pages/home/home.component';
import { ChildbooksComponent } from './components/pages/childbooks/childbooks.component';
import { EditbookComponent } from './components/pages/editbook/editbook.component';
import { ExambookComponent } from './components/pages/exambook/exambook.component';
import { FicbookComponent } from './components/pages/ficbook/ficbook.component';
import { MythbookComponent } from './components/pages/mythbook/mythbook.component';
import { TextbookComponent } from './components/pages/textbook/textbook.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { PaymentComponent } from './components/pages/payment/payment.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'search/:searchTerm',component:HomeComponent},
    {path:'child/:id',component:ChildbooksComponent},
    {path:'edit/:id',component:EditbookComponent},
    {path:'exam/:id',component:ExambookComponent},
    {path:'fiction/:id',component:FicbookComponent},
    {path:'mythological/:id',component:MythbookComponent},
    {path:'text/:id',component:TextbookComponent},
    {path:'cart',component:CartComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'checkout',component:CheckoutComponent},
    {path:'payment',component:PaymentComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
