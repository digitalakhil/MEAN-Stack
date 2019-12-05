import { RouterModule } from '@angular/router' ;
import { NgModule } from '@angular/core';


@NgModule({        // routes has the route configuration. 
    // It is a variable of type Routes
      imports: [RouterModule.forRoot([])], 
      exports: [RouterModule]
    })

    export class AppRoutingModule { 
    }

