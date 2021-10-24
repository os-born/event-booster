import refs from "../refs";

refs.openTeamModal.addEventListener('click', onClickOpenTeamModal)
refs.closeTeamModal.addEventListener('click', onClickCloseTeamModal)

function onClickOpenTeamModal (e) {
    e.preventDefault();
    if (!e.currentTarget.classList.contains('footer-team__name')) {
        return
    }
    
    refs.backdrop.classList.add('is-open');
    refs.backdrop.classList.remove('is-hidden');
}

function onClickCloseTeamModal (e) {
    e.preventDefault();
    if (!e.currentTarget.classList.contains('teammates')) {
        return
    }
    refs.backdrop.classList.remove('is-open')
    refs.backdrop.classList.add('is-hidden');
}
