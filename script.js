 var arr=[];
 
	
	var item = new Image();  
        item.src = 'img_the.jpg';
	
	var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.drawImage(item, 0, 0);
    
	
	var avr=[],avg=[],avb=[];
    var stcell=Number(document.getElementById('sell').value);
	var x=0,y=0,w=32,h=32;
    var wdh=c.width,hgt=c.height;
    var stw=wdh/w,sth=hgt/h;
   arrloop();
   
    function arrloop(){
   
	for(q=0;q<stw;q++){
        arr[q]=[];
        y=0;
		x=x+h;
       for(j=0;j<sth;j++){
           
           arr[q][j]=gathColor(x,y,w,h);//gathColor(x,y,w,h);
            y=y+h;
        
        }
    
	}
	}

    

function gathColor(x,y,w,h){
    var imgData = ctx.getImageData(x, y, w, h);
    avr.splice(0,avr.length),avg.splice(0,avg.length),avb.splice(0,avb.length);
	var i;
        for (i = 0; i < imgData.data.length; i += 4) {
            var r = imgData.data[i];
            var g = imgData.data[i+1]; 
            var b = imgData.data[i+2]; 
            var a = imgData.data[i+3];
            avr.push(r),avg.push(g),avb.push(b);
        	
		}
    
   var fcol =colorComp();
    
    return fcol;

}


function colorComp(){
    var r=averadge(avr),
        g=averadge(avg),
        b=averadge(avb);
    var col = "rgb(" +String(r)+","+String(g )+","+String(b)+")";   
   
    return col;

}


function averadge(carr){//averadge(avr)
    var ar=carr; var arl=carr.length;
    var sum=0;
        for(i=0;i<arl;i++){
            var temp=ar[i];
            var sum = sum+temp;
        }
    var itog= Math.floor(sum/arl);
   
return itog;

};

function arrparser() {
  var tarr = arr;
  var canvas = document.getElementById('canvas');
  var img = canvas.getContext('2d');
   
  for (var i = 0; i < sth; i++) {
    for (var z = 0; z < stw; z++) {
      var temp = tarr[z][i];
        
		img.clearRect(z * w, i * h, w, h);
        img.fillStyle = temp;
        img.fillRect(z * w, i * h, w, h);
    }
}
}

