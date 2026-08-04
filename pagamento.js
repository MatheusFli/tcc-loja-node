const params = new URLSearchParams(window.location.search);
const idPedido = params.get('pedido');

if (!idPedido) {
  window.location.href = 'index.html';
}

document.getElementById('codigo-pedido').innerText = `#${idPedido}`;

function copiarChave() {
  const chave = document.getElementById('chave-pix').innerText;
  navigator.clipboard.writeText(chave).then(() => {
    const btn = document.querySelector('.btn-copiar');
    btn.innerHTML = '<i class="bi bi-check-lg"></i> Copiado!';
    setTimeout(() => {
      btn.innerHTML = '<i class="bi bi-clipboard"></i> Copiar';
    }, 2000);
  });
}