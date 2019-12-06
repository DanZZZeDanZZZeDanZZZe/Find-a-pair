let timer = {
    create: (elementId) => {
        element = document.getElementById(elementId)
        let timerContainer = document.createElement('div');
        timerContainer.className = 'timer-container'; 
        timerContainer.innerText = '00:00';
        element.appendChild(timerContainer)
    }
}