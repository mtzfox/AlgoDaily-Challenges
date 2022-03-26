/*
From algodaily: https://algodaily.com/challenge_slides/traverse-in-a-zig-zag


*/

function zigZagTraversal(root) {
	//final tree returned
	let traversedTree = [];
	// items to be checked
	let queue = [];
	// checks if it's moving left/right
	let rightDirection = true;

	// if a tree exists
	if (root) {
		// add to queue
		queue.push(root);

		// while the queue has items
		while (queue.length > 0) {
			//check length of queue
			let currentLength = queue.length;
			// create a new array for this level
			let currentLevel = [];

			// loop over the queue
			for (let i = 0; i < currentLength; i++) {
				// take first element
				let currentNode = queue.shift();
				// add value of that element to currentLevel array
				currentLevel.push(currentNode.val);

				// add left then right to queue above
				if (currentNode.left) {
					queue.push(currentNode.left);
				}
				if (currentNode.right) {
					queue.push(currentNode.right);
				}
			}
			// if it's not the normal directon, reverse array
			if (!rightDirection) {
				currentLevel.reverse();
			}

			// add currentLevel array to traversedTree array
			traversedTree.push(currentLevel);
			// toggle direction
			rightDirection = !rightDirection;
		}
		return traversedTree;
		//return root;
	}
}

function Node(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}


/* -- below is not part of solution, it buils the trees -- */

// Regular binary trees
var tree1 = new Node(4);
tree1.left = new Node(1);
tree1.right = new Node(3);

var tree2 = new Node(5);
tree2.left = new Node(10);
tree2.left.left = new Node(17);
tree2.left.right = new Node(3);
tree2.right = new Node(8);

// Binary search trees
var tree3 = new Node(6);
tree3.left = new Node(3);

var tree4 = new Node(5);
tree4.left = new Node(3);
tree4.left.left = new Node(2);
tree4.left.left.left = new Node(1);

var tree5 = new Node(8);
tree5.left = new Node(6);
tree5.right = new Node(9);
tree5.left.left = new Node(5);
tree5.left.right = new Node(7);
tree5.right.right = new Node(10);

