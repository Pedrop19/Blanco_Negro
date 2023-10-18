const imgElements = document.querySelectorAll(".imagenes");
const cambioElements = document.querySelectorAll(".cambio");
const blancElement = document.getElementById('blanco');
const colorElement = document.getElementById('color');
let draggedElement = null;


imgElements.forEach(element => {
    element.addEventListener('drop', DropElement);
});

cambioElements.forEach(element => {
    element.addEventListener('drag', DragElement);
});


function DragElement(evento) {
    console.log("drag" + this);
    draggedElement = evento.target; 
}


function DropElement(evento) {
    evento.preventDefault();
    console.log("drop" + this);
    console.log("evento: " + evento);

    let isTargetInImages = Array.from(imgElements).includes(evento.target);

    if (isTargetInImages) {
        if (blancElement.contains(draggedElement)) {
            this.style.filter = "grayscale(100%)";
        } else if (colorElement.contains(draggedElement)) {
            this.style.filter = "grayscale(0%)";
        }
    }

    draggedElement = null; 
}