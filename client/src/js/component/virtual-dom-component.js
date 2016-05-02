 import h from "virtual-dom/h";
 import diff from "virtual-dom/diff";
 import patch from "virtual-dom/patch";
 import createElement from "virtual-dom/create-element";

 class VirtualDomComponent {

   constructor() {
     this.tree = null;
     this.rootNode = null;
   }

   render(value) {
     return h();
   }

   build(value) {
     this.tree = this.render(value);
     this.rootNode = createElement(this.tree);
     document.body.appendChild(this.rootNode);
   }

   update(e) {
     var newTree = this.render(e.object);
     var patches = diff(this.tree, newTree);
     this.rootNode = patch(this.rootNode, patches);
     this.tree = newTree;
   }
 }

 export default VirtualDomComponent;
