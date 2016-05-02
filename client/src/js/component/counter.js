 import h from "virtual-dom/h";
 import Rx from "rx/dist/rx.all";
 import {default as VirtualDomComponent} from "./virtual-dom-component"

 let _counter = {count: 0};

 class CounterComponent extends VirtualDomComponent {

   constructor() {
     super();
     this.increment = () => {
       _counter.count++;
     };
   }

   withCounter(counter) {
     _counter = counter;
     return this;
   }

   render() {
     return h('div', {
       style: {
         textAlign: 'center',
         border: '1px solid red'
       }
     }, [String(_counter.count)]);
   }

   build() {
     super.build();
     Rx.Observable.ofObjectChanges(_counter)
       .subscribe(super.update.bind(this));
     return this;
   }
 }

 export default CounterComponent;

