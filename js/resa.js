function startresa(){
  document.getElementById("intro").style.display="block";
  document.getElementById("verniciatura").style.display="none";
  document.getElementById("multistrato").style.display="none";
  document.getElementById("autolivellante").style.display="none";
  document.getElementById("massetto").style.display="none";
  document.getElementById("risultati").style.display="none";
  }
function openver(){
  document.getElementById("intro").style.display="none";
  document.getElementById("verniciatura").style.display="block";
  document.getElementById("multistrato").style.display="none";
  document.getElementById("autolivellante").style.display="none";
  document.getElementById("massetto").style.display="none";
  document.getElementById("risultati").style.display="none";
  }
function controllover(){
if (document.getElementById("primerv").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("primerv").focus()
}else if (document.getElementById("primamanv").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("primamanv").focus()
} else if (document.getElementById("secondamanv").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("secondamanv").focus()
} else if (document.getElementById("inertiv").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("inertiv").focus()
}else if (document.getElementById("areap").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("areap").focus()
}   else{resaver()}
}
function resaver(){
// chiamate chiusura e apertura blocchi
document.getElementById("risultati").style.display="block";
  document.getElementById("verniciatura").style.display="none";
  document.getElementById("risultaver").style.display="block";
  document.getElementById("risultamulti").style.display="none";
  document.getElementById("risultaauto").style.display="none";
  document.getElementById("risultamass").style.display="none";
// definizione delle variabili  
var areapaver=document.getElementById('areap').value;
var resprimerv=document.getElementById('primerv').value;
var resprimamanv=document.getElementById('primamanv').value;
var ressecondamanv=document.getElementById('secondamanv').value;
var resinertiv=document.getElementById('inertiv').value;
// inizio calcolo resa
if(resprimerv !== 0){
var consprimerv=areapaver*resprimerv;
document.getElementById("resaprimerv").innerHTML="Primer  : <span style='font-weight:bold;color:#aa0000;'>"+consprimerv+"</span> Kg";
}else{document.getElementById("resaprimerv").style.display="none"}
if (resprimamanv !==0){
var consprimamanv=areapaver*resprimamanv;
}else{consprimamanv=0;}

if (ressecondamanv !== 0){
var conssecondamanv=areapaver*ressecondamanv;
}else{conssecondamanv=0;}
consvern=consprimamanv+conssecondamanv;
document.getElementById("resaver").innerHTML="Resina per verniciatura : <span style='font-weight:bold;color:#aa0000;'>"+consvern+"</span> Kg";
if (resinertiv !==0){
var consinertiv=areapaver*resinertiv;
document.getElementById("resinerti").innerHTML="Inerti o cariche minerali : <span style='font-weight:bold;color:#aa0000;'>"+consinertiv+"</span> Kg.";
}else{document.getElementById("resinerti").style.display="none"}
document.getElementById("areaver").innerHTML="Materiale occorrente per la verniciatura di un pavimento di <span style='font-weight:bold'>"+areapaver+"</span> mq <hr />"
}  
function openmulti(){
  document.getElementById("intro").style.display="none";
  document.getElementById("verniciatura").style.display="none";
  document.getElementById("multistrato").style.display="block";
  document.getElementById("autolivellante").style.display="none";
  document.getElementById("massetto").style.display="none";
  document.getElementById("risultati").style.display="none";
  }
