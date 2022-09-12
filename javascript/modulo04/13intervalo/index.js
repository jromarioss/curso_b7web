let timer;

function comecar() {
  timer = setInterval(showTime, 10);
  
}

function parar() {
  clearInterval(timer);
}

function showTime() {
  let d = new Date();
  let mm = d.getMilliseconds();

  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let txt = h + ':' + m + ':' + s + ':' + mm;

  document.getElementById('demo').innerHTML = txt;
}
