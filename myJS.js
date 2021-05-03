const note = document.querySelector('.nowplaying');
const keys = document.querySelectorAll('.key');
const hints = document.querySelectorAll('.hints');

window.addEventListener('keydown' , function(event) {
    if (!fired){
        fired = true;
        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)

        if(! key) return;

        const keyNote = key.getAttribute('data-note');

        key.classList.add('playing');
        //note.innerHTML = keyNote;
        audio.currentTime = 0;                                    //**********
        audio.play();                                               // ***
    }
});

function removeTransition() {                                  //******
    this.classList.remove('playing')
}


keys.forEach(key => key.addEventListener('transitionend' , removeTransition));

window.addEventListener('keyup' , function(event) {
    fired = false;
});