function controllomulti(){
if (document.getElementById("primermult").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("primermult").focus()
}else if (document.getElementById("primamanmulti").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("primamanmulti").focus()
} else if (document.getElementById("secondamanmulti").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("secondamanmulti").focus()
} else if (document.getElementById("terzamanmulti").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("terzamanmulti").focus()
}else if (document.getElementById("manfinmulti").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("manfinmulti").focus()
} else if (document.getElementById("inertimulti").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("inertimulti").focus()
} else if (document.getElementById("areamultis").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("areamultis").focus()
}else{resamult()}
}
function resamult(){
document.getElementById("risultati").style.display="block";
  document.getElementById("multistrato").style.display="none";
  document.getElementById("risultaver").style.display="none";
  document.getElementById("risultamulti").style.display="block";
  document.getElementById("risultaauto").style.display="none";
  document.getElementById("risultamass").style.display="none";
var areamulti=document.getElementById('areamultis').value;
var areamulti=areamulti*1;
var resprimermulti=document.getElementById('primermult').value;
var resprimermulti=resprimermulti*1;
var resprimomulti=document.getElementById('primamanmulti').value;
var resprimomulti=resprimomulti*1;
var ressecondomulti=document.getElementById('secondamanmulti').value;
var ressecondomulti=ressecondomulti*1;
var resterzomulti=document.getElementById('terzamanmulti').value;
var resterzomulti=resterzomulti*1;
var resfinmulti=document.getElementById('manfinmulti').value;
var resfinmulti=resfinmulti*1;
var resinertmulti=document.getElementById('inertimulti').value;
var resinertmulti=resinertmulti*1;
if(resprimermulti !== 0){
var consprimermulti=areamulti*resprimermulti;
document.getElementById("primermultistrato").innerHTML="Primer : <span style='font-weight:bold;color:#aa0000;'>"+consprimermulti+"</span> Kg";
} else{document.getElementById("primermultistrato").style.display="none";}
if (resprimomulti !==0){
var consmulti1=areamulti*resprimomulti;}else{consmulti1=0}
if (ressecondomulti !==0){
var consmulti2=areamulti*ressecondomulti;}else{consmulti2=0}
if (resterzomulti !==0){
var consmulti3=areamulti*resterzomulti;}else{consmulti3=0}
var consresmulti=consmulti1+consmulti2+consmulti3;
document.getElementById("resinamultistrato").innerHTML="Resina per multistrato : <span style='font-weight:bold;color:#aa0000;'>"+consresmulti+"</span> Kg";
if (resfinmulti !== 0){
var consfinmulti=areamulti*resfinmulti;
document.getElementById("finituramultistrato").innerHTML="Eventuale mano finitura (poliuretanica o epossidica) : <span style='font-weight:bold;color:#aa0000;'>"+consfinmulti+"</span> Kg";
}else{document.getElementById("finituramultistrato").style.display="none";}
if (resinertmulti !==0){
var consinertmulti=areamulti*resinertmulti;
document.getElementById("quarzomultistrato").innerHTML="Inerti o cariche minerali : <span style='font-weight:bold;color:#aa0000;'>"+consinertmulti+"</span> Kg.";
}else{document.getElementById("quarzomultistrato").style.display="none"}
document.getElementById("areamultistrato").innerHTML="Materiale occorrente per il rivestimento multistrato di un pavimento di <span style='font-weight:bold'>"+areamulti+"</span> mq <hr />"
}  
function openauto(){
  document.getElementById("intro").style.display="none";
  document.getElementById("verniciatura").style.display="none";
  document.getElementById("multistrato").style.display="none";
  document.getElementById("autolivellante").style.display="block";
  document.getElementById("massetto").style.display="none";
  document.getElementById("risultati").style.display="none";
  }
function controlloaut(){
if (document.getElementById("primerauto").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("primerauto").focus()
}else if (document.getElementById("manautoliv").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("manautoliv").focus()
} else if (document.getElementById("manfinautoliv").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("manfinautoliv").focus()
} else if (document.getElementById("inertiauto").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("inertiauto").focus()
} else if (document.getElementById("areauto").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("areauto").focus()
}else{resaaut()}
}
function resaaut(){
document.getElementById("risultati").style.display="block";
  document.getElementById("autolivellante").style.display="none";
  document.getElementById("risultaver").style.display="none";
  document.getElementById("risultamulti").style.display="none";
  document.getElementById("risultaauto").style.display="block";
  document.getElementById("risultamass").style.display="none";
var areapauto=document.getElementById('areauto').value;
var areapauto=areapauto*1;
var resprimeraut=document.getElementById('primerauto').value;
var resprimeraut=resprimeraut*1;
var resmanauto=document.getElementById('manautoliv').value;
var resmanauto=resmanauto*1;
var resfinauto=document.getElementById('manfinautoliv').value;
var resfinauto=resfinauto*1;
var resinertauto=document.getElementById('inertiauto').value;
var resinertauto=resinertauto*1;
if(resprimeraut !== 0){
var consprimerauto=areapauto*resprimeraut;
document.getElementById("primerautol").innerHTML="Primer : <span style='font-weight:bold;color:#aa0000;'>"+consprimerauto+"</span> Kg";
} else{document.getElementById("primerautol").style.display="none";}
if (resmanauto !==0){
var consauto=areapauto*resmanauto;
document.getElementById("resaautoli").innerHTML="Autolivellante : <span style='font-weight:bold;color:#aa0000;'>"+consauto+"</span> Kg";
}else{document.getElementById("resaautoli").style.display="none";}
if (resfinauto !== 0){
var consfinauto=areapauto*resfinauto;
}else{document.getElementById("finituraautoliv").style.display="none";}
document.getElementById("finituraautoliv").innerHTML="Eventuale mano finitura (poliuretanica o epossidica) : <span style='font-weight:bold;color:#aa0000;'>"+consfinauto+"</span> Kg";
if (resinertauto !==0){
var consinertaut=areapauto*resinertauto;
document.getElementById("resainertautoliv").innerHTML="Inerti o cariche minerali : <span style='font-weight:bold;color:#aa0000;'>"+consinertaut+"</span> Kg.";
}else{document.getElementById("resainertautoliv").style.display="none"}
document.getElementById("superauto").innerHTML="Materiale occorrente per il rivestimento autolivellante di un pavimento di <span style='font-weight:bold'>"+areapauto+"</span> mq <hr />"
}  
function openmass(){
  document.getElementById("intro").style.display="none";
  document.getElementById("verniciatura").style.display="none";
  document.getElementById("multistrato").style.display="none";
  document.getElementById("autolivellante").style.display="none";
  document.getElementById("massetto").style.display="block";
  document.getElementById("risultati").style.display="none";
  }
