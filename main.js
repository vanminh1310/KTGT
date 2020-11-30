


document.getElementById('vd3').onclick = function() {
        document.getElementById('vd4a').style.display = 'none'
        document.getElementById('dungchung').style.display = 'block'
        document.getElementById('vd33').style.display = 'block'
        document.getElementById('dungchung23').style.display = 'block'
        document.getElementById('vd22').style.display = 'none'
        document.getElementById('vd23').style.display ='block'
        document.getElementById('vd4').style.display = 'none'
        document.getElementById('na').style.display='none'
        document.getElementById('n').style.display='none'
        document.getElementById('vptlh5').style.display='block'
        document.getElementById('mdtlh5').style.display='block'
        document.getElementById('ffcs1').style.display='none'
        document.getElementById('b7').style.display='block'
        document.getElementById('vd5').style.display='none'
        document.getElementById('dungchung35').style.display='block'
        document.getElementById('vd5a').style.display='none'
    }
    document.getElementById('vd2').onclick = function() {
        document.getElementById('dungchung').style.display = 'block'
        document.getElementById('dungchung23').style.display = 'block'
        document.getElementById('vd22').style.display = 'block'
        document.getElementById('vd33').style.display = 'none'
        document.getElementById('vd4a').style.display = 'none'
        document.getElementById('vd23').style.display ='block'
        document.getElementById('vd4').style.display = 'none'
        document.getElementById('vptlh5').style.display='none'
        document.getElementById('mdtlh5').style.display='none'
        document.getElementById('na').style.display='block'
        document.getElementById('b7').style.display='none'
        document.getElementById('n').style.display='block'
        document.getElementById('ffcs1').style.display='block'
        document.getElementById('vd5').style.display='none'
        document.getElementById('dungchung35').style.display='none'
        document.getElementById('vd22a').style.display = 'block'
        document.getElementById('vd5a').style.display='none'


    }
    document.getElementById('vd4btn').onclick = function() {
        document.getElementById('vd4a').style.display = 'block'
        document.getElementById('dungchung').style.display = 'block'
        document.getElementById('dungchung23').style.display = 'none'
        document.getElementById('vd33').style.display = 'none'
        document.getElementById('vd22').style.display = 'none'
        document.getElementById('vd4').style.display = 'block'
        document.getElementById('vd23').style.display ='none'
        document.getElementById('b7').style.display='none'
        document.getElementById('vd5').style.display='none'
        document.getElementById('dungchung35').style.display='none'
        document.getElementById('vd5a').style.display='none'




    }
    document.getElementById('vd5btn').onclick = function(){
        document.getElementById('vd4a').style.display = 'none'
        document.getElementById('dungchung').style.display = 'block'
        document.getElementById('dungchung23').style.display = 'block'
        document.getElementById('vd33').style.display = 'none'
        document.getElementById('vd4').style.display = 'none'
        document.getElementById('vd22').style.display = 'block'
        document.getElementById('vd22a').style.display = 'none'
        document.getElementById('vd23').style.display ='none'
        document.getElementById('vd4').style.display = 'none'
        document.getElementById('na').style.display='none'
        document.getElementById('n').style.display='none'
        document.getElementById('vptlh5').style.display='none'
        document.getElementById('mdtlh5').style.display='none'
        document.getElementById('ffcs1').style.display='none'
        document.getElementById('b7').style.display='none'
        document.getElementById('vd5').style.display='block'
        document.getElementById('dungchung35').style.display='block'
        document.getElementById('luuluong1').style.display='none'
        document.getElementById('vd5a').style.display='block'
    
        
    }

    function myFunction() {
        document.getElementById("myform").reset();
    }



     function tinh() {
    
  
       
        var trd = document.getElementById("TRD").value
        var ll = document.getElementById("ll").value
        var phf = document.getElementById("PHF").value
        var brld = document.getElementById("BRLD").value
        var hlat = document.getElementById("HLAT").value
        var lltl = document.getElementById('lltl').value
      

        var flw
        var flc
        var ffs
        var fsss = document.getElementById('ffs').value
        var N = document.getElementById('N').value

        console.log("Mật độ đường nhánh: ", trd)
        console.log("Lưu lượng: ", ll)
        console.log("Hệ số giờ cao điểm: ", phf)
        console.log("Bề rộng làn đường: ", brld)
        console.log("Hành lang an toan: ", hlat)
            //Bề rộng làn đường 
        if (brld >= 12) {
            flw = 0.0;
        } else if (11 <= brld <= 12) {
            flw = 1.9;
        } else if (10 <= brld <= 11) {
            flw = 6.6;
        }
        console.log("Bề rộng làn đường flw: ", flw)
            // toc do dieu chinh do hanh lan an toan bang 3.6
        if (hlat >= 6 && trd == 3) {
            flc = 0;

        }
        if (hlat >= 6 && trd == 2) {
            flc = 0;

        }
        if (hlat >= 6 && trd == 4) {
            flc = 0;

        }
        if (hlat >= 6 && trd >= 5) {
            flif(hlat == 5 && trd == 2)
            flc = 0.6;

        }
        if (hlat == 5 && trd == 3) {
            flc = 0.4;

        }
        if (hlat == 5 && trd == 4) {
            flc = 0.2;

        }
        if (hlat == 5 && trd >= 5) {
            flc = 0.1;

        }
        //4
        if (hlat == 4 && trd == 2) {
            flc = 1.2;

        }
        if (hlat == 4 && trd == 3) {
            flc = 0.8;

        }
        if (hlat == 4 && trd == 4) {
            flc = 0.4;

        }
        if (hlat == 4 && trd >= 5) {
            flc = 0.2;

        }
        //3
        if (hlat == 3 && trd == 2) {
            flc = 1.8;

        }
        if (hlat == 3 && trd == 3) {
            flc = 1.2;

        }
        if (hlat == 3 && trd == 4) {
            flc = 0.6;

        }
        if (hlat == 3 && trd >= 5) {
            flc = 0.3;

        }
        //
        if (hlat == 2 && trd == 2) {
            flc = 2.4;

        }
        if (hlat == 2 && trd == 3) {
            flc = 1.6;

        }
        if (hlat == 2 && trd == 4) {
            flc = 0.8;

        }
        if (hlat == 2 && trd >= 5) {
            flc = 0.4;

        }
        //1
        if (hlat == 1 && trd == 2) {
            flc = 3;

        }
        if (hlat == 1 && trd == 3) {
            flc = 2;

        }
        if (hlat == 1 && trd == 4) {
            flc = 1;

        }
        if (hlat == 1 && trd >= 5) {
            flc = 0.5;

        }
        //0
        if (hlat == 0 && trd == 2) {
            flc = 3.6;

        }
        if (hlat == 0 && trd == 3) {
            flc = 2.4;

        }
        if (hlat == 0 && trd == 4) {
            flc = 1.2;

        }
        if (hlat == 0 && trd >= 5) {
            flc = 0.6;

        }
        console.log("flc: ", flc)
            //1. tinh toan toc do dong
        if (fsss.length == 0) {
            var ffc = 75.4 - flw - flc - 3.22 * Math.pow(trd, 0.84);

            
            var id = document.getElementById('kq')
            id.innerHTML = ffc, "mi/h";
            //2. lua chon duong cong\
            document.getElementById('dc1').style.display = 'block';
            //
            if (72.5 <= ffc & ffc < 77.5) {
                ffs = 75;
            }
            if (67.5 <= ffc & ffc < 72.5) {
                ffs = 70;
            }
            if (62.5 <= ffc & ffc < 67.5) {
                ffs = 65;
            }
            if (57.5 <= ffc & ffc < 62.5) {
                ffs = 60;
            }
            if (52.5 <= ffc & ffc < 57.5) {
                ffs = 55;
            }
        } else {
            ffs = fsss;
        }
        console.log("ffs", ffs)
        var dc = document.getElementById('dc')
        dc.innerHTML = ffs;
        // xac dinh so luong lan xe 
        var db = document.getElementById('db')
        var nui = document.getElementById('nui')
        var doi = document.getElementById('doi')
        var et
        var er

        if (db.checked == true) {
            et = 1.5
            er = 1.2


        }
        if (doi.checked == true) {
            et = 2.5
            er = 2.0
        }
        if (nui.checked == true) {
            et = 4.5
            er = 4.0
        }
        console.log("ET", et)
        console.log("ER", er)
            // tinh toan
        document.getElementById('fhv1').style.display = 'block';

        var pt = document.getElementById('xetai').value / 100
        var pr = document.getElementById('xedulich').value / 100

        var fhv = 1 / (1 + pt * (et - 1) + pr * (er - 1))
        var kqfhv = document.getElementById('fhv');
        kqfhv.innerHTML = fhv;
        // chia truong hop 
        var a = document.getElementById('A');
        var b = document.getElementById('B');
        var c = document.getElementById('C');
        var d = document.getElementById('D');
        var e = document.getElementById('E');
        var msfi
        if (a.checked | b.checked | c.checked | d.checked | e.checked == true) {


            // A
            if (ffs == 75 & a.checked == true) {
                msfi = 820;
            }
            if (ffs == 70 & a.checked == true) {
                msfi = 770;
            }
            if (ffs == 65 & a.checked == true) {
                msfi = 710;
            }
            if (ffs == 60 & a.checked == true) {
                msfi = 660;
            }
            if (ffs == 55 & a.checked == true) {
                msfi = 600;
            }
            // B 
            if (ffs == 75 & b.checked == true) {
                msfi = 1310;
            }
            if (ffs == 70 & b.checked == true) {
                msfi = 1250;
            }
            if (ffs == 65 & b.checked == true) {
                msfi = 1170;
            }
            if (ffs == 60 & b.checked == true) {
                msfi = 1080;
            }
            if (ffs == 55 & b.checked == true) {
                msfi = 990;
            }
            //c
            if (ffs == 75 & c.checked == true) {
                msfi = 1750;
            }
            if (ffs == 70 & c.checked == true) {
                msfi = 1690;
            }
            if (ffs == 65 & c.checked == true) {
                msfi = 1630;
            }
            if (ffs == 60 & c.checked == true) {
                msfi = 1560;
            }
            if (ffs == 55 & c.checked == true) {
                msfi = 1430;
            }
            //d
            if (ffs == 75 & d.checked == true) {
                msfi = 2210;
            }
            if (ffs == 70 & d.checked == true) {
                msfi = 2080;
            }
            if (ffs == 65 & d.checked == true) {
                msfi = 2030;
            }
            if (ffs == 60 & d.checked == true) {
                msfi = 2010;
            }
            if (ffs == 55 & d.checked == true) {
                msfi = 1900;
            }
            //e
            if (ffs == 75 & e.checked == true) {
                msfi = 2400;
            }
            if (ffs == 70 & e.checked == true) {
                msfi = 2400;
            }
            if (ffs == 65 & e.checked == true) {
                msfi = 2350;
            }
            if (ffs == 60 & e.checked == true) {
                msfi = 2300;
            }
            if (ffs == 55 & e.checked == true) {
                msfi = 2250;
            }
        } else {
            // A
            if (ffs == 75) {
                msfi = 820;
            }
            if (ffs == 70) {
                msfi = 770;
            }
            if (ffs == 65) {
                msfi = 710;
            }
            if (ffs == 60) {
                msfi = 660;
            }
            if (ffs == 55) {
                msfi = 600;
            }
            // B 
            if (ffs == 75) {
                msfi = 1310;
            }
            if (ffs == 70) {
                msfi = 1250;
            }
            if (ffs == 65) {
                msfi = 1170;
            }
            if (ffs == 60) {
                msfi = 1080;
            }
            if (ffs == 55) {
                msfi = 990;
            }
            //c
            if (ffs == 75) {
                msfi = 1750;
            }
            if (ffs == 70) {
                msfi = 1690;
            }
            if (ffs == 65) {
                msfi = 1630;
            }
            if (ffs == 60) {
                msfi = 1560;
            }
            if (ffs == 55) {
                msfi = 1430;
            }
            //d
            if (ffs == 75) {
                msfi = 2210;
            }
            if (ffs == 70) {
                msfi = 2080;
            }
            if (ffs == 65) {
                msfi = 2030;
            }
            if (ffs == 60) {
                msfi = 2010;
            }
            if (ffs == 55) {
                msfi = 1900;
            }
            //e
            if (ffs == 75) {
                msfi = 2400;
            }
            if (ffs == 70) {
                msfi = 2400;
            }
            if (ffs == 65) {
                msfi = 2350;
            }
            if (ffs == 60) {
                msfi = 2300;
            }
            if (ffs == 55) {
                msfi = 2250;
            }


        }



        // tinh n
        console.log("msfi: ", msfi)
        if (N.length == 0) {
            var n = ll / (msfi * phf * fhv * 1);
            var kqn = document.getElementById('kqn');
            kqn.innerHTML = n;

            //muc phuc vu
            var mpv = document.getElementById('mpv')
            if (a.checked == true) {
                mpv.innerText = "A"

            }
            if (b.checked == true) {
                mpv.innerText = "B"

            }
            if (c.checked == true) {
                mpv.innerText = "C"

            }
            if (d.checked == true) {
                mpv.innerText = "D"

            }
            if (e.checked == true) {
                mpv.innerText = "E"

            }
            var lamtron = document.getElementById('lamtron');
            var caotoc = document.getElementById('caotoc');

            lamtron.innerHTML = Math.ceil(n)
            caotoc.innerText = Math.ceil(n) * 2;
            console.log("MSFI", msfi)
        } else {
            n = N
        }
        //5
        document.getElementById('b5').style.display = "block"
        var vp = ll / (phf * Math.ceil(n) * fhv * 1)
        var vptl = lltl / (phf * Math.ceil(n) * fhv * 1)
        var kqvptl = document.getElementById('vptl')
        var kqvp = document.getElementById('vp')
        kqvp.innerHTML = vp
        kqvptl.innerHTML = vptl
            //tinh s
        var congthuc = document.getElementById('congthuc')
        var kqs = document.getElementById('kqcs')
        var kqcs2 = document.getElementById('kqcs2')
        var svd5 = document.getElementById('svd5')
        var s
        var stl
        
        if (ffs == 75) {
            s = 75 - 0.00001107 * Math.pow((vp - 1000), 2)
            stl = 75 - 0.00001107 * Math.pow((vptl - 1000), 2)
            
            congthuc.innerHTML = 'S = 75 - 0.00001107*(Vp-1000)^2 = '
            



        }
        if (ffs == 70) {
            s = 70 - 0.00001160 * Math.pow((vp - 1200), 2)
            stl = 70 - 0.00001160 * Math.pow((vptl - 1200), 2)
            
            congthuc.innerHTML = 'S = 70 - 0.00001160*(Vp-1200)^2 = '
            

        }
        if (ffs == 65) {
            s = 65 - 0.00001418 * Math.pow((vp - 1400), 2)
            stl = 65 - 0.00001418 * Math.pow((vptl - 1400), 2)
            
            congthuc.innerHTML = 'S = 65 - 0.00001418*(Vp-1400)^2 = '
            

        }
        if (ffs == 60) {
            s = 60 - 0.00001816 * Math.pow((vp - 1600), 2)
            stl = 60 - 0.00001816 * Math.pow((vptl - 1600), 2)
            
            congthuc.innerHTML = 'S = 75 - 0.00001816*(Vp-1600)^2 = '
            


        }
        if (ffs == 55) {
            s = 55 - 0.00002469 * Math.pow((vp - 1800), 2)
            stl = 55 - 0.00002469 * Math.pow((vptl - 1800), 2)
            

            congthuc.innerHTML = 'S = 75 - 0.00002469*(Vp-1800)^2 = '
            


        }
        kqs.innerHTML = s + " mi/h"
        kqcs2.innerHTML = stl + " mi/h" + " (tương lai)"
        

        console.log("ket qua s", s)
        var mdd = document.getElementById('mdd')
        var mddtl = document.getElementById('mddtl')
        var d = vp / s
        var dtl = vptl / stl;
        mddtl.innerHTML = dtl;
        mdd.innerHTML = d;
        console.log("Mật độ D: ", d)
        console.log("Mật độ D: ", dtl)
            // 6 chọn mức phục vụ 
        var mpv1 = document.getElementById('mpv1')
        var database = firebase.database();

        var A = 1;
        var B = 2;
        var C = 3;
        var D = 4;
        var E = 5;
        var F = 6

        if (d <= 11) {
            console.log("A")
            mpv1.innerHTML = "LOS A (<=11)";
            firebase.database().ref().child("MPV").set(A);

        }
        if (11 < d & d <= 18) {
            console.log("B")
            mpv1.innerHTML = "LO B (>11÷18)"
             firebase.database().ref().child("MPV").set(B);

        }
        if (18 < d & d <= 26) {
            console.log("C")
            mpv1.innerHTML = "LOS C (>18÷26)"
            firebase.database().ref().child("MPV").set(C);

        }
        if (26 < d & d <= 35) {
            console.log("D")
            mpv1.innerText = "LOS D (>26÷35)"
            firebase.database().ref().child("MPV").set(D);

        }
        if (35 < d & d <= 45) {
            console.log("E")
            mpv1.innerHTML = "LOS E (>35÷45)"
            firebase.database().ref().child("MPV").set(E);

        }
        if (d > 45) {
            console.log("F")
            mpv1.innerHTML = "LOS F (>45)"
            firebase.database().ref().child("MPV").set(F);

        }
        //khi nao duong se dat kha nag thong qua 
        var sfe = msfi * n * fhv * 1
        var kqfs = document.getElementById('kqsf')
        kqfs.innerHTML = sfe;
        var sv = sfe * phf
        var kqsv = document.getElementById('kqsv')
        kqsv.innerHTML = sv;
        var dudoan = Math.log(sv / lltl) / Math.log(1.04)
        var kqdd = document.getElementById('dudoan')
        kqdd.innerHTML = dudoan;
        // vi du 4
        var ET = document.getElementById('ETld').value
        var ETXD = document.getElementById('ETxd').value
        var ER = document.getElementById('ERld').value
        var ERxd = document.getElementById('ERxd ')
        var fhvld1 = document.getElementById('fhvld1')
        var fhvxd = document.getElementById('fhvxd1')

        ERxd = 1.2
            // hệ số điều chỉnh xe tai nặng đc tính bằng công thức 3.3
        var fhvld = 1 / (1 + pt * (ET - 1) + pr * (ER - 1))
        var fhxd = 1 / (1 + pt * (ETXD - 1) + pr * (ERxd - 1))
        fhvld1.innerHTML = fhvld
        fhvxd.innerHTML = fhxd
        console.log("ket qua fhvxd: ", fhxd)
        console.log('ket qua fhvld: ', fhvld)
        var vpld = ll / (phf * N * fhvld * 0.95) // 0.95

        var vpxd = ll / (phf * N * fhxd * 0.95)
        var vpd = document.getElementById('vpld')
        var vpxd1 = document.getElementById('vpxd')
        vpxd1.innerHTML = vpxd;
        vpd.innerHTML = vpld
        console.log("Ket qua vpld: ", vpld);
        console.log("Ket qua vpxd: ", vpxd);

        console.log("N: ", N)
        var ffsld = document.getElementById('ffsld').value
        var ffsxd = document.getElementById('ffsxd').value
        var ctlendoc = document.getElementById('doanxelendoc')
        var ctxd = document.getElementById('doanxexuongdoc')
        var kqxld = document.getElementById('kqxld')
        var kqxxd = document.getElementById('kqxxd')
        var sxd
        var sld
            // xe len doc 
        if (ffsld == 75) {
            sld = 75 - 0.00001107 * Math.pow((vpld - 1000), 2)

            ctlendoc.innerHTML = 'S = 75 - 0.00001107*(Vp-1000)^2 = '
            kqxld.innerHTML = sld + " mi/h";




        }
        if (ffsld == 70) {
            sld = 70 - 0.00001160 * Math.pow((vpld - 1200), 2)

            ctlendoc.innerHTML = 'S = 70 - 0.00001160*(Vp-1200)^2 = '
            kqxld.innerHTML = sld + " mi/h";



        }
        if (ffsld == 65) {
            sld = 65 - 0.00001418 * Math.pow((vpld - 1400), 2)

            ctlendoc.innerHTML = 'S = 65 - 0.00001418*(Vp-1400)^2 = '
            kqxld.innerHTML = sld + " mi/h";



        }
        if (ffsld == 60) {
            sld = 60 - 0.00001816 * Math.pow((vpld - 1600), 2)

            ctlendoc.innerHTML = 'S = 75 - 0.00001816*(Vp-1600)^2 = '
            kqxld.innerHTML = sld + " mi/h";



        }
        if (ffsld == 55) {
            sld = 55 - 0.00002469 * Math.pow((vpld - 1800), 2)

            ctlendoc.innerHTML = 'S = 75 - 0.00002469*(Vp-1800)^2 = '
            kqxld.innerHTML = sld + " mi/h";



        }
        // xuong doc 
        if (ffsxd == 75) {
            sxd = 75 - 0.00001107 * Math.pow((vpxd - 1000), 2)

            ctxd.innerHTML = 'S = 75 - 0.00001107*(Vp-1000)^2 = '
            kqxxd.innerHTML = sxd + " mi/h";



        }
        if (ffsxd == 70) {
            sxd = 70 - 0.00001160 * Math.pow((vpxd - 1200), 2)

            ctxd.innerHTML = 'S = 70 - 0.00001160*(Vp-1200)^2 = '
            kqxxd.innerHTML = sxd + " mi/h";


        }
        if (ffsxd == 65) {
            sxd = 65 - 0.00001418 * Math.pow((vpxd - 1400), 2)

            ctxd.innerHTML = 'S = 65 - 0.00001418*(Vp-1400)^2 = '
            kqxxd.innerHTML = sxd + " mi/h";


        }
        if (ffsxd == 60) {
            sxd = 60 - 0.00001816 * Math.pow((vpxd - 1600), 2)

            ctxd.innerHTML = 'S = 75 - 0.00001816*(Vp-1600)^2 = '
            kqxxd.innerHTML = sxd + " mi/h";


        }
        if (ffsxd == 55) {
            sxd = 55 - 0.00002469 * Math.pow((vpxd - 1800), 2)

            ctxd.innerHTML = 'S = 75 - 0.00002469*(Vp-1800)^2 = '
            kqxxd.innerHTML = sxd + " mi/h";


        }
        var dlendoc = vpld / sld;
        var dxuongdoc = vpxd / sxd
        var lendoc = document.getElementById('mdld')
        var xuongdoc = document.getElementById('mdxd')
        lendoc.innerHTML = dlendoc + " xcqđ/h/làn"
        xuongdoc.innerHTML = dxuongdoc + " xcqđ/h/làn"
        var mpvld = document.getElementById('mpvld')
        var mpvxd = document.getElementById('mpvxd')

        // chọn mức phục vụ

        if (dlendoc <= 11) {
            console.log("A")
            mpvld.innerHTML = "LOS A (<=11)";

        }
        if (11 < dlendoc & dlendoc <= 18) {
            console.log("B")
            mpvld.innerHTML = "LO B (>11÷18)"

        }
        if (18 < dlendoc & dlendoc <= 26) {
            console.log("C")
            mpvld.innerHTML = "LOS C (>18÷26)"

        }
        if (26 < dlendoc & dlendoc <= 35) {
            console.log("D")
            mpvld.innerText = "LOS D (>26÷35)"

        }
        if (35 < dlendoc & dlendoc <= 45) {
            console.log("E")
            mpvld.innerHTML = "LOS E (>35÷45)"

        }
        if (dlendoc > 45) {
            console.log("F")
            mpvld.innerHTML = "LOS F (>45)"

        }
        // xuong doc 
        if (dxuongdoc <= 11) {
            console.log("A")
            mpvxd.innerHTML = "LOS A (<=11)";

        }
        if (11 < dxuongdoc & dxuongdoc <= 18) {
            console.log("B")
            mpvxd.innerHTML = "LO B (>11÷18)"

        }
        if (18 < dxuongdoc & dxuongdoc <= 26) {
            console.log("C")
            mpvxd.innerHTML = "LOS C (>18÷26)"

        }
        if (26 < dxuongdoc & dxuongdoc <= 35) {
            console.log("D")
            mpvxd.innerText = "LOS D (>26÷35)"

        }
        if (35 < dxuongdoc & dxuongdoc <= 45) {
            console.log("E")
            mpvxd.innerHTML = "LOS E (>35÷45)"

        }
        if (dxuongdoc > 45) {
            console.log("F")
            mpvxd.innerHTML = "LOS F (>45)"

        }

        // vi du 5 
        var k = document.getElementById('TL').value
        var AADT = document.getElementById('AADT').value
        var V  = AADT*k*0.55;
        document.getElementById('kqV').innerHTML = V + " xe/h";
        document.getElementById('ffs1').innerHTML =fsss  + " mi/h"
        console.log("kdjsdsjdksjds",fsss)


        console.log("vidu5 fhv",fhv)
        document.getElementById('kqfhv1').innerHTML=fhv

        var Nvd5 = V/(msfi*phf*fhv*1)
        console.log("Số làn xe: ", Nvd5)
        console.log("PHF ", phf)
        console.log("msfi: ", msfi)
        document.getElementById('solanxeN').innerHTML=`${Nvd5} làn`;
        document.getElementById('lamtron1').innerHTML="Số làn xe cần được làm tròn "+ Nvd5 + " Làm tròn thành : "+ Math.ceil(Nvd5) + " làn";
        var vpvd5 = V/(phf*Math.ceil(Nvd5)*fhv*1)
        console.log('Vp ví dụ 5:', vpvd5)
        
        document.getElementById('kqvp1').innerHTML= vpvd5 + " xcqd/h/làn"


        var kqsvd5


        if (ffs == 75) {
            
            
            kqsvd5 = 75 - 0.00001107 * Math.pow((vpvd5 - 1000), 2)

            
            svd5.innerHTML = 'S = 75 - 0.00001107*(Vp-1000)^2 = '



        }
        if (ffs == 70) {
            
            
            kqsvd5 = 70 - 0.00001160 * Math.pow((vpvd5 - 1200), 2)

            
            svd5.innerHTML = 'S = 70 - 0.00001160*(Vp-1200)^2 = '

        }
        if (ffs == 65) {
            
            
            kqsvd5 = 65 - 0.00001418 * Math.pow((vpvd5 - 1400), 2)

            
            svd5.innerHTML = 'S = 65 - 0.00001418*(Vp-1400)^2 = '

        }
        if (ffs == 60) {
            
            
            kqsvd5 = 60 - 0.00001816 * Math.pow((vpvd5 - 1600), 2)

            
            svd5.innerHTML = 'S = 75 - 0.00001816*(Vp-1600)^2 = '


        }
        if (ffs == 55) {
            
            
            kqsvd5 = 55 - 0.00002469 * Math.pow((vpvd5 - 1800), 2)


            
            svd5.innerHTML = 'S = 75 - 0.00002469*(Vp-1800)^2 = '


        }
      
        document.getElementById('kqvd5').innerHTML = kqsvd5 + " mi/h"
      
        console.log('test',kqsvd5)

        var kqd5 = vpvd5/kqsvd5
         
        document.getElementById('Dvd5').innerHTML = vpvd5/kqsvd5 +" xcqd/h/làn"
        var mpvvd5 = document.getElementById('mpvvd5')
        // mức phục vụ 
        if (kqd5 <= 11) {
            console.log("A")
            mpvvd5.innerHTML = "LOS A (<=11)";

        }
        if (11 < kqd5 & kqd5 <= 18) {
            console.log("B")
            mpvvd5.innerHTML = "LO B (>11÷18)"

        }
        if (18 < kqd5 & kqd5 <= 26) {
            console.log("C")
            mpvvd5.innerHTML = "LOS C (>18÷26)"

        }
        if (26 < kqd5 & kqd5 <= 35) {
            console.log("D")
            mpvvd5.innerText = "LOS D (>26÷35)"

        }
        if (35 < kqd5 & kqd5 <= 45) {
            console.log("E")
            mpvvd5.innerHTML = "LOS E (>35÷45)"

        }
        if (kqd5 > 45) {
            console.log("F")
            mpvvd5.innerHTML = "LOS F (>45)"

        }
















    }


    function tong(pt, pr) {

        var dodaidoc1 = document.getElementById('do_dai_doc_1').value / 5280
        var dodaidoc2 = document.getElementById('do_dai_doc_2').value / 5280
        var tesst = document.getElementById('tesst')
            // tinh ra ket qua ngay onkeyup

        var thdoc = dodaidoc1 + dodaidoc2
        var result = parseFloat(dodaidoc1) + parseFloat(dodaidoc2);

        tesst.innerHTML = `Tổng độ dài = ${result} mi`
        console.log("Do dai doc : ", thdoc)
    }