function myfunction(x){
 x.style.background="yellow";
}

function myfunction1(y){
    y.value=y.value.toUpperCase()
}
function color(z,x){
    z.style.color=x;
}
function myfunction2(){
    alert('vous avez cliqué sur une touche de clavier')
}

function myfunction3(){
let x= document.getElementById("y").value;
document.getElementById("x").innerHTML = "vous avez écris:" + x;
}
function myfunction4(){
 let e=document.getElementById('agee').value;
    if(1<=e && e<=2)
    {
        alert('bébé');
    }
    else if(3<=e && e<=11)
    {
        alert('enfant');
    }
    else if(12<=e && e<=18)
    {
        alert('adoluscent');
    }
    else if(19<=e && e<=60)
    {
        alert('adulte');
    }
    else{
        alert('vieux');
    }

}
function myfunction5(){
    let x=document.getElementById('dl').value;
    for(i=0;i<=x;i++)
    {
        alert(i)
    } 

}
function myfunction6(){
    let z=document.getElementById('dl').value;
    for(i=0;i<=z;i++){
    if (i%2==0)
    {
        alert(i)
    }
    }

}
function myfunction7(){
    let a=prompt("donner votr nb")
    let c=Math.sqrt(a)
    document.getElementById('dll').value=c
}
function myfunction8(){
    let a=prompt("donner votr nb")
    let c=Math.abs(a)
    document.getElementById('dll1').value=c
}
function myfunction9(){
    let a=prompt("donner votr ch")
    if(a.length>=8)
    {
        document.getElementById('dll2').value=a
    } 
    }

function myfunction10(){
    let a=prompt("donner un nombre");
    let b=Math.round(a)
    document.getElementById('dll3').value=b
    let v=Math.trunc(a)
    document.getElementById('dll4').value=v

}
function myfunction11(){
    let b=Math.random()
    alert(b)

}
function myfunction12(){
    let b=Math.random()*10
    alert(b)

}
let ch="Systèmes et technologies informatiques"
function myfunction13(){
    let b=prompt("donner lindice du caractère")
    let m=ch.charAt(b)
    alert(m)

}
function myfunction14(){
    let a=prompt("saisie une chaine")
    let c=ch.indexOf(a)
    alert(c)
}
function myfunction15(){
    let z=prompt("saisie une chaine")
    let d=ch.lastIndexOf(z)
    alert(d)
}
function myfunction16(){
    let d=ch.replace("i","t")
    alert(d)
}
function myfunction17(){
    let d=ch.replaceAll("i","t")
    alert(d)
}
function myfunction18(){
    let d=ch.toUpperCase()
    alert(d)
}
function myfunction19(){
    let z=prompt("saisie une chaine")
    let d=z.toLowerCase()
    alert(d)
}
function myfunction20(){
    let d=ch.trim()
    alert(d)
}
function myfunction21(){
    let d=ch.substr(prompt("la position du premier caractère de la chaine "),prompt("la longueur du premier caractère de la chaine "))
    alert(d)
}
function myfunction22(){
    let d=ch.charCodeAt(prompt("la position du premier caractère de la chaine "))
    alert(d)
}
function myfunction23(){
    let d=String.fromCharCode(82,97,121,101,110)
    alert(d)
}
function myfunction24(){
    let z=prompt("saisie un nb")
    if (isNaN(z))
    {
        alert('N est pas un nombre');
    }
    else{
        alert(z**2);
    }
}
function myfunction25(){
    let z=prompt("saisie un chaine")
    let x=Number(z)
    alert(x/2)
}
function myfunction26(){
    let z=prompt("saisie un chaine")
    let x=parseFloat(z)
    alert(x)
}
function myfunction27(){
    let z=prompt("saisie un chaine")
    let x=parseInt(z)
    alert(x)
}
function myfunction28(){
    let n=15
    let a=string(n)
    alert(a)

}
function myfunction29(){
    let a=new Date()
    alert(a)

}
function myfunction30(){
    let d=new Date()
    let b="la journeé "+d.getDate()+" le mois "+(d.getMonth()+1)+" l'anneé "+d.getFullYear()
    alert(b)
}
function myfunction31(){
    let d=new Date()
    d.setDate(22)
    d.setMonth(5)
    d.setFullYear(2024)
    alert(d)
}


