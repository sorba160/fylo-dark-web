var username = document.getElementById('input_password');
username.addEventListener('input', (event)=>{
  var currentValue = event.target.value;
  console.log(currentValue);
})