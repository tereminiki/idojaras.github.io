let szavak=["alma","banán","kiskutya"]
let kitalalando=""
let hibakszama=0
let kiirbetuk=0
let benyomottbettomb=[]
function elindul(){
    //alert("Elindult!")
    document.getElementById("hibakep").innerHTML=""
    kitalalando=""
    hibakszama=0
    kiirbetuk=0
    benyomottbettomb=[]
    document.getElementById("betukkeret").innerHTML=""
    let veletlen=Math.floor(Math.random() * szavak.length);
    //alert(veletlen)
    kitalalando=szavak[veletlen]
    
    for (let i = 0; i < kitalalando.length; i++) {
        document.getElementById("betukkeret").innerHTML+=`<div id=${i}
        class="betuformazas">
        </div>`
        
    }
    

    gomb.style.visibility="hidden"


}
function beker(event){
    //alert(event.key)
    let leutottbetu=event.key
    let db=0
    

    if(benyomottbettomb.includes(leutottbetu)==false){
    for (let i = 0; i < kitalalando.length; i++) {
        //alert(i)
        
        if(leutottbetu==kitalalando[i])
        {
            document.getElementById(i).innerHTML=leutottbetu
            db++
            benyomottbettomb.push(leutottbetu)
            kiirbetuk++
            if(kiirbetuk==kitalalando.length)
            {
                hibakep.innerHTML=`<img src="gyoztunk.jpg">`
                gomb.style.visibility="visible"
            }
        }
        
        
    }
    console.log(benyomottbettomb)
    if(db==0)
    {

        hibakszama++;
        if(hibakszama>8){
            hibakep.innerHTML=`<img src="vesztettel.jpg">`
            gomb.style.visibility="visible"
            for (let i = 0; i < kitalalando.length; i++) {
                document.getElementById(i).innerHTML=kitalalando[i]
                
            }
        }
        else{
        hibakep.innerHTML=`<img src="${hibakszama}.jpg">`
        }
    }
}
    console.log("Hibák száma:"+hibakszama)
    

}
