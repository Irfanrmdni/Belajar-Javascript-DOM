const form = document.querySelector('form');
const search = document.getElementById('title');
const h5 = document.getElementById('card-title');
const select = document.querySelector('select');
// DOM Event Keyboard dan Input

// Event Handler
function runEvent(e) {
    console.log(`Tipe Event : ${e.type}`);
    // console.log(e.target.value);
    // h5.innerHTML = e.target.value;
    // console.log(search.value);
    // search.value = '';
    // e.preventDefault();
}

// Event submit
// form.addEventListener('submit', runEvent);

// Event keydown
// search.addEventListener('keydown', runEvent);

// Event keyup
// search.addEventListener('keyup', runEvent);

// Event keypress
// search.addEventListener('keypress', runEvent);

// Event focus
// search.addEventListener('focus', runEvent);

// Event blur
// search.addEventListener('blur', runEvent);

// Event cut
// search.addEventListener('cut', runEvent);

// Event paste
// search.addEventListener('paste', runEvent);

// Event input
// search.addEventListener('input', runEvent);

// Event change
select.addEventListener('change', runEvent);