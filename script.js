let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarPalpite() {
    const palpite = parseInt(document.getElementById('guess').value);
    tentativas++;

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        document.getElementById('mensagem').textContent = 'Por favor, digite um número entre 1 e 100!';
        return;
    }

    if (palpite === numeroSecreto) {
        document.getElementById('mensagem').style.color = 'green';
        document.getElementById('mensagem').textContent = `Parabéns! Você acertou em ${tentativas} tentativas!`;
        document.getElementById('reiniciar').style.display = 'inline-block';
    } else if (palpite < numeroSecreto) {
        document.getElementById('mensagem').style.color = 'blue';
        document.getElementById('mensagem').textContent = 'Tente um número maior!';
    } else {
        document.getElementById('mensagem').style.color = 'blue';
        document.getElementById('mensagem').textContent = 'Tente um número menor!';
    }
}

function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    document.getElementById('guess').value = '';
    document.getElementById('mensagem').textContent = '';
    document.getElementById('reiniciar').style.display = 'none';
}