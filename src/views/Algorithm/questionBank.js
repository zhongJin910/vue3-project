const list = [1, 5, 3, 4, 5, 6, 7, 8, 9];
const target = 11;

// function twoSum(nums, target) {
//   const len = nums.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
console.log(list);
console.log(twoSum(list, target));

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
var addTwoNumbers = function (l1, l2) {
  let start = "";
  let end = "";
  for (var i = 0; i < l1.length; i++) {
    start += l1[i].toString();
  }
  for (var i = 0; i < l2.length; i++) {
    end += l2[i].toString();
  }
  let totalStr = (parseInt(start || 0) + parseInt(end || 0))
    .toString()
    .split("");

  totalArr = [];
  for (let i = 0; i < totalStr.length; i++) {
    totalArr.unshift(Number(totalStr[i]));
  }
  return totalArr;
};
console.log(addTwoNumbers(l1, l2));
