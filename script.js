let age = prompt('How old are you?');

if(age == 18) {

  console.log('You can drive small car');
  
  document.write('You can drive small car');

}else if (age > 18 && age < 24) {
  console.log('You can drive a big car');
}else if (age == 24 ) {
  console.log('You can drive a truck');
}
