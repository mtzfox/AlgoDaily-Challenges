/*
From [AlgoDaily](https://algodaily.com/challenge_slides/array-intersection)

Can you write a function that takes *two arrays as inputs* and *returns to us their intersection*? We can call the method intersection. Let's return the intersection of the two inputs in the form of an array. 

As a reminder, the definition of an `intersection` of two sets `A` and `B` is the set containing all elements of `A` that also belong to `B` (or equivalently, all elements of `B` that also belong to `A`).
*/

const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];


function intersection(nums1,nums2) {
  let combined = nums1.concat(nums2);
  const common = combined.filter(num => nums1.indexOf(num) > -1 && nums2.indexOf(num) > -1);
  return Array.from(new Set(common))
}

intersection(nums1, nums2); [4,9]

// This can be refactored twice, but it makes it less readable.

function intersection(nums1,nums2) {
    const common = nums1.concat(nums2).filter(num => nums1.indexOf(num) > -1 && nums2.indexOf(num) > -1);
    return Array.from(new Set(common))
}
// OR
function intersection(nums1,nums2) {
    return Array.from(new Set(nums1.concat(nums2).filter(num => nums1.indexOf(num) > -1 && nums2.indexOf(num) > -1)));
}



/* Variation */
/* 
The [[+ Codewars|Codewars]] problem [Playing with Sets: Intersection](https://www.codewars.com/kata/5884d46015a70f6cd7000035/train/javascript) is similar, but it provides two sets and wants a set returned.
*/

function inter(s1, s2){
  s1 = Array.from(s1), s2 = Array.from(s2)
  const common = s1.concat(s2).filter(num => s1.indexOf(num) > -1 && s2.indexOf(num) > -1);
  return (new Set(common))
}