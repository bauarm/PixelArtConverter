getPart.onclick=function(){
 
  arrparser();
};

sell.oninput = function() {
  x=0,y=0;
  stcell=Number(document.getElementById('sell').value);
  sell_info.innerHTML = stcell;
  w=stcell,h=stcell;
  
  stw=wdh/w,sth=hgt/h;
  //arr.splice(0,avr.length);
  arrloop();
  arrparser();
  
  };