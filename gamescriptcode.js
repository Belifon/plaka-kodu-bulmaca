const cityElement = document.getElementById("cityName");
const userInput = document.getElementById("userCodeInput");

function getRandomCity() {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
}

function displayCity() {
    cityElement.textContent = getRandomCity();
    userInput.value = ""; // Input alanını temizler
}

document.getElementById("userCodeInput").addEventListener("keyup", function(event) {
    // Enter tuşuna basıldığında, "keyCode" 13 olur
    if (event.keyCode === 13) {
        // "checkAnswer" fonksiyonunu çağır
        checkAnswerCode();
    }
});


function checkAnswerCode() {
    const selectedCity = cityElement.textContent;
    const userAnswer = parseInt(userInput.value); // Kullanıcıdan alınan değeri sayıya dönüştür
    const correctAnswer = cityPlates[selectedCity];

    if (userAnswer === correctAnswer) {
        alert("Doğru!");
    } else {
        alert("Yanlış, doğru cevap: " + correctAnswer);
    }
    
    displayCity();

}

displayCity();

