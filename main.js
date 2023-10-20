import users from './users.js'
// Завдання 1
// Отримати загальну суму балансу (поле balance) всіх користувачів.

const calculateTotalBalance = users => {
    return users.reduce((acc, {balance}) => acc + balance, 0);
};

console.log(calculateTotalBalance(users));
// Завдання 2
// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const getUsersWithFriend = (users, friendName) => {
    const usersWithFriend = users.filter(user => user.friends.includes(friendName))
    const userNames = usersWithFriend.map(user => user.name)
    return userNames;
};
console.log(getUsersWithFriend(users, 'Briana Decker')); 
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// Завдання 3
// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const getNamesSortedByFriendsCount = users => {
  const usersCopy = [...users];
  usersCopy.sort((a, b) => a.friends.length - b.friends.length)
  const sortedNames = usersCopy.map(user => user.name)
  return sortedNames;
};

console.log(getNamesSortedByFriendsCount(users));
// Завдання 4
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const getSortedUniqueSkills = users => {
    const uniqueSkills = []
  users.forEach(user => {
    user.skills.forEach(skill => {
        if (!uniqueSkills.includes(skill)) {
            uniqueSkills.push(skill)
        }
    })
  });
  uniqueSkills.sort()
  return uniqueSkills;
};

console.log(getSortedUniqueSkills(users));