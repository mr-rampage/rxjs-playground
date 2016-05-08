import h from "virtual-dom/h";
import Rx from "rx/dist/rx.all";
import {default as VDomObserver} from "./virtual-dom-observer"

function Counter(count) {
  let _stream = new Rx.BehaviorSubject(count || 0);
  let counter = {
    get stream() { return _stream; },
    get count() { return _stream.getValue(); },
    increment: () => {
      _stream.onNext(_stream.getValue() + 1);
      return _stream.getValue();
    }
  };
  return counter;
}

function CounterView(counter) {
  return {
    render: () => h('div', {
      style: {
        textAlign: 'center',
        border: '1px solid red'
      }
    }, [String(counter.count)])
  };
}

function CounterComponent(count) {
  let counter = Counter(count);
  let view = CounterView(counter);
  let component = Object.assign(counter, view);

  let observer = VDomObserver(component.render);
  counter.stream.subscribe(observer);
  return component;
};

export default CounterComponent;
