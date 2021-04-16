import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe', 
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    public nombre: string = 'Iron Man';
    public edad: number = 45;

    public obtenerDetalles(): string {
        return `${this.nombre} - ${this.edad}`
    }

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    public cambiarNombre(nuevoValor: string): void{
        this.nombre = nuevoValor; 
    }
}