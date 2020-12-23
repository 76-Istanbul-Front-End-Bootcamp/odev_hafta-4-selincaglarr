  
const data = {
    USD: {EUR: 0.82, GBP: 0.74 ,RON:3.98, ARS:83.24, TRY:7.93  },
    EUR: {USD: 1.23, GBP: 0.91, RON:4.86, ARS:101.88, TRY:9.34  },
    GBP: {USD: 1.35, EUR: 1.10, RON:5.35, ARS:111.66, TRY:10.23  },
    RON: {EUR:0.21, GPB: 0.19, USD:0.25, ARS:20.94, TRY:1.92 },
    ARS: {EUR:0.0098, GPB:0.0090, USD:0.012, RON:0.048, TRY:0.092  },
    TRY: {ARS:10.91, EUR:0.11, GBP:0.098, RON:0.52, USD:0.13,},
    // USWD: {EUR: 0.82, GBP: 0.74 ,RON:3.98, ARS:83.24, TRY:7.93  },
    // EUWR: {USD: 1.23, GBP: 0.91, RON:4.86, ARS:101.88, TRY:9.34  },
    // GWBP: {USD: 1.35, EUR: 1.10, RON:5.35, ARS:111.66, TRY:10.23  },
    // ROTN: {EUR:0.21, GPB: 0.19, USD:0.25, ARS:20.94, TRY:1.92 },
    // ARTS: {EUR:0.0098, GPB:0.0090, USD:0.012, RON:0.048, TRY:0.092  },
    // TIY: {ARS:10.91, EUR:0.11, GBP:0.098, RON:0.52, USD:0.13,}
  };
  
  const currencyKeys = Object.keys(data);
  
  function createCurrencyElements(elements, root, inputName){
    for(let i =0; i< elements.length; i++){
      const currencyKeyDiv   = document.createElement("div");
      const currencyKeyInput = document.createElement("input");
 
      currencyKeyInput.setAttribute("type", "radio");
      currencyKeyInput.setAttribute("name", inputName);
      currencyKeyInput.setAttribute("id", inputName + elements[i]);
      currencyKeyInput.setAttribute("value", elements[i]);
  
      const currencyKeyLabel = document.createElement("label");
      currencyKeyLabel.setAttribute("for", inputName + elements[i]);
     
      currencyKeyLabel.textContent = elements[i];
  
      currencyKeyDiv.appendChild(currencyKeyInput);
      currencyKeyDiv.appendChild(currencyKeyLabel);
      root.appendChild(currencyKeyDiv);
    } 
  }
  
  //from
  const parentEl = document.querySelector("#currency-box-from");
  const fromInputName = "currency_from";
  createCurrencyElements(currencyKeys, parentEl, fromInputName);
  
  // to
  const parentToEl = document.querySelector("#currency-box-to");
  const toInputName = "currency_to";
  createCurrencyElements(currencyKeys, parentToEl, toInputName);

  
  
  const calculateButton = document.querySelector("#calculate-button");
    
    calculateButton.addEventListener("click", function(){
     // kimden ceviriyourz
     const fromTarget = document.querySelector("input[name='currency_from']:checked").value;
     // kime ceviriyoruz
     const toTarget   = document.querySelector("input[name='currency_to']:checked").value;
     // amountu alalim
     const amount     = document.querySelector("input[name='amount']").value;


    //  console.log(document.querySelector("input[name='currency_to']"))
     
     
  
    
    if( !amount.split('').every(x=> x == Number(x))){
        const noAmount =document.querySelector("#currency-result");
        noAmount.innerHTML ="Lutfen Sadece Sayi Degeri Giriniz";
          return;
    }
      
    

    const currentCurrencyObject = data[fromTarget];
    const resultForOne = currentCurrencyObject[toTarget];
    const result = amount * resultForOne;   
    
    
    if(!!result){
      const currencyResult = document.querySelector("#currency-result");
      currencyResult.innerHTML = amount + " " + fromTarget + " = " + result + " " + toTarget;
      return;
    }
    
    else{
      const noResult =document.querySelector("#currency-result");
      noResult.innerHTML ="Farkli Para Birimlerini Secmelisiniz"
      return;
      }
   
    });
