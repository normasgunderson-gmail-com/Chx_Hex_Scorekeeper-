const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'F'];
//* e.b. #f162025
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  //! hex number must start with a #. So, put # in a let variable
  let hexColor = '#';

  //set up a 6xloop to generate the hex number color, so cool!
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]
  }

  //make connection with the textContent & body
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

//this function will generate the hex num and we will concat w/+ sign

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}