const codeElement = document.getElementById("cityCode");
const userInputCity = document.getElementById("userCityInput");


function getRandomCode() {
    const randomIndex = Math.floor(Math.random() * cities.length) + 1;
    return randomIndex;
}

function displayCode() {
    codeElement.textContent = getRandomCode();
    userCityInput.value = ""; // Input alanını temizler
}

displayCode();

document.getElementById("userCityInput").addEventListener("keyup", function(event) {
    // Enter tuşuna basıldığında, "keyCode" 13 olur
    if (event.keyCode === 13) {
        // "checkAnswer" fonksiyonunu çağır
        checkAnswerCity();
    }
});


function checkAnswerCity() {
    const selectedCode = parseInt(codeElement.textContent); // Plaka kodunu sayıya çevirir 
    const userAnswer = userCityInput.value.trim().toLowerCase(); // Kullanıcıdan alınan şehir ismindeki boşlukları temizler
    const correctCity = Object.keys(cityPlates).find(key => cityPlates[key] === selectedCode).toLowerCase();

    if (userAnswer === correctCity) {
        alert("Doğru!");
    } else {
        alert("Yanlış, doğru cevap: " + correctCity.charAt(0).toUpperCase() + correctCity.slice(1));
    }
    displayCode();   
}