function drive(event){
  event.preventDefault();
  let age = document.getElementById('id').value;

  if (age == 18) {
    document.getElementById('logo').innerHTML = 'drive small car';
  }else {
    document.getElementById('logo').innerHTML = 'put 18';
  }
}
