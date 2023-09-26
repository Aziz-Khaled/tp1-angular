import { Component }from '@angular/core';
 import { Car } from"./cars"

 
 @Component ( {

 selector:'app-root',
 template:`
 <table>

<tr *ngFor="let car of _cars">


<td>{{car.make}}</td>
<td>{{car.model}}</td>

<td><button (click) = "showCars( car )">Click me!</button></td>

</tr>
 </table>

 `,
 styles: []
 })
 

 export class AppComponent {
  title = ""
 _cars = [new Car ('car1' , 2002 , 'bmw' , 'm3' , 'https://en.wikipedia.org/wiki/BMW_M3') ,
          new Car ('car2' , 2017 , 'acura' , 'nsx' , 'https://en.wikipedia.org/wiki/Honda_NSX') , 
          new Car ('car3' , 2016 , 'chevy' , 'camaro' , 'https://en.wikipedia.org/wiki/Chevrolet_Camaro') ] ; 



          showCars( car: any ){
            const desc  = car.make  ;
            if (window.confirm ( 'Click "ok" to be redirected to '+ car.article)){
              window.location = car.article ; 
            }
          }
}

