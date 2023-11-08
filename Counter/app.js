// *set initial count
let count = 0;

//select id=values
const value = document.querySelector('#value');
//select all buttons has the same with the same event listener but diff. value
//all has the same btn, console log and got a node list [] like
const btns = document.querySelectorAll('.btn');
console.log(btns);

//*for each pass a callback function so can access each item inside().
btns.forEach(function (btn) {
  // console.log(btn);
  //as we looping with forEach let's add EventListener
  btn.addEventListener('click', function (e) { //which btn was clicking
    // console.log((e.currentTarget.classList))
    const styles = ((e.currentTarget.classList)) //put result in a variable so we can
    //use it in a if statement
    if (styles.contains("decrease")) { //here is where the counts takes place
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0 ;
    }
//lets changes the colors
if(count > 0) {
  value.style.color = 'green';
}
if(count < 0 ) {
  value.style.color = 'red';
}
if(count === 0) {
  value.style.color = 'balck';
}

    value.textContent = count;  //if style containes specific class in ()
  });

});