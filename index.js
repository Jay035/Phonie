const networkProviderLogo = document.querySelector('.network-provider-container img'),
      label = document.querySelector('.phone-number-input-box label'),
      inputField = document.querySelector('.phone-number-input-box input'),
      networkProviderContainer = document.querySelector('.network-provider-container'),
      phoneNumber = document.getElementById('phone-no'),
      errorText = document.querySelector('.error');

// let regex = /^\d{10}$/;
let prefix;

// regEx 
const validatePhoneNumber = (inputStr) => {
    const validPatterns = [
        // +234 706 768 6675
        /^\+234 \d{3} \d{3} \d{4}$/,
        // 0900 000 0000
        /^\+\d{4} \d{3} \d{4}$/,
        // +2347067686675
        /^\+234\d{3}\d{3}\d{4}$/,
        // 09090909090
        /^\d{11}$/
    ]
    return validPatterns.some((pattern) => pattern.test(inputStr));
}

const validateForm = (e) => {
    MTN = [
        "0803","0806", "0703", "0706", "0810", "0813", "0814", "0816", "0903", "0906", "0916",
        ];
    
    GLO = ["0805", "0807", "0811", "0705", "0815", "0905"];
    
    AIRTEL = [
        "0802", "0808", "0812", "0701", "0708", "0902", "0907", "0901",
    ];
    
    NINEMOBILE = ["0809", "0817", "0818", "0908", "0909"];

    let telNo = phoneNumber.value;
    if(!validatePhoneNumber(telNo)){
        // errorText.classList.remove('hidden');
        label.style.color = "rgb(241, 30, 30)";
        label.textContent = "Invalid number, try again";
        networkProviderLogo.src = "./img/image.png";
        inputField.style.outline = "2px solid rgb(241, 30, 30)";
        networkProviderContainer.style.border = "3px dashed #9DB7F8";
    }
    else if(validatePhoneNumber(telNo)){
        errorText.classList.add('hidden');
        prefix = telNo.substring(0, 4);
        telNo.substring(0, 3) == "+234" ? console.log(234) : '' 
        for(const carrierprefix in networkCarrierPrefixes){
            if(networkCarrierPrefixes[carrierprefix].includes(prefix)){
                if(MTN.includes(prefix)){
                    networkProviderLogo.src = "./img/mtn.png";
                    label.textContent = "Success! Your network provider is MTN";
                }else if(AIRTEL.includes(prefix)){
                    networkProviderLogo.src = "./img/Airtel.png";
                    label.textContent = "Success! Your network provider is AIRTEL";
                }else if(GLO.includes(prefix)){
                    networkProviderLogo.src = "./img/Glo.png";
                    label.textContent = "Success! Your network provider is GLO";
                }else if(NINEMOBILE.includes(prefix)){
                    networkProviderLogo.src = "./img/9mobile.png";
                    label.textContent = "Success! Your network provider is 9MOBILE";
                }
                else{
                    return 'UNKNOWN NETWORK CARRIER';
                }
                label.style.color = "green";
                label.classList.add('-translate-y');
                inputField.style.outline = "2px solid green";
                networkProviderContainer.style.border = "3px dashed green";
            }
            // else{
            //     console.log('oops', label)
            //     label.textContent = "Oops! Couldn't find your network provider. Please make sure you put in a valid number"
            //     label.style.color = "rgb(241, 30, 30)";
            //     label.style.textAlign = "left";
            // }
        }
    }
    else{
        console.log('oops', label)
        label.textContent = "Oops! Couldn't find your network provider. Please make sure you put in a valid number"
        label.style.color = "rgb(241, 30, 30)";
        // label.style.textAlign = "center";
        inputField.style.outline = "2px solid rgb(241, 30, 30)";
    }

    e.preventDefault();
}

const networkCarrierPrefixes = {
    MTN: [
        "0803","0806", "0703", "0706", "0810", "0813", "0814", "0816", "0903", "0906", "0916",
      ],
    
    GLO: ["0805", "0807", "0811", "0705", "0815", "0905"],
    
    AIRTEL: [
        "0802", "0808", "0812", "0701", "0708", "0902", "0907", "0901",
      ],
    
    NINEMOBILE: ["0809", "0817", "0818", "0908", "0909"]
}

// submit form
document.querySelector('form').addEventListener('submit', validateForm);
