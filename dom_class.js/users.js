const users = [
  {
    id: 167464,
    firstName: 'Jimmy',
    lastName: 'Arnold',
  },
  {
    id: 578447,
    firstName: 'Martha',
    lastName: 'Goldman',
  },
  {
    id: 864578,
    firstName: 'Tim',
    lastName: 'Burton',
  },
];

//2
const divContainer= document.querySelector('.container');
console.log('this is the divContainer:',divContainer)
//3
const olEl = document.createElement('ol');
olEl.style.listStyleType = 'none';
// Append olEl as the child of divContainer
divContainer.appendChild(olEl);
console.log('this is the olEl:',olEl);
//4
// users.forEach(element => {
// });
//5
users.forEach(element => {
  const liEl =document.createElement('li');
  liEl.textContent=`${element.firstName} ${element.lastName}`;
  olEl.appendChild(liEl );
  liEl.setAttribute('data-id', element.id)
});
console.log('this is the new olEl:',olEl);
