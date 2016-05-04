import h from "virtual-dom/h";
import Rx from "rx/dist/rx.all";
import {default as componentObserverFactory} from "./component-observer"

function counterFactory(count) {
  let counter = {
    count: count || 0,
    subject: new Rx.Subject()
  };
  counter.increment = () => {
    counter.count++;
    counter.subject.onNext(counter.count);
  };

  return counter;
}

function counterRenderFactory(counter) {
  return {
    render: () => h('div', {
      style: {
        textAlign: 'center',
        border: '1px solid red'
      }
    }, [String(counter.count)])
  };
}

function counterComponentFactory(count) {
  let model = counterFactory(count);
  let view = counterRenderFactory(model);
  let component = Object.assign(model, view);

  let observer = componentObserverFactory(component.render);
  model.subject.subscribe(observer);

  return component;
};

export default counterComponentFactory;
