 import h from "virtual-dom/h";
 import diff from "virtual-dom/diff";
 import patch from "virtual-dom/patch";
 import createElement from "virtual-dom/create-element";
 import Rx from "rx/dist/rx.all";

 /**
  * Renders the count
  * @param {int} count The count
  * @return {object} a virtual dom object
  */
 function render(count) {
   return h('div', {
     style: {
       textAlign: 'center',
       border: '1px solid red'
     }
   }, [String(count)]);
 }

 var counter = {
   count: 0
 };

 var tree = render(counter.count);
 var rootNode = createElement(tree);
 document.body.appendChild(rootNode);

 var secondStream = Rx.Observable.interval(1000);
 secondStream.subscribe(() => {
   counter.count++;
 });

 var counterStream = Rx.Observable.ofObjectChanges(counter);

 var renderer = Rx.Observer.create(e => {
   var newTree = render(e.object.count);
   var patches = diff(tree, newTree);
   rootNode = patch(rootNode, patches);
   tree = newTree;
 });

 counterStream.subscribe(renderer);

