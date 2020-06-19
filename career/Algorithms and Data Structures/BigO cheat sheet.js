/*
O(1) - no loops
O(log N) - usually searching algorithms have log(n) if they are sorted (Binary Search)  (not on hash maps though)
O(n) - for loops while loops
O(n*log(n)) - Sorting operations usually
O(n^2) - Every element in a collection needs to be compared to ever other element. Two nested loops
O(2^N) -
O(n!) - you are adding a loop for every element.

Iterating through half a collection is still O(n)
Two separate collections: O(a + b)

*/

// Cheat Sheet:
// What can cause time in a function?
// Operations
// Comparisons
// Looping
// Function call

// Rule 1: Always worst Case
// Rule 2: Remove Constants
// + for steps in order
// * for nested steps
// Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a*b)
// Rule 4: Drop Non-dominant terms