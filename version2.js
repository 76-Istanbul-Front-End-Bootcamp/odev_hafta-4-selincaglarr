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

const divHTML = `<div><input type="radio" name=${inputName} id=${inputName + elements[i]} value=${elements[i]}><label for=${inputName + elements[i]}>${elements[i];}</label></div>`;