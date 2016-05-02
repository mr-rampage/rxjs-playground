 import Rx from "rx/dist/rx.all";
 import {default as CounterComponent} from "./component/counter";

 var counter = new CounterComponent().withCounter({count: 0}).build();
 Rx.Observable.interval(1000).subscribe(counter.increment);

