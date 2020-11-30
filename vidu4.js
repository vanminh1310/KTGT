function readvalue(){
  // read
  var  TPX1   =  document.getElementById('tpx1').value/100
  var  TPX2   =  document.getElementById('tpx2').value/100
  var  LLxe   =  document.getElementById('LLxe').value
  var  BRLD   =  document.getElementById('BRLD').value
  var  HLAT   =  document.getElementById('HLAT').value
  var  MDDKN  =  document.getElementById('MDDKN').value
  var  BFFS   =  document.getElementById('BFFS').value
  var  CDDD   =  document.getElementById('CDDD').value
  var  TLLL   =  document.getElementById('TLLL').value
  var  PHF    =  document.getElementById('PHF').value
  var TLCV = document.getElementById('TLCv').value
  var I = document.getElementById('I');
  var II = document.getElementById('II');
  var III = document.getElementById('III');
  var db = document.getElementById('db');
  var doi = document.getElementById('doi');

  // dislay
  console.log("Thành phần xe tải: ", TPX1);
  console.log("Thành phần xe du lịch: ", TPX2);
  console.log("Lưu lượng xe: ", LLxe);
  console.log("Bề rộng làn đường: ",BRLD);
  console.log("Hành lan an toàn: ", HLAT);
  console.log("Mật độ điểm kết nối: ", MDDKN);
  console.log("Tốc độ: ", BFFS)
  console.log("Chiều dài đoạn đường: ",CDDD);
  console.log("Tỷ lệ lưu lượng: ", TLLL)
  console.log("PHF: ",PHF);

  // dung chung 
  var Vvph =Math.round( (((LLxe /TLLL)/PHF)*100)/100,);
  var Vi = LLxe/TLLL
    console.log("Vi: ", Vi)
    console.log("VVPH : ", Vvph)
 function fls(BRLD,HLAT) 
  {
    var fls1 
    //1
    if(9<=BRLD&BRLD<10 && 0<=HLAT&HLAT<2)
    {
      return fls1 = 6.4
    }
    if(9<=BRLD&BRLD<10 && 2<=HLAT&HLAT<4)
    {
     return fls1 = 4.8
    }
    if(9<=BRLD&BRLD<10 && 4<=HLAT&HLAT<6)
    {
     return fls1 = 3.5
    }
    if(9<=BRLD&BRLD<10 && 6<=HLAT)
    {
      return fls1 = 2.2
    }
    //2
       if(10<=BRLD&BRLD<11 && 0<=HLAT&HLAT<2)
    {
     return  fls1 = 5.3
    }
    if(10<=BRLD&BRLD<11 && 2<=HLAT&HLAT<4)
    {
     return fls1 = 3.7
    }
    if(10<=BRLD&BRLD<11 && 4<=HLAT&HLAT<6)
    {
      return fls1 = 2.4
    }
    if(10<=BRLD&BRLD<11 && 6<=HLAT)
    {
     return fls1 = 1.1
    }
    //3
    if(11<=BRLD&BRLD<12 && 0<=HLAT&HLAT<2)
    {
      return fls1 = 4.7
    }
    if(11<=BRLD&BRLD<12 && 2<=HLAT&HLAT<4)
    {
      return fls1 = 3.0
    }
    if(11<=BRLD&BRLD<12 && 4<=HLAT&HLAT<6)
    {
     return fls1 = 1.7
    }
    if(11<=BRLD&BRLD<12 && 6<=HLAT)
    {
     return fls1 = 0.4
    }
    //4
    if(12<=BRLD && 0<=HLAT&HLAT<2)
    {
     return fls1 = 4.2
    }
    if(12<=BRLD && 2<=HLAT&HLAT<4)
    {
     return fls1 = 2.6
    }
    if(12<=BRLD && 4<=HLAT&HLAT<6)
    {
     return fls1 = 1.3
    }
    if(12<=BRLD && 6<=HLAT)
    {
     return fls1 = 0.0
    }
   //else 
   
   
 
  }
 
// fa
  function fa(MDDKN){
    var MDDKN1
    if(MDDKN == 0){
    return MDDKN1 = 0
    }
    if(MDDKN == 10){
    return MDDKN1 = 2.5
    }
    if(MDDKN == 20){
    return  MDDKN1 = 5.0
    }
    if(MDDKN == 30){
    return MDDKN1 = 7.5
    }
    if(MDDKN == 40){
    return MDDKN1 = 10
    }

  }
  

  function ATS() {
    
    var Fgats
    //dong bang
    if (Vvph<=100 || Vvph <= 800 && db.checked == true) {
      return Fgats = 1
    }
    if (800< Vvph <900 && db.checked == true) {
      return Fgats = 1;

    }
    if (Vvph >= 900 && db.checked == true) {
      return Fgats = 1;

    }
    // doi nui
  
      if(Vvph<=100 && doi.checked == true )
      {
        return Fgats = 0.67
      }
      if(Vvph ==200 &&doi.checked == true)
      {
        return Fgats = 0.75
      }
      if(Vvph==300 &&doi.checked == true)
      {
        return Fgats = 0.83
      }
      if(Vvph==400 &&doi.checked == true)
      {
        return Fgats = 0.90
      }
      if(Vvph==500 &&doi.checked == true)
      {
        return Fgats = 0.95
      }
      if(Vvph==600 &&doi.checked == true)
      {
        return Fgats = 0.97
      }
      if(Vvph==700 &&doi.checked == true)
      {
        return Fgats = 0.98
      }
      if(Vvph==800 &&doi.checked == true)
      {
        return Fgats = 0.99
      }
      if(Vvph>=900 &&doi.checked == true)
      {
        return Fgats = 1
      }

        if(100<Vvph && Vvph <200 &&doi.checked == true ){
          return Fgats =parseFloat( (0.75*(Vvph-100)+0.67*(200-Vvph))/(200-100)).toFixed(2)
        }
        if(200<Vvph && Vvph <300 &&doi.checked == true){
          return Fgats =parseFloat( (0.83*(Vvph-200)+0.75*(300-Vvph))/(300-200)).toFixed(2)
        }
        if(300<Vvph && Vvph <400 &&doi.checked == true){
          return Fgats =parseFloat( (0.9*(Vvph-300)+0.83*(400-Vvph))/(400-300)).toFixed(2)      
        }
        if(400<Vvph && Vvph <500 &&doi.checked == true){
          return Fgats =parseFloat( (0.95*(Vvph-400)+0.9*(500-Vvph))/(500-400)).toFixed(2)      
        }
        if(500<Vvph && Vvph <600 &&doi.checked == true){
          return Fgats =parseFloat( (0.97*(Vvph-500)+0.95*(600-Vvph))/(600-500)).toFixed(2)
        }
        if(600<Vvph && Vvph <700 &&doi.checked == true){
          return Fgats =parseFloat( (0.98*(Vvph-600)+0.97*(700-Vvph))/(700-600)).toFixed(2)
        }
        if(700<Vvph && Vvph <800 &&doi.checked == true){
          return Fgats =parseFloat( (0.99*(Vvph-700)+0.98*(800-Vvph))/(800-700)).toFixed(2)
        }
        if(800<Vvph && Vvph <900 &&doi.checked == true){
          return Fgats =parseFloat( (1*(Vvph-800)+0.99*(900-Vvph))/(900-800)).toFixed(2)    
        }
        
      // et, er
      }

    function ET(){
      var ET1      //et
      if (Vvph <=100  && db.checked == true) {
        return ET1 = 1.9;
    
      }
      if (Vvph ==200  && db.checked == true) {
        return ET1 = 1.5;
    
      }
      if (Vvph == 300 && db.checked == true) {
        return ET1 = 1.4;
    
      }
      if (Vvph == 400 && db.checked == true) {
        return ET1 = 1.3;
    
      }
      if (Vvph == 500 && db.checked == true) {
        return ET1 = 1.2;
    
      }
      if (Vvph == 600 && db.checked == true) {
        return ET1 = 1.1;
    
      }
      if (Vvph == 700 && db.checked == true) {
        return ET1 = 1.1;
    
      }
      if (Vvph ==  800 && db.checked == true) {
        return ET1 = 1.1;
    
      }
      if (Vvph >= 900  && db.checked == true) {
        return ET1 = 1;
    
      }


      //noi suy return ET1
      if(100<Vvph && Vvph <200 &&db.checked == true ){
        return ET1 = parseFloat(((1.5*(Vvph-100)+1.9*(200-Vvph))/(200-100))).toFixed(1) // lam tron 0.1
      }
      if(200<Vvph && Vvph <300 &&db.checked == true){
        return ET1 =parseFloat( ((1.4*(Vvph-200)+1.5*(300-Vvph))/(300-200))).toFixed(1)
      }
      if(300<Vvph && Vvph <400 &&db.checked == true){
        return ET1 =parseFloat( ((1.3*(Vvph-300)+1.4*(400-Vvph))/(400-300))).toFixed(1)
      }
      if(400<Vvph && Vvph <500 &&db.checked == true){
        return ET1 =parseFloat( ((1.2*(Vvph-400)+1.3*(500-Vvph))/(500-400))).toFixed(1)
      }
      if(500<Vvph && Vvph <600 &&db.checked == true){
        return ET1 =parseFloat( ((1.1*(Vvph-500)+1.2*(600-Vvph))/(600-500))).toFixed(1)
      }
      if(600<Vvph && Vvph <700 &&db.checked == true){
        return ET1 =parseFloat( ((1.1*(Vvph-600)+1.1*(700-Vvph))/(700-600))).toFixed(1)
      }
      if(700<Vvph && Vvph <800 &&db.checked == true){
        return ET1 =parseFloat( ((1.1*(Vvph-700)+1.1*(800-Vvph))/(800-700))).toFixed(1)
      }
      if(800<Vvph && Vvph <900 &&db.checked == true){
        return ET1 =parseFloat( (  (1*(Vvph-800)+1.1*(900-Vvph))/(900-800))).toFixed(1)
      }
      // dia hinh vung doi 
      if (Vvph <=100  && doi.checked == true) {
        return ET1 = 2.7;
    
      }
      if (Vvph ==200  && doi.checked == true) {
        return ET1 = 2.3 ;
    
      }
      if (Vvph == 300 && doi.checked == true) {
        return ET1 = 2.1 ;
    
      }
      if (Vvph == 400 && doi.checked == true) {
        return ET1 = 2;
    
      }
      if (Vvph == 500 && doi.checked == true) {
        return ET1 =1.8 ;
    
      }
      if (Vvph == 600 && doi.checked == true) {
        return ET1 = 1.7 ;
    
      }
      if (Vvph == 700 && doi.checked == true) {
        return ET1 = 1.6;
    
      }
      if (Vvph ==  800 && doi.checked == true) {
        return ET1 = 1.4;
    
      }
      if (Vvph >= 900  && doi.checked == true) {
        return ET1 =1.3;
    
      }

      // noi suy doi
      if(100<Vvph && Vvph <200 &&doi.checked == true ){
        return ET1 = parseFloat( ((2.3*(Vvph-100)+2.7*(200-Vvph))/(200-100))).toFixed(1)
      }
      if(200<Vvph && Vvph <300 &&doi.checked == true){
        return ET1 = parseFloat( ((2.1*(Vvph-200)+2.3*(300-Vvph))/(300-200))).toFixed(1)
      }
      if(300<Vvph && Vvph <400 &&doi.checked == true){
        return ET1 = parseFloat( (  (2*(Vvph-300)+2.1*(400-Vvph))/(400-300))).toFixed(1)
      }
      if(400<Vvph && Vvph <500 &&doi.checked == true){
        return ET1 = parseFloat( (  (1.8*(Vvph-400)+2*(500-Vvph))/(500-400))).toFixed(1)
      }
      if(500<Vvph && Vvph <600 &&doi.checked == true){
        return ET1 = parseFloat( ((1.7*(Vvph-500)+1.8*(600-Vvph))/(600-500))).toFixed(1)
      }
      if(600<Vvph && Vvph <700 &&doi.checked == true){
        return ET1 = parseFloat( ((1.6*(Vvph-600)+1.7*(700-Vvph))/(700-600))).toFixed(1)
      }
      if(700<Vvph && Vvph <800 &&doi.checked == true){
        return ET1 = parseFloat( ((1.4*(Vvph-700)+1.6*(800-Vvph))/(800-700))).toFixed(1)
      }
      if(800<Vvph && Vvph <900 &&doi.checked == true){
        return ET1 = parseFloat( ((1.3*(Vvph-800)+1.4*(900-Vvph))/(900-800))).toFixed(1)
      }

    
    console.log("ET ", ET1)
    }

    function ER (){
       var er
       if (db.checked==true) {
         
         return er = 1
         
       }
       if(doi.checked == true){
        return er = 1.1
       }
     

    }
    // buoc 4
    function xdATS(){
      var ATSS
      if(FFS == 55){
        // <= 100
        if(V0<=100 && TLCV<=20)
        {
          return ATSS = 0.5
        }
        if(V0 <= 100 && TLCV == 40){
          return ATSS = 1.2
        }
        if(V0 <= 100 && TLCV == 60){
          return ATSS = 2.2
        }
        if(V0 <= 100 && TLCV == 80){
          return ATSS = 2.6
        }
        if(V0 <= 100 && TLCV == 100){
          return ATSS = 2.7
        }
        //200
        if(V0 ==200 && TLCV<=20)
        {
          return ATSS = 1.5
        }
        if(V0 == 200 && TLCV == 40){
          return ATSS = 2.4
        }
        if(V0 == 200 && TLCV == 60){
          return ATSS = 3.5
        }
        if(V0 == 200 && TLCV == 80){
          return ATSS = 3.9
        }
        if(V0 == 200 && TLCV == 100){
          return ATSS = 4.1
        }
        //400
        if(V0 ==400 && TLCV<=20)
        {
          return ATSS = 1.3
        }
        if(V0 == 400 && TLCV == 40){
          return ATSS = 1.9
        }
        if(V0 == 400 && TLCV == 60){
          return ATSS = 2.4
        }
        if(V0 == 400 && TLCV == 80){
          return ATSS = 2.7
        }
        if(V0 == 400 && TLCV == 100){
          return ATSS = 2.8
        }
        //600
        if(V0 ==600 && TLCV<=20)
        {
          return ATSS = 0.9
        }
        if(V0 == 600 && TLCV == 40){
          return ATSS = 1.1
        }
        if(V0 == 600 && TLCV == 60){
          return ATSS = 1.6
        }
        if(V0 == 600 && TLCV == 80){
          return ATSS = 1.8
        }
        if(V0 == 600 && TLCV == 100){
          return ATSS = 1.9
        }
        //800
        if(V0 ==800 && TLCV<=20)
        {
          return ATSS = 0.5
        }
        if(V0 == 800 && TLCV == 40){
          return ATSS = 0.7
        }
        if(V0 == 800 && TLCV == 60){
          return ATSS = 1.1
        }
        if(V0 == 800 && TLCV == 80){
          return ATSS = 1.2
        }
        if(V0 == 800 && TLCV == 100){
          return ATSS = 1.4
        }
        //1000
        //800
        if(V0 ==1000 && TLCV<=20)
        {
          return ATSS = 0.5
        }
        if(V0 == 1000 && TLCV == 40){
          return ATSS = 0.6
        }
        if(V0 == 1000 && TLCV == 60){
          return ATSS = 0.8
        }
        if(V0 == 1000 && TLCV == 80){
          return ATSS = 0.9
        }
        if(V0 == 1000 && TLCV == 100){
          return ATSS = 1.1
        }



        



      }
      


    }






  function showkq(){
    var fls2 = fls(BRLD,HLAT)
    var fa2 = fa(MDDKN)
    var FFS = parseFloat(parseFloat(BFFS)- parseFloat(fls2) -parseFloat(fa2)).toFixed(2)
    document.getElementById('ffs').innerHTML= FFS
    document.getElementById('fats').innerHTML = ATS()
    document.getElementById('ET').innerHTML =ET()
    var HVATs =parseFloat (1/((1+TPX1*(ET()-1)) + TPX2*(ER()-1))).toFixed(2)
    console.log("HVATS", HVATs)
    document.getElementById('HV').innerHTML = HVATs
    var dATS = Math.round( Vi/(PHF*ATS()*0.943))
    console.log("Vd_ATS", dATS)
    document.getElementById("dATS").innerHTML=dATS + " xcqd/h"
  
   
  }


  showkq();
  var shower = ER()
  console.log("ER: ",shower)
  var V0 = dATS







}









function show(){
  readvalue()

}


