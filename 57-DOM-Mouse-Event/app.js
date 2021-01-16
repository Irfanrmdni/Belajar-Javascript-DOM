const clearBtn = document.querySelector('.clear-task');
const card = document.querySelector('.card');
const h5 = document.getElementById('card-title');


// Event Handler
function runEvent(e) {
    console.log('Tipe Event : ' + e.type);

    h5.textContent = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetY},${e.offsetX},255)`;
}

// Event Click
// clearBtn.addEventListener('click', runEvent);

// Event Double Click
// clearBtn.addEventListener('dblclick', runEvent);

// Event Mouse down
// clearBtn.addEventListener('mousedown', runEvent);

// Event Mouse up
// clearBtn.addEventListener('mouseup', runEvent);

// Event Mouse enter
// card.addEventListener('mouseenter', runEvent);

// Event Mouse leave
// card.addEventListener('mouseleave', runEvent);

// Event Mouse over
// card.addEventListener('mouseover', runEvent);

// Event Mouse out
// card.addEventListener('mouseout', runEvent);

// Event Mouse move
card.addEventListener('mousemove', runEvent);