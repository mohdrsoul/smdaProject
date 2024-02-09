function toggleCardVisibility(cardId) {
    var card = document.getElementById(cardId);

    // Toggle the card visibility
    card.style.display = "block";

    // Hide other cards
    var cardContainer = document.getElementById("cardContainer");
    var card2 = document.getElementById("card2");
    var card3 = document.getElementById("card3");
    var card4 = document.getElementById("card4");
    var card5 = document.getElementById("card5");
    var card6 = document.getElementById("card6");
    var card7 = document.getElementById("card7");

    if (cardId !== "cardContainer") {
        cardContainer.style.display = "none";
    }
    if (cardId !== "card2") {
        card2.style.display = "none";
    }
    if (cardId !== "card3") {
        card3.style.display = "none";
    }
    if (cardId !== "card4") {
        card4.style.display = "none";
    }
    if (cardId !== "card5") {
        card5.style.display = "none";
    }
    if (cardId !== "card6") {
        card6.style.display = "none";
    }
    if (cardId !== "card7") {
        card7.style.display = "none";
    }
}
