var table=document.createElement('table');
table.setAttribute('class','table');


var tbody=document.createElement('tbody');



var tr0=document.createElement('tr');
var td0=document.createElement('td');

td0.colSpan=4;
var x = document.createElement("INPUT");
x.setAttribute("type", "text");
x.setAttribute("id", "result");
x.setAttribute("style", "height:100px;font-weight: normal;font-size:100px;background:black;color:white");
x.setAttribute('onkeypress','alertkeychange()');
x.setAttribute('onkeydown','alertkeychange()');
x.setAttribute('class','text-right col-sm-12 col-md-12 col-lg-12');
td0.append(x);
tr0.append(td0);




var tbodytr=document.createElement('tr');
var td1=calc('td','AC');
td1.colSpan=2;
var td3=calc('td','%');
var td4=calc('td','÷');
td1.setAttribute('class','col-sm-6 col-md-6 col-lg-6');
td3.setAttribute('class','col-sm-3 col-md-3 col-lg-3');
td4.setAttribute('class','col-sm-3 col-md-3 col-lg-3');

tbodytr.append(td1,td3,td4);

var tbody1=document.createElement('tbody1');
var tbodytr1=document.createElement('tr');
var td11=calc('td','7')
var td12=calc('td','8')
var td13=calc('td','9')
var td14=calc('td','*')
tbodytr1.append(td11,td12,td13,td14);

var tbody2=document.createElement('tbody2');
var tbodytr2=document.createElement('tr');
var td21=calc('td','4')
var td22=calc('td','5')
var td23=calc('td','6')
var td24=calc('td','-')
tbodytr2.append(td21,td22,td23,td24);

var tbody3=document.createElement('tbody3');
var tbodytr3=document.createElement('tr');
var td31=calc('td','1')
var td32=calc('td','2')
var td33=calc('td','3')
var td34=calc('td','+')
tbodytr3.append(td31,td32,td33,td34);

var tbody4=document.createElement('tbody4');
var tbodytr4=document.createElement('tr');
var td41=calc('td','0')
var td42=calc('td','.')
var td43=cols('td','=')
tbodytr4.append(td41,td42,td43);


tbody.append(tr0,tbodytr,tbodytr1,tbodytr2,tbodytr3,tbodytr4);



table.append(tbody);
document.body.append(table)





function calc(elename,value="") {


    var x = document.createElement("input");
    x.setAttribute("type", "button");
    x.setAttribute("id", value);
    x.setAttribute('class','btn col-sm-12 col-md-12 col-lg-12 col-sm-12');
    x.setAttribute("style", "height:100px;font-weight: normal;font-size:50px;");
   x.value=value;
        x.addEventListener('click',function () {
           
            if(value=='='){
                solve();
            }
            else if(value=='C' || value=='AC'){
                clr();
            }
            else{
                dis(value);
            }
        });

    var td=document.createElement(elename);
    //td.innerHTML=value;
    td.append(x)
    return td;
    
}

function dis(val)
{
    if(document.getElementById("result").value=="Invalid")
    {
        document.getElementById("result").value="";
    }
    document.getElementById("result").value+=val
}
  
//function that evaluates the digit and return result
function solve()
{
    let x = document.getElementById("result").value
    try{
        let y = eval(x)
        document.getElementById("result").value = y
    }
    catch(err){
        console.log(err);
        document.getElementById("result").value = "Invalid";
    }

   
}
  
//function that clear the display
function clr()
{
    document.getElementById("result").value = ""
}


function alertkeychange(){


    var ascicheck=document.getElementById("result").value;

   if(isNaN(ascicheck)){
    alert("Only numbers are allowed");
    clr();
   }
    
}
function cols(elename,value="") {
    
    var td=document.createElement(elename);
    td.colSpan=2;
   // td.innerHTML=value;



    var x = document.createElement("input");
    x.setAttribute("type", "button");
    x.setAttribute('class','btn col-sm-12 col-md-12 col-lg-12 col-sm-12');
    x.setAttribute("style", "height:100px;font-weight: normal;font-size:50px;");
    x.addEventListener('click',function () {
           
        if(value=='='){
            solve();
        }
        else if(value=='C' || value=='AC'){
            clr();
        }
        else{
            dis(value);
        }
    });
   x.value=value;


   td.append(x)




    return td;
    
}