document.body.addEventListener('click', function(e) {
    if(hasClass(e.target, 'partition')) {
        if (game.buff === null) {
            e.target.className = 'allottedPartition';
            game.buff = e.target;
        } else {
            if (e.target.style.backgroundColor === game.buff.style.backgroundColor && game.buff != e.target) {
                e.target.className = 'guessedPartition';
                game.buff.className = 'guessedPartition';
                game.buff = null;     
            } else {
                healthIndcator.clear();
                game.buff.className = 'partition'
                game.buff = null;

            }
        }
    }
    if(e.target.id === 'main-menu-play') {
        removeElementById('main-menu');
        swapId('main-menu-container', 'blocks-container');
        initializeTheGame(gameLevelConfiguration[0]);
    }
    if(e.target.id === 'intermediate-menu-play') {
        removeElementById('intermediate-menu');
        swapId('intermediate-menu-container', 'blocks-container');
        initializeTheGame(gameLevelConfiguration[0]);
    }
}, true);    