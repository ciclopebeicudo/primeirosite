const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); 
});

document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("mostrarFoto");
  const foto = document.getElementById("fotoContainer");

  botao.addEventListener("click", () => {
    foto.classList.add("visivel");

    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        criarCoracao();
      }, i * 200);
    }
  });

  function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");

    coracao.style.left = Math.random() * 80 + 10 + "%";
    coracao.style.top = Math.random() * 80 + 10 + "%";

    foto.appendChild(coracao);

    coracao.addEventListener("animationend", () => {
      coracao.remove();
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('quiz1');
  const correctAnswer = 'p1a'; // ID da alternativa correta

  form.addEventListener('change', function (e) {
    const selected = form.querySelector('input[name="pergunta1"]:checked');

    // Remove classes anteriores
    const labels = form.querySelectorAll('label');
    labels.forEach(label => label.classList.remove('correto', 'errado', 'animar'));

    const selectedLabel = form.querySelector(`label[for="${selected.id}"]`);

    if (selected.id === correctAnswer) {
      selectedLabel.classList.add('correto', 'animar');
    } else {
      selectedLabel.classList.add('errado', 'animar');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('p2');
  const animacao = document.getElementById('animacao');

  input.addEventListener('input', () => {
    const texto = input.value.trim().toLowerCase();

    if (texto === 'meu bem') {
      animacao.classList.add('show');
    } else {
      animacao.classList.remove('show');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const inputP3 = document.getElementById('p3');
  const animSenhaP3 = document.getElementById('animSenhaP3');

  inputP3.addEventListener('input', () => {
    const valor = inputP3.value;

    if (valor.length === 0) {
      animSenhaP3.classList.remove('show');
      animSenhaP3.textContent = '';
      inputP3.type = 'password'; 
    } else if (valor.length < 8) {
      animSenhaP3.classList.add('show');
      animSenhaP3.textContent = '🔒';
      inputP3.type = 'password'; 
    } else {
      animSenhaP3.classList.add('show');
      animSenhaP3.textContent = '🔓';
      inputP3.type = 'text'; 
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const inputData = document.getElementById('data');
  const emojiCoco = document.getElementById('emojiCoco');

  inputData.addEventListener('change', () => {
    const valor = inputData.value;
    console.log('Data selecionada:', valor); 

    if (valor === '2024-09-30') {
      emojiCoco.textContent = '💩';
      emojiCoco.classList.add('show');
    } else {
      emojiCoco.textContent = '';
      emojiCoco.classList.remove('show');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.checkbox-comida');
  const emojiContainer = document.getElementById('emojiComidas');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const emoji = checkbox.value;

      if (checkbox.checked) {
        const span = document.createElement('span');
        span.classList.add('emoji');
        span.textContent = emoji;
        span.dataset.id = emoji;
        emojiContainer.appendChild(span);
      } else {
        const spanToRemove = emojiContainer.querySelector(`.emoji[data-id="${emoji}"]`);
        if (spanToRemove) {
          spanToRemove.remove();
        }
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('p7');
  const resposta = document.getElementById('respostaSelect');

  const mensagens = {
    cobertas: "Um filme, cobertinha, pipoca e carinho? 💕",
    acai: "Açaí com você é melhor que qualquer sobremesa! 🍧",
    shopping: "Jantar elegante e olhares apaixonados 🥂",
    cozinhar: "Amor temperado na panela 🧑‍🍳❤️",
    viajar: "Descobrir o mundo do seu lado? Sim, por favor! ✈️",
    piquenique: "Comida, natureza e nós dois 💚",
    semcelular: "Presente inteiro, sem distrações 🥰",
    bandeclay: "Hmmm... Surpresa misteriosa no ar! 👀🎁"
  };

  select.addEventListener('change', () => {
    const valor = select.value;
    if (mensagens[valor]) {
      resposta.textContent = mensagens[valor];
      resposta.classList.add('show');
    } else {
      resposta.textContent = '';
      resposta.classList.remove('show');
    }
  });
});

document.getElementById('scrollDown').addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});
