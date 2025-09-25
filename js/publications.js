(function () {
  var tabs = document.querySelectorAll('.allteam');
  var cards = document.querySelectorAll('.pub-card');

  function setActive(btn){
    tabs.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  function filter(type){
    cards.forEach(card => {
      var show = card.getAttribute('data-type') === type;
      card.style.display = show ? '' : 'none';
    });
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', function(){
      setActive(btn);
      filter(btn.getAttribute('data-filter'));
    });
  });

  // estado inicial
  document.querySelector('.allteam[data-filter="article"]').click();
})();
