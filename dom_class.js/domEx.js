// only on browser
// alert("hi");
//prompt

//the basic object
//how to catch specifig elemnt inside the html?
//  const h1=document.getElementById("title")
 //or selector like we write int he css file.
//  const h2=document.querySelector("h1#title")


//2
const myLi = document.querySelector('li.start-here');
console.log('i print the myLi:',myLi)
myLi.textContent="main title";
//3
const myLiNextSibling=myLi.nextElementSibling;
console.log('i print the myLiNextSibling:',myLiNextSibling)

const myUL=myLiNextSibling.firstElementChild;
console.log('i print the myUL:',myUL)

const newSubTitle=document.createElement('li');
const subTitleText=document.createTextNode('sub title 4');
newSubTitle.appendChild(subTitleText);
myUL.appendChild(newSubTitle);
console.log('i print the newSubTitle:',newSubTitle);

//5
const myLiParent=myLi.parentElement;
console.log('i print the myLiParent:',myLiParent);
console.log('i print the myLiParent.lastElementChild:',myLiParent.lastElementChild);
myLiParent.lastElementChild.remove();

//6
const head=document.head;
console.log('i ptint head:',head)

const title=head.lastElementChild;
console.log('i ptint title:',title);
title.textContent='DOM Master';
console.log('i ptint title:',title);

//7
const div=myLiParent.nextElementSibling;
console.log('i ptint div:',div);

const p=div.firstElementChild;
console.log('i ptint p:',p);
p.textContent='Now I know how to traverse the DOM :D';
