
document.body.addEventListener('click', function(e) {
    if(hasClass(e.target, 'partition')) {
        if (game.buff === null) {
            e.target.className = 'allottedPartition';
            e.target.style.animation = 'none';
            game.buff = e.target;
        } else {
            if (e.target.style.backgroundColor === game.buff.style.backgroundColor && game.buff != e.target) {
                e.target.className = 'guessedPartition';
                game.buff.className = 'guessedPartition';
                game.buff = null;     
                game.destroyCouple();
                if (game.totalCouples === game.destroyedCouples) {
                    game.time = timer.elapsedTime;
                    removeChilds('blocks-container');
                    removeChilds('side-panel');
                    removeChilds('timer-container');
                    swapId('blocks-container', 'intermediate-menu-container');
                    let score = updateLocalStorage(game.currentLevel, game.time);
                    if (score) {
                        createMenu('intermediate-menu-container', menuData[4]); 
                    } else {
                        createMenu('intermediate-menu-container', menuData[3]); 
                    }
                    clearInterval(gameStream);
                }
            } else {
                healthIndcator.clear();
                game.buff.className = 'partition'
                game.buff = null;
            }
        }
    }
    if (-1 < e.target.id.indexOf('main-menu-') && e.target.id !== 'main-menu-exit') {
        removeElementById('main-menu');
        if (e.target.id === 'main-menu-play') {
            addLevelHolder('main-menu-container');
            createMenu("level-holder", menuData[2]);
        }
        if (e.target.id === 'main-menu-highscores') {
            swapId('main-menu-container', 'highscores-holder');
            createHighscoreTable('highscores-holder');
        }
    }
    if (e.target.id === 'intermediate-menu-play') {
        let levelNum = game.currentLevel[game.currentLevel.length-1]-1;
        removeElementById('intermediate-menu');
        swapId('intermediate-menu-container', 'blocks-container');
        initializeTheGame(gameLevelConfiguration[levelNum]);
    }
    if (e.target.id === 'intermediate-menu-exit') {
        removeElementById('intermediate-menu');
        swapId('intermediate-menu-container', 'main-menu-container');
        createMenu("main-menu-container", menuData[0]);
    }

    if (e.target.id.substring(0,e.target.id.length-1) === 'level') {
        let levelNum = e.target.id[e.target.id.length-1];
        removeElementById('level-menu');
        removeElementById('level-holder');
        swapId('main-menu-container', 'blocks-container');
        initializeTheGame(gameLevelConfiguration[levelNum]);
    }
    if (e.target.id === 'main-menu-exit') {
       closeWindow();
    }
    if (-1 < e.target.id.indexOf('highscore-button-')) {
        removeChilds('highscores-holder');
        swapId('highscores-holder', 'main-menu-container');
        createMenu("main-menu-container", menuData[0]);
        if (e.target.id === "highscore-button-clear") {
            if (confirm("Вы уверены что хотите удалить все рекорды?")) {
                localStorage.clear();
            }
        }
    }
}, true);    