// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = document.querySelector('img');
// const heading = document.querySelector('h2');

// console.log(heading.textContent);
// console.log(heading.innerText);

// // heading.textContent = 'Josh is dope!';
// // console.log(heading.textContent);
// // console.log(heading.innerText);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);
 
// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} + pizza`;
// pizzaList.insertAdjacentElement('beforeend',  'pizza');

//Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');


console.log(pic.classList);

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Random Pic';
pic.width = 200;
console.log(pic.alt);
console.log(pic.naturalWidth); 

pic.addEventListener('load', function(){
    console.log(pic.naturalWidth);
});

pic.setAttribute('alt', 'Very random pic');
console.log(pic.getAttribute('alt'))
