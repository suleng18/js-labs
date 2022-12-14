function createBinarySearchTree(initKeyList) {
   let root = null;

   if (Array.isArray(initKeyList) && initKeyList.length > 0) {
      initKeyList.forEach((key) => {
         root = insert(root, key);
      });
   }

   function insert(node, key) {
      const newNode = {
         key,
         left: null,
         right: null,
      };

      // base case
      if (node == null) return newNode;
      if (node.key === key) return node;
      if (key > node.key) {
         node.right = insert(node.right, key);
      } else {
         node.left = insert(node.left, key);
      }
      return node;
   }

   function findMin(node) {
      if (node == null) return null;
      let minNode = node;
      while (minNode.left != null) {
         minNode = minNode.left;
      }
      return minNode;
   }

   function search(node, key) {
      if (node == null) return null;

      if (key > node.key) return search(node.right, key);
      if (key < node.key) return search(node.left, key);

      return node;
   }

   function getMaxNodesCount(node) {
      if (node == null) return 0;
      const leftHeights = getMaxNodesCount(node.left);
      const rightHeights = getMaxNodesCount(node.right);

      return leftHeights > rightHeights ? leftHeights + 1 : rightHeights + 1;
   }

   function getHeight() {
      const height = getMaxNodesCount(root);
      return height > 0 ? height - 1 : 0;
   }

   return {
      root,
      insert,
      findMin,
      search,
      getHeight,
      getMaxNodesCount,
   };
}

// const binarySearchTree = createBinarySearchTree([10, 7, 15]);
// console.log(binarySearchTree.root);

const binarySearchTree = createBinarySearchTree([10, 7, 15, 5, 9, 20, 13, 17]);
console.log(binarySearchTree.root);
// console.log(binarySearchTree.findMin(binarySearchTree.root));
// console.log(binarySearchTree.search(binarySearchTree.root, 7));
console.log('Nodes', binarySearchTree.getMaxNodesCount(binarySearchTree.root));
console.log('Height', binarySearchTree.getHeight());
