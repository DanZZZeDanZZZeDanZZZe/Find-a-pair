document.body.addEventListener('click', function(e) {
    if(hasClass(e.target, 'partition')) {
        if (game.buff === null) {
            game.buff = e.target;
        } else {
            if (e.target.style.backgroundColor === game.buff.style.backgroundColor) {
                e.target.className = 'guessedPartition';
                game.buff.className = 'guessedPartition';
            } else {
                //////////
            }
        }
    }
}, true);    