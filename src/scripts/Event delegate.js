document.body.addEventListener('click', function(e) {
    if(hasClass(e.target, 'partition')) {
        alert('тыкни ещё!');
    }
}, true);    