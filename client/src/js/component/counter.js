 import h from "virtual-dom/h";
 import Rx from "rx/dist/rx.all";
 import {default as VirtualDomComponent} from "./virtual-dom-component"

 class CounterComponent extends VirtualDomComponent {

   constructor() {
     super();
     this.counter = null;
     this.increment = () => {
       this.counter.count++;
     };
   }

   withCounter(counter) {
     this.counter = counter;
     return this;
   }

   render(counter) {
     return h('div', {
       style: {
         textAlign: 'center',
         border: '1px solid red'
       }
     }, [String(counter.count)]);
   }

   build() {
     super.build(this.counter);

     Rx.Observable.ofObjectChanges(this.counter)
       .subscribe(super.update.bind(this));
     return this;
   }
 }

 export default CounterComponent;

