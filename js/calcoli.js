function genmiscela(){
document.getElementById("intro").style.display="block";
document.getElementById("bicomponente").style.display ="none";
document.getElementById("tricomponente").style.display="none";
}
function sceltaresinab(){
document.getElementById("intro").style.display="none";
document.getElementById("bicomponente").style.display = "block";
document.getElementById("tricomponente").style.display="none";
}
function sceltaresinat(){
document.getElementById("intro").style.display="none";
document.getElementById("bicomponente").style.display = "none";
document.getElementById("tricomponente").style.display="block";
} 
function controllabic(){
if(document.getElementById('qresin').value===""){
alert("Inserisci il valore richiesto");
document.getElementById('qresin').focus();
}else if(document.getElementById('bicoma').value===""){
alert("Inserisci il valore richiesto");
document.getElementById('bicoma').focus();
}else if(document.getElementById('bicomb').value===""){
alert("Inserisci il valore richiesto");
document.getElementById('bicomb').focus();
}else{calcolabic()}
}
function calcolabic(){
        var bicompa=document.getElementById("bicoma").value;
        var bicompb=document.getElementById("bicomb").value;
        var qresina=document.getElementById("qresin").value;
        var risultabicomp=document.getElementById('risultatobicomponente');
        var quantresaa=1*(qresina *(bicompa/(1*bicompa +1* bicompb)));
        var quantresbb=1*(qresina *(bicompb / (1*bicompa +1* bicompb)));
        var quantresa=Math.round(quantresaa*Math.pow(10,2))/Math.pow(10,2);
        var quantresb=Math.round(quantresbb*Math.pow(10,2))/Math.pow(10,2);
        document.getElementById('insertdatibicom').style.display="none";
        var rispostabicomp="Per miscelare <b><span style='color:#a80000;'> "+qresina+"</span></b> Kg di materiale occorrono: <br /><b><span style='color:#a80000;'>"+quantresa+"</span></b> Kg di componente A<br /><b><span style='color:#a80000;'>"+quantresb+" </span></b>Kg di componente B";
        risultabicomp.innerHTML=rispostabicomp;
}
 function controllatric(){
 if(document.getElementById('qresint').value===""){
alert("Inserisci il valore richiesto");
document.getElementById('qresint').focus();
}else if(document.getElementById('tricoma').value===""){
alert("Inserisci il valore richiesto");
document.getElementById('tricoma').focus();
}else if(document.getElementById('tricomb').value===""){
alert("Inserisci il valore richiesto");
document.getElementById('tricomb').focus();
} else if(document.getElementById('tricomc').value===""){
alert("Inserisci il valore richiesto");
document.getElementById('tricomc').focus();
}else{calcolatric()}
}
function calcolatric(){
        document.getElementById('risultatotricomponente').style.display= "block";
        var tricompa=document.getElementById('tricoma').value;
        var tricompb=document.getElementById('tricomb').value;        
        var tricompc=document.getElementById('tricomc').value;        
        var qresinat=document.getElementById('qresint').value;        
        var risultatric=document.getElementById('risultatotricomponente');
        var quantricaa=1*(qresinat*(tricompa/(1*tricompa+1*tricompb+1*tricompc)));
        var quantricbb=1*(qresinat*(tricompb/(1*tricompa+1*tricompb+1*tricompc)));
        var quantriccc=1*(qresinat*(tricompc/(1*tricompa+1*tricompb+1*tricompc) ));
        var quantrica=Math.round(quantricaa*Math.pow(10,2))/Math.pow(10,2);
        var quantricb=Math.round(quantricbb*Math.pow(10,2))/Math.pow(10,2);
        var quantricc=Math.round(quantriccc*Math.pow(10,2))/Math.pow(10,2);        
        document.getElementById('insertdatitricom').style.display="none";
        var rispostatricomp="Per miscelare <b><span style='color:#a80000;'>"+qresinat+"</span></b> Kg di resina occorrono: <br /><b><span style='color:#a80000;'>"+quantrica+"</span></b> Kg di componente A; <br /><b><span style='color:#a80000;'>"+quantricb+"</span></b> Kg di componente B; <br /><b><span style='color:#a80000;'>"+quantricc+"</span></b> Kg di componente C."  ;
        risultatric.innerHTML=rispostatricomp;
         }
