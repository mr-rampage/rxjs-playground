import h from "virtual-dom/h";
import diff from "virtual-dom/diff";
import patch from "virtual-dom/patch";
import createElement from "virtual-dom/create-element";
import Rx from "rx/dist/rx";

function VDomObserver(renderMethod) {
  let _tree = null;
  let _rootNode = null;
  let _render = renderMethod || function() { return h(); };

  function onNext(e) {
    let newTree = _render();
    let patches = diff(_tree, newTree);
    _rootNode = patch(_rootNode, patches);
    _tree = newTree;
  }

  function onError(e) {
    console.log(e);
  }

  function onComplete() {
    console.log('done');
  }

  _tree = _render();
  _rootNode = createElement(_tree);
  document.body.appendChild(_rootNode);

  return Rx.Observer.create(onNext, onError, onComplete);
}

export default VDomObserver;
