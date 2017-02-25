(function iifeScript() {
  const _ = self.Modal = function modalConstructor() {
  };
  var that = this;
  var m = document.getElementsByClassName('modal');

  function showModal(cb) {
    that.onClose = cb;
    m[0].style.display = 'block';
  }

  function hideModal(event) {
    if (that.onClose) {
      that.onClose(event.target.id);
    }
    m[0].style.display = 'none';
  }

  _.prototype.show = showModal;

  var modalButtons = document.getElementsByClassName('modal-button');
  for (var i = 0; i < modalButtons.length; i++) {
    modalButtons[i].addEventListener('click', hideModal);
  }
}());
