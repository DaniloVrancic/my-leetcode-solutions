/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * 
 * @param {ListNode} list_node
 * @returns {number[]} 
 */
var convertLinkedListToArray = (list_node) => {
    let currentNode = list_node;
    let arrayToReturn = [];
    while(currentNode != null)
    {
        arrayToReturn.push(currentNode.val);
        currentNode = currentNode.next;
    }
    console.log(arrayToReturn);
    return arrayToReturn;
}

var convertArrayToLinkedList = (array) => {
    if (array.length === 0) return null;

    let head = new ListNode(array[0]);
    let currentNode = head;

    for (let i = 1; i < array.length; ++i) {
        currentNode.next = new ListNode(array[i]);
        currentNode = currentNode.next;
    }

    return head;
}


var padListUntilLength = function(list, digit_number)
{
    while(list.length < digit_number)
    {
        list.push(0);
    }

    return list;
}

/**
 * Adds two numbers represented as linked lists (digits stored in reverse order).
 *
 * @param {ListNode} l1 - Head of the first linked list.
 * @param {ListNode} l2 - Head of the second linked list.
 * @returns {ListNode} - Head of the resulting linked list representing the sum.
 *
 * Logic:
 * - Convert both linked lists to arrays.
 * - Pad shorter array with zeros so they align in length.
 * - Iterate through arrays, summing digits with carry handling.
 * - Convert the result array back into a linked list.
 * 
 * Chosen approach:
 * Arrays make digit manipulation simpler to reason about,
 * though a direct linked list implementation is more memory efficient.
 */
var addTwoNumbers = function(l1, l2) {
    console.log(l1);
    console.log(l2);
    let array1 = convertLinkedListToArray(l1);
    let array2 = convertLinkedListToArray(l2);
    console.log(array1);
    console.log(array2);
    var digits_count = Math.max(array1.length, array2.length); //gets the digits count of the greater number

    let paddedList1 = [...array1];
    let paddedList2 = [...array2];

    padListUntilLength(paddedList1, digits_count);
    padListUntilLength(paddedList2, digits_count);
    
    let carryOver = 0; // the digit that will get carried over to the next digit
    let resultList = [];
    for(var i = 0; i < digits_count; i++)
    {
        
        var localSum = paddedList1[i] + paddedList2[i] + carryOver;
        carryOver = (localSum > 9) ? 1 : 0; 
        resultList.push(localSum % 10);
    }
    if(carryOver > 0)
    {
        resultList.push(carryOver);
    }

    return convertArrayToLinkedList(resultList);
}

