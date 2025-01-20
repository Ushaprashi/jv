var sid=parseInt(prompt("enter the Id"));
        var sname=prompt("enter the Name")
        var m1=parseInt(prompt("enter the Tamil"));
        var m2=parseInt(prompt("enter the English"));
        var m3=parseInt(prompt("enter the Maths"));
        var m4=parseInt(prompt("enter the Sience"));
        var m5=parseInt(prompt("enter the Sosial sience"));
        var total=m1+m2+m3+m4+m5;
        var percentage=(total*100/500.0);
        document.write("Student id:"+sid+"<br>");
        document.write("Student Name:"+sname+"<br>");
        document.write("Total:"+total+"<br>");
        document.write("Percentage:"+percentage+"<br>");
        let grade;
        if (percentage >90) {
         alert (" Grade A")
        } else if (percentage >80) {
            alert (" Grade B")
        } else if (percentage >70) {
            alert (" Grade C")
        } else if (percentage >60) {
            alert (" Grade D")
        } else if (percentage >50) {
            alert (" Grade E") 

        } else {
            alert ( Grade = 'fail')
        }
      
