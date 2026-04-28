// Banco de Dados fictício inicial
let players = [
    { name: "Erling Haaland", ger: 91, pot: 94 },
    { name: "Kylian Mbappé", ger: 91, pot: 92 },
    { name: "Jude Bellingham", ger: 87, pot: 91 }
];

let youthAcademy = [];

// Função para mudar de aba
function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Renderiza a lista de jogadores
function renderPlayers() {
    const list = document.getElementById('player-list');
    list.innerHTML = players.map(p => `
        <div class="player-card">
            <h3>${p.name}</h3>
            <p>Geral: <span class="ger-badge">${p.ger}</span></p>
            <p>Potencial: <strong>${p.pot}</strong></p>
        </div>
    `).join('');
}

// Cria jogador da base
function createYouthPlayer() {
    const name = document.getElementById('playerName').value;
    const ger = document.getElementById('playerGer').value;
    const pot = document.getElementById('playerPot').value;

    if(!name || !ger || !pot) return alert("Preencha todos os campos!");

    const newPlayer = { name, ger, pot };
    youthAcademy.push(newPlayer);
    
    const youthList = document.getElementById('youth-list');
    youthList.innerHTML += `
        <div class="player-card" style="border-left-color: #007bff;">
            <h3>${newPlayer.name} (Base)</h3>
            <p>Geral Inicial: <span class="ger-badge">${newPlayer.ger}</span></p>
            <p>Potencial: <strong>${newPlayer.pot}</strong></p>
        </div>
    `;
    
    alert("Promovido para a base com sucesso!");
}

// Simulação de IA Tática
function generateIATactic() {
    const style = document.getElementById('tacticStyle').value;
    const responseBox = document.getElementById('ai-response');
    
    let analysis = "";

    switch(style) {
        case 'press':
            analysis = "<strong>Análise da IA:</strong> Para Pressão Alta, ajuste a profundidade da linha defensiva para 75. Instrua seus atacantes a 'Pressionar Linha Defensiva'. Ideal para jogadores com Fôlego > 80.";
            break;
        case 'bus':
            analysis = "<strong>Análise da IA:</strong> Estacionar o ônibus exige formação 5-4-1. Ajuste a amplitude para 30. Use 'Ficar na Defesa' para os volantes. Foco total em jogadores com Força e Intercepção.";
            break;
        case 'tiki':
            analysis = "<strong>Análise da IA:</strong> Posse de bola requer 4-3-3 Falso 9. Instrua os laterais a 'Inverter'. Use passes curtos e largura 40. Recomendado jogadores com Visão > 85.";
            break;
        case 'counter':
            analysis = "<strong>Análise da IA:</strong> Contra-ataque pede 4-4-2. Lançamentos longos ativados. Pontas devem 'Ficar no Ataque'. Busque jogadores com Velocidade > 90.";
            break;
    }

    responseBox.innerHTML = analysis;
}

// Inicializar
renderPlayers();
