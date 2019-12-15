function createHighscoreTable(containerId) {
    let container = getId(containerId);
    let head = document.createElement('div');
    head.id = 'highscore-table-head'
    let button1 = document.createElement('div');
    button1.id = 'highscore-button-clear';
    button1.innerText = 'Удалить рекорды'
    head.appendChild(button1);
    let button2 = document.createElement('div');
    button1.id = 'highscore-button-exit';
    button2.innerText = 'В главное меню';
    head.appendChild(button2);
    container.appendChild(head)
    let highscoreTable = document.createElement('div');
    highscoreTable.id = 'highscore-table';
    container.appendChild(highscoreTable);
    gameLevelConfiguration.forEach((element) => {
        let level = document.createElement('div');
        level.id = `highscore-${element.id}`
        level.className = 'highscores-levels';
        let name = document.createElement('div');
        name.innerText = element.name;
        level.appendChild(name);
        container.appendChild(level);
    })
}