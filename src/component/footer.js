window.addEventListener('load', function() {
    var contentHeight = document.querySelector('.content').offsetHeight;
    var windowHeight = window.innerHeight;
    var footer = document.querySelector('footer');
  
    if (contentHeight < windowHeight) {
      footer.style.position = 'fixed';
      footer.style.bottom = 0;
    }
  });