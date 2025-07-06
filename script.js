// Dados do quiz
const quizData = {
    questions: [
        {
            id: 1,
            question: "Você já usa o Pinterest para atrair visitantes para seu site, blog ou loja?",
            options: [
                { text: "Sim, mas não tenho estratégia clara", value: "basic" },
                { text: "Não, ainda não uso o Pinterest", value: "beginner" },
                { text: "Sim, e tenho uma estratégia bem definida", value: "advanced" },
                { text: "Já tentei, mas não tive resultados", value: "struggling" }
            ]
        },
        {
            id: 2,
            question: "Com que frequência você publica novos pins?",
            options: [
                { text: "Diariamente ou várias vezes por semana", value: "frequent" },
                { text: "Uma vez por semana", value: "weekly" },
                { text: "Raramente ou nunca", value: "rarely" },
                { text: "Não sei como criar pins atrativos", value: "clueless" }
            ]
        },
        {
            id: 3,
            question: "Seus pins são otimizados com técnicas de SEO?",
            options: [
                { text: "Sim, uso palavras-chave e descrições otimizadas", value: "optimized" },
                { text: "Não, não sei como fazer isso", value: "not_optimized" },
                { text: "Às vezes, mas não tenho certeza se está certo", value: "sometimes" },
                { text: "O que é SEO para Pinterest?", value: "clueless" }
            ]
        },
        {
            id: 4,
            question: "Você já contratou alguém especialista para te ajudar com o Pinterest?",
            options: [
                { text: "Não, sempre tentei fazer sozinho", value: "never" },
                { text: "Sim, mas não tive os resultados esperados", value: "bad_experience" },
                { text: "Sim, e foi muito positivo", value: "good_experience" },
                { text: "Não tenho orçamento para isso", value: "budget" }
            ]
        },
        {
            id: 5,
            question: "Qual seu maior objetivo com o Pinterest?",
            options: [
                { text: "Aumentar tráfego para meu site/blog", value: "traffic" },
                { text: "Vender mais produtos", value: "sales" },
                { text: "Construir uma comunidade engajada", value: "engagement" },
                { text: "Não tenho objetivos claros", value: "no_goals" }
            ]
        },
        {
            id: 6,
            question: "Como você se sente sobre seus resultados atuais no Pinterest?",
            options: [
                { text: "Frustrado - não consigo gerar tráfego", value: "frustrated" },
                { text: "Satisfeito, mas quero melhorar", value: "satisfied" },
                { text: "Confuso - não sei se estou fazendo certo", value: "confused" },
                { text: "Não tenho resultados para avaliar", value: "no_results" }
            ]
        }
    ]
};

// Estado do quiz
let currentQuestion = 0;
let answers = [];
let quizStarted = false;

// Elementos DOM
const welcomeScreen = document.getElementById('welcomeScreen');
const quizQuestions = document.getElementById('quizQuestions');
const resultsScreen = document.getElementById('resultsScreen');
const questionContainer = document.getElementById('questionContainer');
const progressFill = document.getElementById('progressFill');
const resultsMessage = document.getElementById('resultsMessage');

// Iniciar quiz
function startQuiz() {
    quizStarted = true;
    welcomeScreen.style.display = 'none';
    quizQuestions.style.display = 'block';
    showQuestion();
}

