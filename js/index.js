import users from './users.js';
console.log('users :', users);
//Task 1//
// const getUserNames = users =>  {
//   return users.map(({name}) => {
//     return name;
//   });
  
// }
// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' 
//=======================================================================================================================
//Task 2//

// const getUsersWithEyeColor = (users, color) => {
//   const ourArr = users.filter((el) => el.eyeColor === color);
//       return ourArr
// };
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
//========================================================================================================================
//Task 3//

// const getUsersWithGender = (users, gender) => {
//   return users
//   .filter((el) => el.gender === 'male')
//   .map((el) => el.name)
// };
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
//=======================================================================================================================
//Task 4//

// const getInactiveUsers = users => {

//   let arr =  users.filter((el) => !el.isActive)
//    return arr
// }

// console.log('arr:', getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
//======================================================================================================================
//Task 5//
// const getUserWithEmail = (users, email) => {
//   const currentUser = users.find((el) => el.email === email);
//   return currentUser;
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
//======================================================================================================================

//Task 6//
// const getUsersWithAge = (users, min, max) => {
//   let currentArr = users.filter(el => el.age > min && el.age < max);
//   return currentArr;
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));//[объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
//=====================================================================================================================
//Task 7//

//   const calculateTotalBalance = users => {
//   const totalBalance = users.reduce((totalBalance, el) => totalBalance + el.balance, 0)
//   return totalBalance;
// };
// console.log(calculateTotalBalance(users)); // 20916
//=======================================================================================================================
//Task 8//

// const getUsersWithFriend = (users, friendName) => {
// return users
//     .filter((el) => el.friends.includes(friendName))
//     .map((el) => el.name)
// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
//====================================================================================================================
//Task 9//

// const getNamesSortedByFriendsCount = users => {
//     const array = users
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((el) => el.name)
//     return Array;
// }

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
//====================================================================================================================

//Task 10//
// const getSortedUniqueSkills = users => {
//   let resArr = [];
//   const newArr = users.map(el => (resArr = [...resArr, ...el.skills]));
//   const skillsArr = resArr.filter((item, idx) => {
//     return idx === resArr.indexOf(item);
//   });
//   return skillsArr.sort();
//  };

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]