import { NgModule } from "@angular/core";
import { AppContador } from "./contador/contador.component";

@NgModule({
    declarations: [
        AppContador
    ],
    exports: [
        AppContador
    ], 
})
export class ContadoresModule{
    
}