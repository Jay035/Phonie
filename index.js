const networkProviderLogo = document.querySelector('.network-provider-container img');
const label = document.querySelector('.phone-number-input-box label');
const phoneNumber = document.getElementById('phone-no');
const errorText = document.querySelector('.error');

let regex = /^\d{10}$/;
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

    // if(phoneNumber.match(regex)){
    //     console.log('successful')
    //     // label.textContent = "Success! Network provider identified";
    // }
    let telNo = phoneNumber.value;
    if(!validatePhoneNumber(telNo)){
        errorText.classList.remove('hidden');
    }
    else if(validatePhoneNumber(telNo)){
        errorText.classList.add('hidden');
        prefix = telNo.substring(0, 4);
        if(telNo.substring(0, 4) == "+234")console.log(234);
        for(const carrierprefix in networkCarrierPrefixes){
            if(networkCarrierPrefixes[carrierprefix].includes(prefix)){
                if(MTN.includes(prefix)){
                    networkProviderLogo.src = "./img/mtn 1.png";
                    label.textContent = "Success! Network provider identified";
                    console.log('MTN', networkProviderLogo)
                }else if(AIRTEL.includes(prefix)){
                    label.textContent = "Success! Network provider identified";
                    console.log('AIRTEL', networkProviderLogo)
                }else if(GLO.includes(prefix)){
                    label.textContent = "Success! Network provider identified";
                    console.log('GLO', networkProviderLogo)
                }else if(NINEMOBILE.includes(prefix)){
                    label.textContent = "Success! Network provider identified";
                    console.log('9MOBILE', networkProviderLogo)
                }
                else{
                    return 'UNKNOWN NETWORK CARRIER';
                }
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
        label.style.textAlign = "center";
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
