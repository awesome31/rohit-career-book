/**
Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 2 -> 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

2 -> 3 -> 7 -> 8 -> 10
99 -> 3 -> 1 -> 8 -> 10,
*/

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


const node1 = new LinkedListNode(10, null)
const node2 = new LinkedListNode(8, node1)
const node3 = new LinkedListNode(7, node2)
const node4 = new LinkedListNode(3, node3)
const node5 = new LinkedListNode(2, node4)
const node6 = new LinkedListNode(1, node2)
const node7 = new LinkedListNode(99, node6)

const head1 = node5;
const head2 = node7;

//Let us write a function to get the length of a linked list.

function getLLLength(head) {
  let count = 1;
  while(head.next) {
    count++;
    head = head.next;
  }

  return count;
}

function getIntersectingNode(head1, head2) {
  const ll1Length = getLLLength(head1)
  const ll2Length = getLLLength(head2)

  let count = 0;
  if (ll1Length > ll2Length) {
    while (count !== ll1Length - ll2Length) {
      head1 = head1.next;
      count++;
    }
  } else if (ll1Length < ll2Length) {
    while (count !== ll2Length - ll1Length) {
      head2 = head2.next;
      count++;
    }
  }

  while (head1 && head2) {
    if(head1 === head2) {
      return head1.value;
    }

    head1 = head1.next;
    head2 = head2.next;
  }

}

console.log(getIntersectingNode(head1, head2))
