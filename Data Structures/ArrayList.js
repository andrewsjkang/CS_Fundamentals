/*
  We are going to talk about two types of implementations of array, ArrayList 
  and LinkedList (terms we're borrowing from Java.) What we're going to do is 
  to approximate how these work underneath the hood; in reality since JavaScript 
  is a garbage-collected language that you don't have worry about allocation 
  and de-allocation, it is simplified.

  ArrayList is done by directly interacting with an allocated piece of memory. You 
  then interact with that allocated piece of memory by addressing the specific 
  indices in the array. In other words, you just treat it like a normal array. 
  However things get a bit more complicated when deleting items from an ArrayList: 
  you have to collapse the list down to the spot where you deleted.


  [a,b,c,d,e,f,g]
  -> delete index 3
  -> array is [a,b,c,(blank),e,f,g]
  -> shift elements 4,5,6 back one index
  -> array is [a,b,c,e,f,g]
  -> decrement length
          
  We are going to approximate an implementation of ArrayList. In JavaScript terms, 
  that means we are going to implement an array using objects. You should not use 
  arrays at all in this exercise, just objects. Make a class (or constructor 
  function; something you can call new on) called ArrayList.

  ArrayList should have the following properties (in addition to whatever properties 
  you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value
*/

class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(value) {
    this.data[this.length++] = value;
  }
  pop() {
    const val = this.data[--this.length];
    this.data[this.length] = undefined;
    return val;
  }
  get(index){
    return this.data[index];
  }
  delete(index) {
    const val = this.data[index];
    this._collapseTo(index);
    return val;
  }
  _collapseTo(index) {
    while (index < this.length) {
      this.data[index] = this.data[index + 1];
      index++;
    }
    this.data[index] = undefined;
    this.length--;
  }
}