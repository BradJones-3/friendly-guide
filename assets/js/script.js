const toggleModal = () => {
    document.querySelector('.modal')
    .classList.toggle('modal--hidden');
};

document.querySelector('#show-modal')
.addEventListener('click', toggleModal);


$('#btn-1').click(function(){
    $('.how-to-content').slideToggle(550);
})