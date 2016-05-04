import Rx from "rx/dist/rx.all";
import {default as counterComponentFactory} from "./component/counter";

var counter = counterComponentFactory(0);
Rx.Observable.interval(1000).subscribe(counter.increment);
