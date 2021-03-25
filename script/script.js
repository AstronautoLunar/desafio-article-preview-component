const panelShare = window.document.getElementById('panel-share');

const buttonShare = window.document.getElementById('share');

panelShare.style.display = 'none';

const aplicarClick = function (button, callback) {
    button.onclick = callback;
}

const mediaQuerieList = matchMedia("(max-width: 758px)");

const aplicarInteracaoResponsiva = function (mediaQuerieList) {
    if(mediaQuerieList.matches) {
        // aplicarClick(buttonShare, () => {

        // })
    } else {
    }
    aplicarClick(buttonShare, () => {
        if(panelShare.style.display == 'none') {
            panelShare.style.display = 'block';
            buttonShare.style.color = 'white';
            buttonShare.style.backgroundColor = '#48556a';
        } else {
            panelShare.style.display = 'none';
            buttonShare.style.color = '';
            buttonShare.style.backgroundColor = '';
        }
    });
}

aplicarInteracaoResponsiva(mediaQuerieList);

mediaQuerieList.addListener(aplicarInteracaoResponsiva);