import './small-room-card.scss';

const roomCost = document.querySelectorAll('.room_cost');

for (let cost of roomCost) {
    changeValueSlider(cost);
}

function changeValueSlider(element) {
    const textContent = element.textContent;
    const value = formatNumber(Math.round(parseInt(textContent, 10)));
    element.textContent = value + '₽';
}

function formatNumber(n) {
    return (n + "").split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");
}

