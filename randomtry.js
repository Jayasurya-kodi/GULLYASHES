score = 0;
u = 0;
w = 0;
j = 0;
k = 0;
scor = 0;
u1 = 0;
w1 = 0;
j1 = 0;
k1 = 0;

var target;
var totalw;
var totalo;
z = "";
b = "";
n1 = "";
n2 = "";
document.getElementById('body').style.zoom="67%"
document.getElementById('start').disabled = true;
document.getElementById('pla').disabled = true;
document.getElementById('star').disabled = true;
document.getElementById('play').disabled = true;
$(document).ready(function () {
     $("#play").click(function () {
          $("#displayrun").hide(-200);
     });
     $("#play").click(function () {
          $("#displayrun").show(200);
     });
});
$(document).ready(function () {
     $("#pla").click(function () {
          $("#displarun").hide(-200);
     });
     $("#pla").click(function () {
          $("#displarun").show(200);
     });
});
function func() {
     a = ['RO', '1+RO', '2+RO', '3+RO',0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 'W', 'W', 'W', 'W', 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 'W', 'W', 'W', 'W', 'W', 'W', 'W', 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 'W', 'W', 'W', 'W', 'W', 'W', 'W', 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 'W', 'W', 'W', 'W', 'W', 'W', 'W', 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 'W', 'W', 'W', 'W', 'W', 'W', 'W', 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 'Wd', 'Nb6', 'Wd1', 'Wd2', 'Wd3', 'Wd4', 'Nb+RO', 'Nb', 'Nb1', 'Nb2', 'Nb3', 'Nb4', 'Nb+W', 'W', 'Nb1+RO', 'Nb2+RO', 'Wd+St', 'Wd+RO', 'Wd1+RO', 'Wd2+RO', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'];
     var o = 0;
     document.getElementById('start').disabled = true;
     document.getElementById('pla').disabled = true;
     document.getElementById('star').disabled = true;
     c = a[Math.floor(Math.random() * a.length)];

     document.getElementById('displayrun').value = c;
     b += c + " ";

     //    if((c=='Nb+RO' || c=='Nb' || c=='Nb1' || c=='Nb2' || c=='Nb3' || c=='Nb4' || c=='Nb+W' || c=='Nb6' || c=='Nb1+RO' || c=='Nb2+RO') ||((c=='Wd+RO' || c=='Wd' || c=='Wd1' || c=='Wd2' || c=='Wd3' || c=='Wd4' || c=='Wd+St' || c=='Wd1+RO' || c=='Wd2+RO' || c=='Wd+RO' )&& n1=='Nb')){
     //        alert("FREE HIT ")
     //    }

     if (c == 0 || c == 1 || c == 2 || c == 3 || c == 4 || c == 6 || c == 'W' || c=='RO' || c=='1+RO' || c=='2+RO' || c=='3+RO') {
          if (c != 'W') {
               n1 = "";
          }
          console.log('between 1-6 and W');
          u += 1;
          j += 0.1;
          k += 1;
          if (k % 6 == 0) {
               j = k / 6.0;
               document.getElementById('play').disabled = true;

               document.getElementById('start').disabled = false;
          }
          j = Number(j.toFixed(1));
          document.getElementById('overs').value = j;
     }
     document.getElementById('score').value = b;

     if (c == 'Wd' || c == 'Nb' || c == 'Nb+W') {
          if (n1 == "" && (c == "Nb" || c == "Nb+W")) {
               n1 = "Nb"
               c = 1
          }
          else if (n1 == "" && c == "Wd") {
               c = 1
          }
          else if (n1 == "Nb" && (c == "Nb" || c == "Wd" || c == "Nb+W")) {
               n1 = "Nb"
               c = 1
          }
          console.log('inside 1');
     } else if (c == 'Wd1' || c == 'Nb1') {

          if (n1 == "" && (c == "Nb1")) {
               n1 = "Nb"
               c = 2
          }
          else if (n1 == "" && c == "Wd1") {
               c = 2
          }
          else if (n1 == "Nb" && (c == "Nb1" || c == "Wd")) {
               n1 = "Nb"
               c = 2
          }

          console.log('inside 2');

     } else if (c == 'Wd2' || c == 'Nb2') {

          if (n1 == "" && (c == "Nb2")) {
               n1 = "Nb"
               c = 3
          }
          else if (n1 == "" && c == "Wd2") {
               c = 3
          }
          else if (n1 == "Nb" && (c == "Nb2" || c == "Wd2")) {
               n1 = "Nb"
               c = 3
          }
          console.log('inside 3');

     } else if (c == 'Wd3' || c == 'Nb3') {
          if (n1 == "" && (c == "Nb3")) {
               n1 = "Nb"
               c = 4
          }
          else if (n1 == "" && c == "Wd3") {
               c = 4
          }
          else if (n1 == "Nb" && (c == "Nb3" || c == "Wd3")) {
               n1 = "Nb"
               c = 4
          }
          console.log('inside 4');
     } else if (c == 'Wd4' || c == 'Nb4') {
          if (n1 == "" && (c == "Nb4")) {
               n1 = "Nb"
               c = 5
          }
          else if (n1 == "" && c == "Wd4") {
               c = 5
          }
          else if (n1 == "Nb" && (c == "Nb4" || c == "Wd4")) {
               n1 = "Nb"
               c = 5
          }

          console.log('inside 5');

     } else if (c == 'Nb6') {

          n1 = "Nb"
          c = 7

     } else if (c == 'Wd+St' || c == 'Nb+RO' || c == 'Wd+RO') {
          if (n1 == "" && (c == "Nb+RO")) {
               n1 = "Nb"
               c = 1
               w += 1
          }
          else if (n1 == "" && (c == "Wd+St" || c == "Wd+RO")) {
               c = 1
               w += 1
          }
          else if (n1 == "Nb" && (c == "Nb+RO" || c == "Wd+St" || c == "Wd+RO")) {
               n1 = "Nb"
               c = 1
               w += 1
          }
          console.log('inside 7');

     } else if (c == 'Nb1+RO' || c == 'Wd1+RO') {
          if (n1 == "" && (c == "Nb1+RO")) {
               n1 = "Nb"
               c = 2
               w += 1
          }
          else if (n1 == "" && c == "Wd1+RO") {
               c = 2
               w += 1
          }
          else if (n1 == "Nb" && (c == "Nb1+RO" || c == "Wd1+RO")) {
               n1 = "Nb"
               c = 2
               w += 1
          }
          console.log('inside 8');

     } else if (c == 'Nb2+RO' || c == 'Wd2+RO') {
          if (n1 == "" && (c == "Nb2+RO")) {
               n1 = "Nb"
               c = 3
               w += 1
          }
          else if (n1 == "" && c == "Wd2+RO") {
               c = 3
               w += 1
          }
          else if (n1 == "Nb" && (c == "Nb2+RO" || c == "Wd2+RO")) {
               n1 = "Nb"
               c = 3
               w += 1
          }

          console.log('inside 9');

     } else if (c == 'W') {

          console.log('inside 11');
          o = 1;
          c = 0;
          w += 1;
     }
     else if (c == '1+RO') {
          c = 1;
          w += 1;
     } else if (c == '2+RO') {
          c = 2;
          w += 1;
     } else if (c == '3+RO') {
          c = 1;
          w += 1;
     } else if (c == 'RO') {
          c=0;
          w += 1;
     }

     if ((n1 == 'Nb+RO' || n1 == 'Nb' || n1 == 'Nb1' || n1 == 'Nb2' || n1 == 'Nb3' || n1 == 'Nb4' || n1 == 'Nb+W' || n1 == 'Nb6' || n1 == 'Nb1+RO' || n1 == 'Nb2+RO') && o == 1) {
          w -= 1;
          n1 = "";
     }

     score = score + c;
     target = score + 1;
     document.getElementById('scard').value = score + '-' + w;
     if (w == totalw || j == totalo) {
          document.getElementById('play').disabled = true;
          document.getElementById('start').disabled = true;
          document.getElementById('declare').innerHTML = '*ENGLAND HAS SET THE TOTAL TARGET OF ' + target + " FOR AUSTRALIA*"
          document.getElementById('innings').innerHTML = 'AUSTRALIA NEEDS TO CHASE THE TARGET OF ' + target;
          document.getElementById('message').innerHTML = 'DECENT TARGET';
          document.getElementById('pla').disabled = false;


     }
     document.getElementById('chase').value = target;
}


function func1() {
     document.getElementById('start').disabled = true;
     document.getElementById('play').disabled = false;
     document.getElementById('score').value = '';
     b = ' ';
}
function play2() {

     document.getElementById('play').disabled = false;

     document.getElementById('details').innerHTML = '2 OVERS MATCH -- 3 WICKETS (MAX)';
     document.getElementById('play10').disabled = true;
     document.getElementById('play5').disabled = true;
     document.getElementById('play2').disabled = true;
     document.getElementById('play2').style.backgroundColor = 'red';
     totalw = 3;
     totalo = 2;
}
function play5() {

     document.getElementById('play').disabled = false;
     document.getElementById('details').innerHTML = '5 OVERS MATCH -- 5 WICKETS (MAX)';
     document.getElementById('play2').disabled = true;
     document.getElementById('play10').disabled = true;
     document.getElementById('play5').disabled = true;
     document.getElementById('play5').style.backgroundColor = 'red';
     totalw = 5;
     totalo = 5;
}
function play10() {

     document.getElementById('play').disabled = false;
     document.getElementById('details').innerHTML = '10 OVERS MATCH -- 10 WICKETS (MAX)';
     document.getElementById('play5').disabled = true;
     document.getElementById('play2').disabled = true;
     document.getElementById('play10').disabled = true;
     document.getElementById('play10').style.backgroundColor = 'red';
     totalw = 10;
     totalo = 10;
}
function fun() {
     a1 = ['RO', '1+RO', '2+RO', '3+RO', 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 'W', 'W', 'W', 'W', 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 'W', 'W', 'W', 'W', 'W', 'W', 'W', 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 'W', 'W', 'W', 'W', 'W', 'W', 'W', 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 'W', 'W', 'W', 'W', 'W', 'W', 'W', 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 'W', 'W', 'W', 'W', 'W', 'W', 'W', 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 4, 6, 'Wd', 'Nb6', 'Wd1', 'Wd2', 'Wd3', 'Wd4', 'Nb+RO', 'Nb', 'Nb1', 'Nb2', 'Nb3', 'Nb4', 'Nb+W', 'W', 'Nb1+RO', 'Nb2+RO', 'Wd+St', 'Wd+RO', 'Wd1+RO', 'Wd2+RO', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'];
     var o1 = 0;

     document.getElementById('star').disabled = true;
     c = a1[Math.floor(Math.random() * a.length)];
     document.getElementById('displarun').value = c;
     z += c + " ";
     //    if((c=='Nb+RO' || c=='Nb' || c=='Nb1' || c=='Nb2' || c=='Nb3' || c=='Nb4' || c=='Nb+W' || c=='Nb6' || c=='Nb1+RO' || c=='Nb2+RO') ||((c=='Wd+RO' || c=='Wd' || c=='Wd1' || c=='Wd2' || c=='Wd3' || c=='Wd4' || c=='Wd+St' || c=='Wd1+RO' || c=='Wd2+RO' || c=='Wd+RO' ) && n2=='Nb')){
     //        alert("FREE HIT ")
     //    }
     if (c == 0 || c == 1 || c == 2 || c == 3 || c == 4 || c == 6 || c == 'W' || c=='RO' || c=='1+RO' || c=='2+RO' || c=='3+RO') {
          if (c != 'W') {
               n2 = "";
          }
          u1 += 1;
          j1 += 0.1;
          k1 += 1;
          if (k1 % 6 == 0) {
               j1 = k1 / 6;
               document.getElementById('pla').disabled = true;
               document.getElementById('star').disabled = false;
          }
          j1 = Number(j1.toFixed(1));
          document.getElementById('over').value = j1;
     }
     document.getElementById('scor').value = z;
     if (c == 'Wd' || c == 'Nb' || c == 'Nb+W') {
          if (n2 == "" && (c == "Nb" || c == "Nb+W")) {
               n2 = "Nb"
               c = 1
          }
          else if (n2 == "" && c == "Wd") {
               c = 1
          }
          else if (n2 == "Nb" && (c == "Nb" || c == "Wd" || c == "Nb+W")) {
               n2 = "Nb"
               c = 1
          }
          console.log('inside 1');
     } else if (c == 'Wd1' || c == 'Nb1') {

          if (n2 == "" && (c == "Nb1")) {
               n2 = "Nb"
               c = 2
          }
          else if (n2 == "" && c == "Wd1") {
               c = 2
          }
          else if (n2 == "Nb" && (c == "Nb1" || c == "Wd")) {
               n2 = "Nb"
               c = 2
          }

          console.log('inside 2');

     } else if (c == 'Wd2' || c == 'Nb2') {

          if (n2 == "" && (c == "Nb2")) {
               n2 = "Nb"
               c = 3
          }
          else if (n2 == "" && c == "Wd2") {
               c = 3
          }
          else if (n2 == "Nb" && (c == "Nb2" || c == "Wd2")) {
               n2 = "Nb"
               c = 3
          }
          console.log('inside 3');

     } else if (c == 'Wd3' || c == 'Nb3') {
          if (n2 == "" && (c == "Nb3")) {
               n2 = "Nb"
               c = 4
          }
          else if (n2 == "" && c == "Wd3") {
               c = 4
          }
          else if (n2 == "Nb" && (c == "Nb3" || c == "Wd3")) {
               n2 = "Nb"
               c = 4
          }
          console.log('inside 4');
     } else if (c == 'Wd4' || c == 'Nb4') {
          if (n2 == "" && (c == "Nb4")) {
               n2 = "Nb"
               c = 5
          }
          else if (n2 == "" && c == "Wd4") {
               c = 5
          }
          else if (n2 == "Nb" && (c == "Nb4" || c == "Wd4")) {
               n2 = "Nb"
               c = 5
          }

          console.log('inside 5');

     } else if (c == 'Nb6') {
          n2 = "Nb"
          c = 7
     }

     else if (c == 'Wd+St' || c == 'Nb+RO' || c == 'Wd+RO') {
          if (n2 == "" && (c == "Nb+RO")) {
               n2 = "Nb"
               c = 1
               w1 += 1
          }
          else if (n2 == "" && (c == "Wd+St" || c == "Wd+RO")) {
               c = 1
               w1 += 1
          }
          else if (n2 == "Nb" && (c == "Nb+RO" || c == "Wd+St" || C == "Wd+RO")) {
               n2 = "Nb"
               c = 1
               w1 += 1
          }
          console.log('inside 7');

     } else if (c == 'Nb1+RO' || c == 'Wd1+RO') {
          if (n2 == "" && (c == "Nb1+RO")) {
               n2 = "Nb"
               c = 2
               w1 += 1
          }
          else if (n2 == "" && c == "Wd1+RO") {
               c = 2
               w1 += 1
          }
          else if (n2 == "Nb" && (c == "Nb1+RO" || c == "Wd1+RO")) {
               n2 = "Nb"
               c = 2
               w1 += 1
          }
          console.log('inside 8');

     } else if (c == 'Nb2+RO' || c == 'Wd2+RO') {
          if (n2 == "" && (c == "Nb2+RO")) {
               n2 = "Nb"
               c = 3
               w1 += 1
          }
          else if (n2 == "" && c == "Wd2+RO") {
               c = 3
               w1 += 1
          }
          else if (n2 == "Nb" && (c == "Nb2+RO" || c == "Wd2+RO")) {
               n2 = "Nb"
               c = 3
               w1 += 1
          }
     } else if (c == 'W') {
          console.log('inside 11');
          o1 = 1;
          c = 0;
          w1 += 1;
     } else if (c == '1+RO') {
          c = 1;
          w1 += 1;
     } else if (c == '2+RO') {
          c = 2;
          w1 += 1;
     } else if (c == '3+RO') {
          c = 1;
          w1 += 1;
     } else if (c == 'RO') {
          c=0;
          w1 += 1;
     }
     if ((n2 == 'Nb+RO' || n2 == 'Nb' || n2 == 'Nb1' || n2 == 'Nb2' || n2 == 'Nb3' || n2 == 'Nb4' || n2 == 'Nb+W' || n2 == 'Nb6' || n2 == 'Nb1+RO' || n2 == 'Nb2+RO') && o1 == 1) {
          w1 -= 1;
          n2 = "";
     }

     scor = scor + c;
     document.getElementById('scar').value = scor + '-' + w1;
     i = target;
     if (w1 == totalw || j1 == totalo) {

          if (scor < target - 1) {
               e = target - scor;
               document.getElementById('inning').innerHTML = 'TEAM ENGLAND WON BY ' + (e - 1) + ' RUN(S)';
               document.getElementById('details').innerHTML='ENGLAND WON THE MATCH';
               document.getElementById('declare').style.backgroundColor = 'white';
               document.getElementById('declare').style.color = 'teal';
               document.getElementById('declare').innerHTML = '*ENGLAND WON THE MATCH BY ' + (e - 1) + ' RUN(S) BY RESTRICTING THE AUSTRALIA TO THE TOTAL ' + scor + '*';
          }
          else if (scor == target - 1) {

               document.getElementById('inning').innerHTML = 'MATCH DRAWN';
               document.getElementById('details').innerHTML = 'SUPER OVER'
               document.getElementById('declare').style.backgroundColor = 'white';
               document.getElementById('declare').style.color = 'teal';
               document.getElementById('declare').innerHTML = '*SCORES ARE LEVELLED. ITS TIME FOR SUPER OVER. ITS GONNA BE SO INTERESTING*  *ONLY 1 OVER AND 1 WICKET IS GIVEN TO EACH TEAM*'
               document.getElementById('play').disabled = false;
               document.getElementById('start').disabled = false;
               document.getElementById('pla').disabled = false;
               document.getElementById('star').disabled = false;
               document.getElementById('chase').value='-';
               
               totalw = 1;
               totalo = 1;
               w1 = 0;
               j1 = 0;
               w = 0;
               j = 0;
               u = 0;
               k = 0;
               u1 = 0;
               k1 = 0;
               z = "";
               target='-';
               b = "";
               n1 = "";
               n2 = "";
               g = 0;
               score=0;
               scor=0;
               document.getElementById('scard').value=score +'-'+ w;
               document.getElementById('scar').value=scor +'-'+ w1;
               document.getElementById('score').value="";
               document.getElementById('scor').value="";
               document.getElementById('message').innerHTML='MAKE A BIG TARGET';
               document.getElementById('innings').innings='MATCH DRAWN';

          }
          document.getElementById('pla').disabled = true;
          document.getElementById('star').disabled = true;

     }
     document.getElementById('chase').value = target - scor;
     if (scor >= i) {
          e = totalw - w1;
          document.getElementById('inning').innerHTML = 'TEAM AUSTRALIA WON WITH ' + e + ' WICKET(S)';
          document.getElementById('details').innerHTML='AUSTRALIA WON THE MATCH';
          document.getElementById('declare').innerHTML = '*AUSTRALIA SUCCESSFULLY CHASED THE TARGET ' + i + ' AND WON THE MATCH WITH ' + e + ' WICKET(S)*'
          document.getElementById('declare').style.backgroundColor = 'white';
          document.getElementById('declare').style.color = 'teal';
          document.getElementById('chase').value = 0;
          document.getElementById('pla').disabled = true;
          document.getElementById('star').disabled = true;
          
     }



}

function fun1() {
     document.getElementById('pla').disabled = false;
     document.getElementById('scor').value = '';
     document.getElementById('star').disabled = true;
     z = ' ';
}

function reset() {
     location.reload();
}
