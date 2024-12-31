# Email Validator

This project is a simple **Email Validator** built using just **16 lines of JavaScript**. It leverages the [Email Validation API](https://emailvalidation.io/) to fetch and display details about a provided email address. The interface is straightforward and ideal for lightweight applications.

## Features
- Validate an email address by fetching data from the Email Validation API.
- Displays relevant information about the email in a clean format.
- Provides instant feedback with a loading animation.

## How It Works
1. A user enters an email address into the input field.
2. Upon clicking the "Submit" button:
   - A loading animation is displayed.
   - The app sends a request to the Email Validation API with the provided email.
   - The response is parsed, and non-empty data fields are displayed dynamically.

## Prerequisites
To use this project, ensure you have the following:
- A valid API key from [Email Validation API](https://emailvalidation.io/).
- Basic knowledge of HTML, CSS, and JavaScript.

## Usage
1. Clone or download this repository to your local machine.
2. Replace `your_api_key_here` in the JavaScript code with your Email Validation API key.
3. Include the `loading.svg` file in your project directory for the loading animation.
4. Open the HTML file in your browser.
5. Enter an email address and click the "Submit" button to see the results.

## Code Highlights
The main functionality is implemented in JavaScript using the `fetch` API and async/await syntax:

```javascript
submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    resultCont.innerHTML = `<img width="123" src="loading.svg" alt="">`;
    let key = "your_api_key_here";
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
```

## Example Output
- **Input**: `example@example.com`
- **Output**: 
  ```
  domain: example.com
  is_disposable: false
  is_smtp_valid: true
  ...
  ```

## License
This project is open-source and free to use. Attribution is appreciated but not required.

---

Feel free to extend this project or integrate it into your applications!

