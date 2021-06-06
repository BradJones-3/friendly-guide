const toggleModal = () => {
    document.querySelector('.modal')
    .classList.toggle('modal--hidden');
};

document.querySelector('#show-modal')
.addEventListener('click', toggleModal);

document.querySelector('.modal-close')
.addEventListener('click', toggleModal);

$(document).ready(function() {
    $('#btn-1').click(function(){
        $('.how-to-content').toggle();
    });
});