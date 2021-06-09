var modal = document.getElementById("rules-modal");

var btn = document.getElementById("modal-btn");

var span = document.getElementsByClassName("close")[0];
/* Opens Modal */
btn.onclick = function() {
  modal.style.display = "block";
}
/* Modal closes when clicked on the 'X'*/
span.onclick = function() {
  modal.style.display = "none";
}

/* Modal closes when clicked outside of*/
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$('#btn-1').click(function(){
  $('.game-content').slideToggle(550);
})