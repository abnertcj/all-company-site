(function () {
  // Número e mensagem do WhatsApp (altere aqui se precisar)
  var numero = '5512997038767';
  var mensagem = 'Olá Valdemir, gostaria de solicitar um orçamento, peguei seu contato pelo instagram da empresa de vocês. ';
  var linkWhatsApp = 'https://api.whatsapp.com/send?phone=' + numero + '&text=' + encodeURIComponent(mensagem);

  document.querySelectorAll('[data-whatsapp]').forEach(function (el) {
    el.setAttribute('href', linkWhatsApp);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });

  // Menu mobile
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('menu');
  function fechar() {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  }
  toggle.addEventListener('click', function () {
    var aberto = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    toggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', fechar); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });

  // Ano no rodapé
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
