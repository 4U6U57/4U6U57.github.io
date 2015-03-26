var toastGroupTemplate = document.querySelector('#toastGroup');
toastGroupTemplate.showToast = function() {
  document.querySelector('#toast').show();
}

function turnPage(page) {
  document.querySelector('core-animated-pages').selected = page;
}
