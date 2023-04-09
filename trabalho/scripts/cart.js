function dividirInput(input, target) {
    
    if (input.value.length >= input.maxLength) {
        target.focus();
    
    }
}


// function somaValor() {
    
//     const checkbox = document.getElementsByName("valor");
//     let total = 0;
    
//     for (let i = 0; i < checkbox.length; i++) {
      
//         if (checkbox[i].checked) {
        
//         total += Number(checkbox[i].value);
      
//         }
//     }
    
//     document.getElementById("subtotal").value = total;
//     document.getElementById("subtotal").textContent = `Subtotal: ${total}`;
// }

  function calculaTotal() {
    
    const subtotal = Number(document.getElementById("subtotal").value);
    
    const frete = Number(document.getElementById("frete").value);
    
    const total = subtotal + frete;
    
    document.getElementById("total").value = total;
    document.getElementById("total").textContent = `Total:  ${total}`;
  
}
