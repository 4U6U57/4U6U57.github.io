var toastGroupTemplate = document.querySelector('#toastGroup');
toastGroupTemplate.showToast = function() {
  document.querySelector('#toast').show();
}

function pageZero(){
  var c = document.querySelector('core-animated-pages');
  c.selected = 0;
}

function pageOne(){
  var c = document.querySelector('core-animated-pages');
  c.selected = 1;
}

function pageTwo(){
  var c = document.querySelector('core-animated-pages');
  c.selected = 2;
}