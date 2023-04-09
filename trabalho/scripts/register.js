function validatePassword() {
    
    const senhaInput = document.getElementById("password");
    const senha = senhaInput.value;
  
    if (senha.length < 6) {
      
        alert("A senha deve ter pelo menos 6 caracteres.");
        senhaInput.focus();
        return false;
    
    }
    
    const regex = /^(?=.*[A-Z])(?=.*\d)/;
    
    if (!regex.test(senha)) {
        
        alert("A senha deve conter pelo menos uma letra maiúscula e um número.");
        senhaInput.focus();
        return false;
    
    }
  
    return true;
 
}