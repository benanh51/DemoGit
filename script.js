
        function getInputValue(){
            
            var inputVal = document.getElementById("myInput").value;
            var ret = "";
            for (var i=0; i<inputVal; i++){
            var randNumb = 58; 
        
            while (randNumb> 57 && randNumb < 65) { 
                randNumb = Math.floor(Math.random() * (90 - 48) + 48);
        }
        ret += String.fromCharCode(randNumb);
        }
        alert(ret);
    }
