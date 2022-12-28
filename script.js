function load(){
  let x = document.getElementById("info_1").value;
  let y = document.getElementById("info_2").value;
  let z = document.getElementById("info_3").value;
  let u = document.getElementById("info_4").value;
  if(x=="" || y=="" || z=="" || u==""){
    alert('All information must be given properly');
  }
  else{
    let r = confirm("We are going to submit the form. Is that ok?");
    
      if(r==true){
      document.getElementById("info1").value=x;
      document.getElementById("info2").value=y;
      document.getElementById("info3").value="*****";
      document.getElementById("info4").value="*****";
    }  
  }
}

function showdata(){ 
let mydiv = document.getElementById("demo");

if(mydiv.style.display==="block"){
    mydiv.style.display="none";
}
else{
  mydiv.style.display="block";
}
}