// Mostrar pergunta atual
function showQuestion() {
    const question = quizData.questions[currentQuestion];
    
    // Atualizar barra de progresso
    const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;
    progressFill.style.width = progress + '%';
    
    // Criar HTML da pergunta
    const questionHTML = `
        <div class="question">
            <h2>${question.question}</h2>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" onclick="selectOption(${index})" data-value="${option.value}">
                        ${option.text}
                    </div>
                `).join('')}
            </div>
            <div class="navigation">
                <div></div>
                <button class="nav-btn primary" onclick="nextQuestion()" id="nextBtn" disabled>
                    ${currentQuestion === quizData.questions.length - 1 ? 'Ver Resultado' : 'Próxima'}
                </button>
            </div>
        </div>
    `;
    
    questionContainer.innerHTML = questionHTML;
}

// Selecionar opção
function selectOption(optionIndex) {
    // Remover seleção anterior
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Selecionar nova opção
    options[optionIndex].classList.add('selected');
    
    // Habilitar botão próximo
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.disabled = false;
    
    // Salvar resposta
    const question = quizData.questions[currentQuestion];
    answers[currentQuestion] = question.options[optionIndex].value;
}

// Próxima pergunta
function nextQuestion() {
    if (currentQuestion < quizData.questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
}



// Mostrar resultados
function showResults() {
    quizQuestions.style.display = 'none';
    resultsScreen.style.display = 'block';
    
    const result = analyzeResults();
    displayResults(result);
}

// Analisar resultados
function analyzeResults() {
    const answerCounts = {};
    answers.forEach(answer => {
        answerCounts[answer] = (answerCounts[answer] || 0) + 1;
    });
    
    // Determinar perfil do usuário
    if (answerCounts['beginner'] || answerCounts['clueless'] || answerCounts['no_goals']) {
        return 'beginner';
    } else if (answerCounts['frustrated'] || answerCounts['struggling'] || answerCounts['bad_experience']) {
        return 'struggling';
    } else if (answerCounts['advanced'] || answerCounts['optimized'] || answerCounts['good_experience']) {
        return 'advanced';
    } else {
        return 'intermediate';
    }
}

// Exibir resultados personalizados
function displayResults(profile) {
    const messages = {
        beginner: {
            title: "Você está perdendo oportunidades valiosas!",
            message: `
                <h3>Você está perdendo oportunidades valiosas!</h3>
                <p>Seu resultado mostra que você ainda não está aproveitando todo o potencial do Pinterest. A maioria dos empreendedores como você perde tráfego valioso por falta de estratégia profissional.</p>
                <p><strong>O problema:</strong> Você não tem tempo ou conhecimento para criar uma estratégia eficaz no Pinterest.</p>
                <p><strong>A solução:</strong> Um especialista pode fazer isso por você, gerando tráfego orgânico real enquanto você foca no seu negócio.</p>
            `
        },
        struggling: {
            title: "Você precisa de ajuda profissional!",
            message: `
                <h3>Você precisa de ajuda profissional!</h3>
                <p>Seu resultado indica que você está tentando, mas não está conseguindo os resultados desejados. Isso é muito comum - a maioria das pessoas não consegue otimizar o Pinterest sozinha.</p>
                <p><strong>O problema:</strong> Você está perdendo tempo e dinheiro tentando fazer algo que requer expertise especializada.</p>
                <p><strong>A solução:</strong> Um especialista pode transformar sua presença no Pinterest e gerar o tráfego que você precisa.</p>
            `
        },
        intermediate: {
            title: "Você pode melhorar muito mais!",
            message: `
                <h3>Você pode melhorar muito mais!</h3>
                <p>Você tem uma base sólida, mas ainda está deixando dinheiro na mesa. Com a estratégia certa, você pode multiplicar seus resultados no Pinterest.</p>
                <p><strong>O problema:</strong> Você está fazendo o básico, mas não está otimizando para máximo impacto.</p>
                <p><strong>A solução:</strong> Um especialista pode levar sua estratégia ao próximo nível e acelerar seus resultados.</p>
            `
        },
        advanced: {
            title: "Você está no caminho certo!",
            message: `
                <h3>Você está no caminho certo!</h3>
                <p>Parabéns! Você já tem uma boa estratégia, mas ainda pode otimizar ainda mais. Imagine o que um especialista pode fazer para acelerar seus resultados.</p>
                <p><strong>O problema:</strong> Você está fazendo bem, mas pode fazer ainda melhor com ajuda profissional.</p>
                <p><strong>A solução:</strong> Um especialista pode otimizar sua estratégia atual e maximizar seus resultados.</p>
            `
        }
    };
    
    const result = messages[profile];
    resultsMessage.innerHTML = result.message;
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar efeitos de entrada
    const welcomeContent = document.querySelector('.welcome-content');
    welcomeContent.style.opacity = '0';
    welcomeContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        welcomeContent.style.transition = 'all 0.6s ease';
        welcomeContent.style.opacity = '1';
        welcomeContent.style.transform = 'translateY(0)';
    }, 100);
    
    // Melhorias para mobile
    preventZoomOnInput();
    addTouchOptimizations();
});

// Prevenir zoom em inputs (se houver no futuro)
function preventZoomOnInput() {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    window.scrollTo(0, 0);
                }, 100);
            }
        });
    });
}

// Otimizações para touch
function addTouchOptimizations() {
    // Prevenir seleção de texto em botões
    const buttons = document.querySelectorAll('button, .option, .cta-button');
    buttons.forEach(button => {
        button.style.webkitUserSelect = 'none';
        button.style.userSelect = 'none';
        button.style.webkitTouchCallout = 'none';
    });
    
    // Melhorar feedback visual em dispositivos touch
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
}

// Adicionar estilos de transição
const style = document.createElement('style');
style.textContent = `
    .welcome-content {
        transition: all 0.6s ease;
    }
    
    .quiz-questions, .results-screen {
        animation: fadeIn 0.5s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style); 