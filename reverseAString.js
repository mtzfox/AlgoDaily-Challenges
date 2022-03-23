

/* -- First try -- */

function reverseString(str) {
    str = [...str];
    let reverse = "";
    for (let i = (str.length-1); i >= 0; i--) {
      reverse += str[i];
    }
    str = reverse;
    return str;
  }

/* -- Second try -- */
/* Using reduce - about twice as fast */

function reverseString(str) {
    return [...str].reduce((a,c) => c + a, '');
  }


/* -- Variations -- */
/* 
Another variation is *Extending Javascript Objects: Reverse String* from [[Codewars]]. Major difference here is that the prototype method is used to build the fuction into the String object.
*/

String.prototype.reverse = function () {
  let str = Array.from(this)
  let reverse = "";
  for (let i = (str.length-1); i >= 0; i--) {
    reverse += str[i];
  }
  str = reverse;
  return str;
} 

'njnschnjkdasn j32 uida'.reverse() //


/* refactored */

// However, in this one you can use the *reverse* method.

String.prototype.reverse = function() {
  return [...this].reverse().join("")
};

// It can also be done with reduce. - MUCH FASTER

String.prototype.reverse = function() {
  return [...this].reduce((a,c) => c + a, '')
}