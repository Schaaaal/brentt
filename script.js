const envelope = document.querySelector('.envelope-wrapper');

envelope.addEventListener('click', () => {
     if (!envelope.classList.contains('flap')) {
    envelope.classList.add('flap');
    } else {
    envelope.classList.remove('flap');
    }
    });
