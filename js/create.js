
var elems = document.body.getElementsByTagName("a");
var check = true;
if(check === true) {

  for(var i = 0; i < elems.length; i++)
                {
                    elems[i].setAttribute("onclick",'getdata()');
                }

}
                
