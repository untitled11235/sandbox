function toggle() {

  event.target.style.backgroundColor = 'green';
}

function add1() {
  var num = event.target.innerHTML;
  event.target.innerHTML = parseInt(num)+1
}
