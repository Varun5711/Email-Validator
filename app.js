submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    resultCont.innerHTML = `<img width="123" src="loading.svg" alt="">`;
    let key = "ema_live_6QEskxGNxZ3Nu05QZo14kFl1sRlrxCW3vOBP4AYP";
    let email = document.getElementById("username").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res = await fetch(url);
    let result = await res.json();
    let str = ``;
    for (let key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            str = str + `<div>${key}: ${result[key]}</div>`;
        }
    }
    resultCont.innerHTML = str;
});