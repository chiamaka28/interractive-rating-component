const main = document.querySelector('.card');
const after = document.querySelector('.thank-you')
const btn = document.querySelector(".submit");
const ratings = document.querySelector('.ratings');
const message = document.querySelector('.input');
const value = document.querySelectorAll('.rate');
const numberRating = document.querySelector('#number-rating')

btn.addEventListener('click', function(e) {
   main.classList.add('hidden');
   after.classList.remove('hidden');
});

let selectedRating = 0;

value.forEach( (value) => {
   value.addEventListener('click',function (e){
    //value.classList.remove('active')
    const clicked = e.target;
    clicked.classList.add('active');
     let rateValue = clicked.innerText;
    console.log(rateValue);

    numberRating.innerText = `${rateValue}`;
   
   //  console.log('clicked')
   })
})
