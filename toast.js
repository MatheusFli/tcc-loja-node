function mostrarToast(mensagem, tipo = 'info') {
  let area = document.getElementById('toast-area');

  if (!area) {
    area = document.createElement('div');
    area.id = 'toast-area';
    document.body.appendChild(area);
  }

  const icones = {
    sucesso: 'bi-check-circle',
    erro: 'bi-x-circle',
    info: 'bi-info-circle'
  };

  const toast = document.createElement('div');
  toast.className = `toast toast-${tipo}`;
  toast.innerHTML = `<i class="bi ${icones[tipo] || icones.info}"></i><span></span>`;
  toast.querySelector('span').textContent = mensagem;

  area.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('toast-visivel'));

  setTimeout(() => {
    toast.classList.remove('toast-visivel');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function mostrarSucesso(mensagem) {
  mostrarToast(mensagem, 'sucesso');
}

function mostrarErro(mensagem) {
  mostrarToast(mensagem, 'erro');
}