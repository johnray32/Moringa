function drive(event){
  event.preventDefault();
  let age = document.getElementById('age').value;

  if(age == 18) {
    document.getElementById('id').innerHTML = 'big car';
  }else if (age > 18 && age < 24) {
    document.getElementById('id').innerHTML = 'big car';
  }else if (age == 24 ) {
    document.getElementById('id').innerHTML = 'truck';
  }else () {
    document.getElementById('id').innerHTML = 'Please input age between 18 and 24';
  }
}
