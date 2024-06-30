function tratarCpf(inputcpf) {
    return inputcpf.replace(/\D+/g, "");
  }
  
  function cpfParaArray(cpfTratado) {
    return Array.from(cpfTratado, Number);
  }
  
  //Crir um funco que verifique se o cpf trtdo faoi verificdo
  function verificarCpfTratado(cpfTratadoArray) {
    if (cpfTratadoArray.length > 11 || cpfTratadoArray.length < 11) {
      resultado.classList.add("invalido");
      resultado.textContent = "Preencha o Cpf Corretamente";
      resultado.textContent = "Cpf Invalido";
    }
  }
  
  function tamanhoCpf(cpfTratadoArray) {
    if (cpfTratadoArray.length != 11) {
      return false;
    }
  }
  
  function validaCpf(num = []) {
    var i, j, soma, r, dv1, dv2;
  
    soma = 0;
    j = 10;
  
    for (i = 0; i < 9; i++) {
      soma += num[i] * j;
      j -= 1;
    }
  
    r = soma % 11;
  
    if (r < 2) {
      dv1 = 0;
    } else {
      dv1 = 11 - r;
    }
  
    soma = 0;
    j = 11;
  
    for (i = 0; i < 10; i++) {
      soma += num[i] * j;
      j -= 1;
    }
  
    r = soma % 11;
  
    if (r < 2) {
      dv2 = 0;
    } else {
      dv2 = 11 - r;
    }
  
    if (num[9] == dv1 && num[10] == dv2) {
      return true;
    } else {
      return false;
    }
  }
  
  document.getElementById("cpfForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    var inputcpf = document.getElementById("cpf").value;
  
    const cpfTratado = tratarCpf(inputcpf);
    const cpfTratadoArray = cpfParaArray(cpfTratado);
  
    const resultado = document.querySelector(".resultado p");
    res = validaCpf(cpfTratadoArray);
    /*verificarCpfTratado(cpfTratadoArray);*/
    
    tamanho = tamanhoCpf(cpfTratadoArray);
    
    if (tamanho == false) {
      resultado.innerHTML = "Digite os 11 digitos do CPF ";
      resultado.classList.remove("invalido");
      resultado.classList.remove("valido");
      
    } else if (res == true) {
      resultado.textContent = "Cpf Valido";
      resultado.classList.add("valido");
      resultado.classList.remove("invalido");
    } else {
      resultado.classList.add("invalido");
      resultado.classList.remove("valido");
      resultado.textContent = "Cpf Invalido";
    }
    document.getElementById("cpfForm").reset();
  });
  