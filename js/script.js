const FACTS = [
    "Промокод KostromaLove даёт новую аватарку",
    "Аккаунты с BloxPremium получают доступ к отправке изображений в чат",
    "Игра Побег из Костромы была создана за месяц",
    "Наш сайт был создан за 3 месяца",
    "Промокод MemeBLX12 дает особый значок в профиле",
    "Наша лучшая игра - Побег Из Костромы",
    "Сайт был сделан на Java Script",
    "В игре Побег Из Костромы скриптером является ItzMommy."
];

function randInt(a, b) {
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b - a + 1)) + a;
}


function showAccountBox() {
    const accountBoxIcon = document.getElementById("icon");
    const accountBox = document.querySelector(".account-box");
    
    accountBoxIcon.addEventListener("click", (event) => {
        event.preventDefault();
        if (accountBox.style.display == "none") {
            accountBox.style.display = "table";
        } else {
            accountBox.style.display = "none";
        }
    });
}

showAccountBox();

const random_facts = document.getElementById("random_fact");
let n = randInt(0, FACTS.length - 1);
const newP = document.createElement("p");
random_facts.textContent = `${FACTS[n]}`;
document.body.appendChild(newP);