//----- STIMA GIUNTI DI CONTRAZIONE
 function iniziostimag(){
  document.getElementById('sviluppogiunti').style.display="none";
    document.getElementById('rispostadimgiunti').style.display="none";

//nuovo canvas
var canvasgiu = document.getElementById("giunticontr");
var ctx=canvasgiu.getContext("2d");
var imggiu=document.getElementById('giunpic');
ctx.drawImage(imggiu, 0, 0);
ctx.font="18px arial";
ctx.fillStyle = "#fff";
ctx.textAlign = "center";
ctx.fillText("A ", 150, 45); 
ctx.fillText("B ", 160, 90);       

 }
 function trovagiu(){
 
 var superpav=document.getElementById('supavgiu').value;
 var alat=document.getElementById('larghri').value;
 var blat=document.getElementById('altri').value; 
document.getElementById('rispostadimgiunti').style.display="block"; 
document.getElementById('sviluppogiunti').style.display="block";
 
  document.getElementById('intro').style.display="none";
 var risultasvigiu=document.getElementById('sviluppogiunti');
 var dimepav=1*superpav /(1*alat*1*blat) ;
 var svigiu =parseInt((dimepav*alat)+(dimepav*blat));
 var tesvigiu="Per una superficie di <b><span style='color:#a80000;'>"+superpav+" </span></b> mq e per riquadri di larghezza ml <b><span style='color:#a80000;'>"+alat+"</span></b> e altezza ml <b><span style='color:#a80000;'>"+blat+"</span></b> lo sviluppo complessivo dei giunti di contrazione è pari a <b><span style='color:#a80000;'>"+svigiu+"</span></b> ml.";
 risultasvigiu.innerHTML=tesvigiu;
 var canvasgiu = document.getElementById("dimgiunticontr");
var ctx=canvasgiu.getContext("2d");
var imgdgiu=document.getElementById('dimgiunpic');
ctx.drawImage(imgdgiu, 0, 0);
ctx.font="18px arial";
ctx.fillStyle = "#fff";
ctx.textAlign = "center";
ctx.fillText("A = "+alat+" m", 150, 45); 
ctx.fillText("B = "+blat+" m", 170, 90);
}
function stimasgusce(){
document.getElementById('boxrisultati').style.display="block";  
//nuovo canvas
var canvasgiu = document.getElementById("disgusce");
var ctx=canvasgiu.getContext("2d");
var imgsgu=document.getElementById('sgupic');
ctx.drawImage(imgsgu, 0, 0);
ctx.font="18px arial";
ctx.fillStyle = "#222";
ctx.textAlign = "center";
ctx.fillText("A cm ", 50, 75); 
ctx.fillText("B cm", 165, 130);       

 }
function controllasgu(){
if(document.getElementById('areasgu').value===""){
alert("Inserire i metri di sgusce da realizzare");
document.getElementById('areasgu').focus()
}else if(document.getElementById('altesgu').value===""){
alert("Inserire l'altezza in cm delle sgusce da realizzare");
document.getElementById('altesgu').focus()
}else if(document.getElementById('larghsgu').value===""){
alert("Inserire l'altezza in cm delle sgusce da realizzare");
document.getElementById('larghsgu').focus()
}else{calcolasgu()}
}
function calcolasgu(){
document.getElementById('boxrisultati').style.display="block";
document.getElementById('introsgu').style.display="none";
document.getElementById('insert').style.display="none";
hsgu=document.getElementById('altesgu').value;
lsgu=document.getElementById('larghsgu').value;
msguscia=document.getElementById('areasgu').value;
ris=document.getElementById('risulta');
cons=document.getElementById('consumometro');

asg=((hsgu/100)*(lsgu/100))/2;
defasg=asg-(asg*10/100);
matsguscia=Math.round(defasg*msguscia*1300);
ris.innerHTML="il materiale occorrente per realizzare le sgusce perimetrali sar&agrave; pari a : <span style='font-weight:bold; color:#990000;'>"+matsguscia+" kg</span> comprensivo dello sfrido";
conssguscia=Math.round(matsguscia/msguscia*Math.pow(10,2))/Math.pow(10,2);
cons.innerHTML="Per un consumo pari a <span style='font-weight:bold; color:#990000;'>"+conssguscia+" Kg/ml </span>";
var canvasgiu = document.getElementById("disgusce");
var ctx=canvasgiu.getContext("2d");
var imgsgu=document.getElementById('sgupic');
ctx.drawImage(imgsgu, 0, 0);
ctx.font="18px arial";
ctx.fillStyle = "#222";
ctx.textAlign = "center";
ctx.fillText("A = "+hsgu+" cm", 50, 75); 
ctx.fillText("B = "+lsgu+" cm", 165, 130);

}
 
