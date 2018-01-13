function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["numberFun"].elements.length; 
        loopCounter++) {
        if (document.forms["numberFun"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["numberFun"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}