function controllomass(){
if (document.getElementById("primermass").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("primermass").focus()
}else if (document.getElementById("mass").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("mass").focus()
} else if (document.getElementById("rasamass").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("rasamass").focus()
} else if (document.getElementById("finmass").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("finmass").focus()
}else if (document.getElementById("inertimass").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("inertimass").focus()
} else if (document.getElementById("areamass").value===""){
alert("Inserisci i dati mancanti");
document.getElementById("areamass").focus()
} else {resamass()}
}
function resamass(){
document.getElementById("risultati").style.display="block";
  document.getElementById("massetto").style.display="none";
  document.getElementById("risultaver").style.display="none";
  document.getElementById("risultamulti").style.display="none";
  document.getElementById("risultaauto").style.display="none";
  document.getElementById("risultamass").style.display="block";
var areamass=document.getElementById('areamass').value;
var areamass=areamass*1;
var resprimermass=document.getElementById('primermass').value;
var resprimermass=resprimermass*1;
var resmass=document.getElementById('mass').value;
var resmass=resmass*1;
var resrasamass=document.getElementById('rasamass').value;
var resrasamass=resrasamass*1;
var resfinmass=document.getElementById('finmass').value;
var resfinmass=resfinmass*1;
var resinertimass=document.getElementById('inertimass').value;
var resinertimass=resinertimass*1;
if(resprimermass !== 0){
var consprimermass=areamass*resprimermass;
document.getElementById("primermassetto").innerHTML="Primer : <span style='font-weight:bold;color:#aa0000;'>"+consprimermass+"</span> Kg";
} else{document.getElementById("primermassetto").style.display="none";}
if (resmass !==0){
var consmass=areamass*resmass;
document.getElementById("resinamassetto").innerHTML="Resina per malta epossidica : <span style='font-weight:bold;color:#aa0000;'>"+consmass+"</span> Kg";
}else{document.getElementById("resinamassetto").style.display="none";}

if (resrasamass !== 0){
var consrasamass=areamass*resrasamass;
document.getElementById("rasaturamassetto").innerHTML="Resina per rasatura : <span style='font-weight:bold;color:#aa0000;'>"+consrasamass+"</span> Kg";
}else{document.getElementById("rasaturamassetto").style.display="none";}
if (resfinmass !== 0){
var consfinmass=areamass*resfinmass;
document.getElementById("finituramassetto").innerHTML="Resina per finitura : <span style='font-weight:bold;color:#aa0000;'>"+consfinmass+"</span> Kg";
}else{document.getElementById("finituramassetto").style.display="none";}
if (resinertimass !==0){
var consinertmass=areamass*resinertimass;
document.getElementById("quarzomassetto").innerHTML="Quarzo per malta e rasature : <span style='font-weight:bold;color:#aa0000;'>"+consinertmass+"</span> Kg.";
}else{document.getElementById("quarzomassetto").style.display="none"}
document.getElementById("areamassetto").innerHTML="Materiale occorrente per  massetto epossidico di <span style='font-weight:bold'>"+areamass+"</span> mq <hr />"
}  
