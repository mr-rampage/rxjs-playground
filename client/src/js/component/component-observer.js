 import h from "virtual-dom/h";
 import diff from "virtual-dom/diff";
 import patch from "virtual-dom/patch";
 import createElement from "virtual-dom/create-element";
 import Rx from "rx/dist/rx";

 function componentObserverFactory(render) {
   let tree = null;
   let rootNode = null;

   function onNext(e) {
     let newTree = render();
     let patches = diff(tree, newTree);
     rootNode = patch(rootNode, patches);
     tree = newTree;
   }

   function onError(e) {
     console.log(e);
   }

   function onComplete() {
     console.log('done');
   }

   tree = render();
   rootNode = createElement(tree);
   document.body.appendChild(rootNode);

   return Rx.Observer.create(onNext, onError, onComplete);
 }

 export default componentObserverFactory;
