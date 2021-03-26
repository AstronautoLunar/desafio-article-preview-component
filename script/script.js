const panelShare = window.document.getElementById('panel-share');

const shareResponsive = window.document.getElementById('share-responsive');

const panelUser = window.document.getElementById('panel-user');

shareResponsive.style.display = 'none';

const buttonShare1 = window.document.getElementsByClassName('share-button')[0];

const buttonShare2 = window.document.getElementsByClassName('share-button')[1];

panelShare.style.display = 'none';

const mediaQuerieList = matchMedia("(max-width: 758px)");

const aplicarInteracaoResponsiva = function (mediaQuerieList) {
    if(mediaQuerieList.matches) {
        buttonShare1.onclick = () => {
            if(shareResponsive.style.display == 'none') {
                shareResponsive.style.display = 'flex';
                panelUser.style.display = 'none';
                buttonShare2.style.color = 'white';
                buttonShare2.style.backgroundColor = '#6d7f97';
            } else {
                shareResponsive.style.display = 'none';
                panelUser.style.display = 'flex';
            }
        }
        buttonShare2.onclick = () => {
            if(shareResponsive.style.display == 'none') {
                shareResponsive.style.display = 'flex';
                panelUser.style.display = 'none';
                panelShare.style.display = 'none';
            } else {
                shareResponsive.style.display = 'none';
                panelUser.style.display = 'flex';
            }
        }
        panelShare.style.display = 'none';
        buttonShare1.style.color = '';
        buttonShare1.style.backgroundColor = '';
    } else {
        buttonShare1.onclick = () => {
            if(panelShare.style.display == 'none') {
                panelShare.style.display = 'block';
                buttonShare1.style.color = 'white';
                buttonShare1.style.backgroundColor = '#6d7f97';
            } else {
                panelShare.style.display = 'none';
                buttonShare1.style.color = '';
                buttonShare1.style.backgroundColor = '';
            }
        }
        buttonShare1.style.color = '';
        buttonShare1.style.backgroundColor = '';
        panelUser.style.display = 'flex';
        shareResponsive.style.display = 'none';
    }
}

aplicarInteracaoResponsiva(mediaQuerieList);

mediaQuerieList.addListener(aplicarInteracaoResponsiva);