 import h from "virtual-dom/h";
 import diff from "virtual-dom/diff";
 import patch from "virtual-dom/patch";
 import createElement from "virtual-dom/create-element";

 /**
  * Renders the count
  * @param {int} count The count
  * @return {object} a virtual dom object
  */
 function render(count) {
   return h('div', {
     style: {
       textAlign: 'center',
       lineHeight: (100 + count) + 'px',
       border: '1px solid red',
       width: (100 + count) + 'px',
       height: (100 + count) + 'px'
     }
   }, [String(count)]);
 }

 var count = 0;

 var tree = render(count);
 var rootNode = createElement(tree);
 document.body.appendChild(rootNode);

 setInterval(() => {
   count++;

   var newTree = render(count);
   var patches = diff(tree, newTree);
   rootNode = patch(rootNode, patches);
   tree = newTree;
 }, 1000);
