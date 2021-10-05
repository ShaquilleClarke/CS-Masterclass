/*

A Range Module is a module that tracks ranges of numbers. Design a data structure to track the ranges represented as half-open 
intervals and query about them.

A half-open interval [left, right) denotes all the real numbers x where left <= x < right.

Implement the RangeModule class:

- RangeModule() Initializes the object of the data structure.
- void addRange(int left, int right) Adds the half-open interval [left, right), tracking every real number in that interval. 
  Adding an interval that partially overlaps with currently tracked numbers should add any numbers in the interval [left, right) 
  that are not already tracked.
- boolean queryRange(int left, int right) Returns true if every real number in the interval [left, right) is currently being tracked, 
  and false otherwise.
- void removeRange(int left, int right) Stops tracking every real number currently being tracked in the half-open interval [left, right).

*/

var RangeModule = function() {
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function(left, right) {
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function(left, right) {
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function(left, right) {
    
};

/** 
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */