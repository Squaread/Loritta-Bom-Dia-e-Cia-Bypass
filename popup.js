// Funcao de limpar a frase removendo caracteres invisiveis
function limparTexto(texto) {
  const caracteresInvisiveis = /[\u200B-\u200D\uFEFF]/g; // Limpeza
  return texto.replace(caracteresInvisiveis, ''); // Retornar com a frase limpa
}

// Funcao do botao de limpar
function limparFrase_Botao() {
  navigator.clipboard.readText() 
    .then((textoCopiado) => { // Capturar texto da area de transferencia
      const textoLimpo = limparTexto(textoCopiado); // Cbamar funcao [LimparTexto]
      return navigator.clipboard.writeText(textoLimpo).then(() => { // Pegar a frase limpa e copia-la na area de transferencia
        document.getElementById('mensagem').style.display = 'block'; // Exibir mensagem
      });
    })
}

// Evento de clique
document.getElementById('limpar-btn').addEventListener('click', limparFrase_Botao);
