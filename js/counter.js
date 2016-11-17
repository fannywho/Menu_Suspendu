var data = [{
    id: 'counterA',
    speed: 70,
    from: 120,
    to: 142
  },{
    id: 'counterB',
    speed: 200,
    from: 0,
    to: 8
  },{
    id: 'counterC',
    speed: 70,
    from: 300,
    to: 324
  }]

var loop = [];
data.forEach(function(counter) {
  var container = document.getElementById(counter.id);
  var i = counter.from;
  loop[counter.id] = setInterval(function(){
    container.innerHTML = i.toString();
    i++;
    if (i > counter.to) {
      clearInterval(loop[counter.id]);
    }
  }, counter.speed);
});





function openNav() {
    document.getElementById("mySidenav").style.width = "80%";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNav_dt1() {
    document.getElementById("mySidenavDt1").style.width = "60%";

}

function closeNav_dt1() {
    document.getElementById("mySidenavDt1").style.width = "0";
}

function openNav_dt2() {
    document.getElementById("mySidenavDt2").style.width = "60%";

}

function closeNav_dt2() {
    document.getElementById("mySidenavDt2").style.width = "0";
}


/* ------------- BURGER ------- */

function openNavburger() {
    document.getElementById("mobilemenu").style.width = "80%";

}

function closeNavburger() {
    document.getElementById("mobilemenu").style.width = "0";
}

