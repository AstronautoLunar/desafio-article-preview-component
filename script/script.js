const panelShare = window.document.getElementById('panel-share');

const buttonShare = window.document.getElementById('share');

panelShare.style.display = 'none';

const aplicarFuncao = function (button, callback) {
    button.onclick = callback;
}

aplicarFuncao(buttonShare, () => {
    if(panelShare.style.display == 'none') {
        panelShare.style.display = 'block';
    } else {
        panelShare.style.display = 'none';
    }
})