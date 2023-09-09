const chars = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890^ù$*<>!.?:;&é'(-è_çà@=)"

function getRandomPassword() {
    let charAmount = document.getElementById("char-amount");

    let password = "";

    for (let i = 1; i < charAmount.value; i++) {
        let randomChar = Math.floor(Math.random() * chars.length);

        password = password + chars[randomChar]
    }
    
    let result = document.getElementById("result");

    result.innerHTML = password
}

document.getElementById("result").addEventListener("click", function() {
    var text = document.getElementById("result");

    var tempInput = document.createElement("input");
    tempInput.style.display = "none";
    tempInput.value = text.innerText;

    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempInput);
})