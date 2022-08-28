function sum() {
    let num1 = document.getElementById("num1").value;

    let num2 = document.getElementById("num2").value;

    let result = Number(num1) + Number(num2);

    let sum = document.getElementById("result");

    sum.value = result;

    if (num1 == "" || num2 == "") {
      sum.value = "";
      alert("Don't leave empty");
    }
  }
  
  let btnSum = document.querySelector("button:nth-child(1)");
  btnSum.onclick = function () {
    sum();
    num1.value = "";
    num2.value = "";
  };
  
  function chixma() {
    let num1 = document.getElementById("num1").value;

    let num2 = document.getElementById("num2").value;

    let result = Number(num1) - Number(num2);

    let chixma = document.getElementById("result");

    chixma.value = result;

    if (num1 == "" || num2 == "") {
      chixma.value = "";
      alert("Don't leave empty");
    }
  }
  
  let btnChixma = document.querySelector("button:nth-child(2)");
  btnChixma.onclick = function () {
    chixma();
    num1.value = "";
    num2.value = "";
  };
  
  function multipication() {
    let num1 = document.getElementById("num1").value;

    let num2 = document.getElementById("num2").value;

    let result = Number(num1) * Number(num2);

    let multipication = document.getElementById("result");

    multipication.value = result;

    if (num1 == "" || num2 == "") {
        multipication.value = "";
      alert("Don't leave empty");
    }
  }
  
  let btnMultipication = document.querySelector("button:nth-child(3)");
  btnMultipication.onclick = function () {
    multipication();
    num1.value = "";
    num2.value = "";
  };
  
  function divide() {
    let num1 = document.getElementById("num1").value;

    let num2 = document.getElementById("num2").value;

    let result = Number(num1) / Number(num2);

    let divide = document.getElementById("result");

    divide.value = result;

    if (num1 == "" || num2 == "") {
      divide.value = "";
      alert("Don't leave empty");
      return;
    }
  }
  
  let btnDivide = document.querySelector("button:nth-child(4)");
  btnDivide.onclick = function () {
    divide();
    num1.value = "";
    num2.value = "";
  };