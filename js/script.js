// Keyboard Events
const input = document.querySelector('#txtTaskName');

const h5 = document.querySelector('h5');


// input.addEventListener('keydown',eventHandler);
input.addEventListener('keyup', eventHandler);
// input.addEventListener('keypress',eventHandler);

function eventHandler(e) {
    // console.log('Event type: ' + e.type);
    // console.log('Key Code: ' + e.keyCode);
    // console.log('value: ' + e.target.value);
    if (input.value) {
        h5.textContent = `${input.value}`;
    } else if (input.value == '') {
        h5.textContent = 'Task List';
    }
}