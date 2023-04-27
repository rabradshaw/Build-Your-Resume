/*Name: Rodney Bradshaw
Class: WEB 115
Date: 4/20/2023
*/
document.getElementById("myButton").addEventListener('click',emailValidate );//click event for the button function
  
    function emailValidate (){//email validate
               
var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//to valid email address like @my.waketech.com
email = document.getElementById("email").value;
if(email.match(mailFormat))
{    //input values:  
     //personal info
        fname = document.getElementById("name").value;
        address = document.getElementById("address").value;
        town = document.getElementById("town").value;
        state = document.getElementById("state").value;
        zip = document.getElementById("zip").value;
       email = document.getElementById("email").value;
        tele = document.getElementById("tele").value;
        fb = document.getElementById("fb").value;
        ints = document.getElementById("ints").value;
        tw = document.getElementById("tw").value;
        tt = document.getElementById("tt").value;
        //Skills Set
        skill1 = document.getElementById("skill1").value;
        skill2 = document.getElementById("skill2").value;
        skill3 = document.getElementById("skill3").value;
        skill4 = document.getElementById("skill4").value;

        //Technical skills 
        

            l1 = document.getElementById("html");
           l2 = document.getElementById("php");
            l3 = document.getElementById("css");
             l4 = document.getElementById("javas");
            l5 = document.getElementById("csharp");
        //test for the check boxes
           if (l1.checked == true){
            html = document.getElementById("html").value; 
           }
           else { html = " ";}

           if (l2.checked == true){
            php = document.getElementById("php").value;
           }
           else { php = " ";}

           if (l3.checked == true){
            css = document.getElementById("css").value;           
           }
           else {css = " ";}
           if (l4.checked == true){
            javas = document.getElementById("javas").value;            
           }
           else {javas = " ";}
           if (l5.checked == true){
            csharp = document.getElementById("csharp").value;           
           }
           else {csharp = " ";}


        //Education
        highSch = document.getElementById("highSch").value;
        college = document.getElementById("college").value;
        gradHigh = document.getElementById("gradHigh").value;
        gradCol = document.getElementById("gradCol").value;
        degree = document.getElementById("degree").value;

        //hobbies
        hob1 = document.getElementById("hob1").value;
        hob2 = document.getElementById("hob2").value;
        hob3 = document.getElementById("hob3").value;

        //Most recent work experience
        pl1 = document.getElementById("pl1").value;
        myDate1 = document.getElementById("myDate1").value;
        myDate2 = document.getElementById("myDate2").value;
        jb1 = document.getElementById("jb1").value;

        pl2 = document.getElementById("pl2").value;
        myDate3 = document.getElementById("myDate3").value;
        myDate4 = document.getElementById("myDate4").value;
        jb2 = document.getElementById("jb2").value;

        pl3 = document.getElementById("pl3").value;
        myDate5 = document.getElementById("myDate5").value;
        myDate6 = document.getElementById("myDate6").value;
        jb3 = document.getElementById("jb3").value;
        
        //References
        ref1 = document.getElementById("ref1").value;
        ref2 = document.getElementById("ref2").value;
        ref3 = document.getElementById("ref3").value;
        tel1 = document.getElementById("tel1").value;
        tel2 = document.getElementById("tel2").value;
        tel3 = document.getElementById("tel3").value;
        
           //output values, formatted with css and html:
        myText = ('<!DOCTYPE html>\n<html>\n<head>\n<link rel="stylesheet" type="text/css" href="styles.css">\n<title>Your Resume</title>\n</head>\n<body>\n');    
        myText +=("<header><h1>"+fname+"</h1><div><h4>Contacts:</h4>\n<address>" + address+ "<br>"+ town +","+state+","+zip+"<p>&#9993 Email: "+email+"<br>&#9742 Tel: "+tele+"</p></address></div>"); 
        myText +=('<div><h4>Socials:</h4><p id="socials">');
        myText +=('<img src="images/facebook.png" alt="facebook icon"> '+fb+'<br><img src="images/instagram.png" alt="instagram icon"> '+ints+'<br><img src="images/twitter.png" alt="twitter icon"> '+tw+'<br><img src="images/tik-tok.png" alt="tiktok icon"> '+tt+'</p></div></header>\n<hr id="space">');
        myText += ("<h4>Skills Set: </h4>");
        myText +=('<p class="job">'+skill1+" &#9830 "+skill2+" &#9830 "+skill3+" &#9830 "+skill4+'</p><hr class="clear">');
        myText +=('<h4>Technical Skills: </h4>');
        myText += ('<p class="job">'+html+" "+php+" "+css+" "+javas+" "+csharp+'</p><hr class="clear">');
        myText +=('<h4>Education Background:</h4>');
        myText +=('<p class="job">High School Attended '+highSch+" &#9622 Graduated: "+gradHigh+'</p><p class="clear job">College Attended '+college+" &#9622 Graduated: "+gradCol+'</p><p class="clear job"> With A Degree Type of '+degree+'</p><hr class="clear">');
        myText +=('<h4>Hobbies:</h4>');
        myText +=('<p class="job">'+hob1+" &#9622 "+hob2+" &#9622 "+hob3+'</p><hr class="clear">');
        myText +=('<h4>Current Work Experience: </h4><p class="jobDate"> From: '+myDate1+" To: "+myDate2+'</p><p class="job">Worked at '+pl1+ " With Job Tile as "+jb1+ "</p>");
        myText +=('<div class="clear"></div><p class="jobDate"> From: '+myDate3+" To: "+myDate4+'</p><p class="job">Worked at '+pl2+ " With Job Tile as "+jb2+ "</p>");
        myText +=('<div class="clear"></div><p class="jobDate"> From: '+myDate5+" To: "+myDate6+'</p><p class="job">Worked at '+pl3+ " With Job Tile as "+jb3+ "</p>");
        myText +=('<hr class="clear">');
        myText +=('<div class="grid"><div><h4 >Business References: </h4></div>');
        myText +=('<div><p class=" job">'+ref1+" . Can be Contacted at &#9742 "+tel1+'</p><p class="clear job">'+ref2+" . Can be Contacted at &#9742 "+tel2+'</p><p class="clear job">'+ref3+" . Can be Contacted at &#9742 "+tel3+'</p></div></div><hr class="clear">');
        myText +=("");
        myText += ("</body>\n</html>");
    
        myWindow = window.open("about:blank","Resume","toolbar=yes,fullscreen=no,left=200,top=200");//output to fullscreen window
        myWindow.document.write(myText);//writing of the output to the window.
          
}
else{//message for invalid email
    alert("You have entered an invalid email address!");
    return false;

}
    }