// const button = document.querySelector('button');                 html ile 
// const button = document.querySelector('#buttonId');              #id ile 
// const button = document.querySelector('.buttonClass');           .class ile
// const button = document.getElementById('buttonId');              getElementById
// const button = document.getElementsByClassName('buttonClass');   getElementsByClassName

const button = document.getElementById('buttonId');
console.log(button);


// // İlk Yöntem
// button.addEventListener('click', () => (
//     console.log("Tıklandı")
// ))

// İkinci Yöntem
function add() {
    console.log('Tıklandı');
}

const liElemanları = document.querySelectorAll('li');
liElemanları.forEach(eleman => {
    eleman.addEventListener('click', e => {
        // console.log('Tıklandı');
        // console.log(e.target);
        e.target.style.color = "blue";
    })
})

const ulDegerlerim = document.querySelector('ul');
console.log(ulDegerlerim);
// ulDegerlerim.remove();

const liEleman = document.createElement('li');
liEleman.textContent = 'JavaScript';

// append //  sona eleman ekler
// prepend // başa eleman ekler

button.addEventListener('click', () => {
    const liEleman = document.createElement('li');
    liEleman.textContent = 'JavaScript';
    ulDegerlerim.append(liEleman);
})