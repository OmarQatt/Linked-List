const LinkedList = require('./LinkedList')

const l1 = LinkedList.fromValues(20,30,40,50)


l1.print()

// insert at the beggining of the linked list
l1.insertAtHead(10)
l1.print()
// append to the end of the linked list
l1.append(60)
l1.print()
// insert into specific location into linked list
l1.insertAtIndex(2, 30)
l1.print()
//delete the middle of the linked list
l1.removeAtMiddle()
l1.print()
