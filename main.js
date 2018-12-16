const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");

const calenderDays = 24;

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#b81919";
}

const createCalendar = () => {
    for(let i = 0; i < calenderDays; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add('image');
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        imageNumber = i + 1;
        let imagePath = `./assets/${imageNumber}.jpg`;

        calendarDoorText.addEventListener("click", openDoor.bind(this, imagePath));
    }
}

//calendarButton.addEventListener("click", createCalendar);
window.onload = function() {
    createCalendar();
  };