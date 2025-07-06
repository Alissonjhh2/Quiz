// Sistema de idiomas
const textos = {
    pt: {
        // Logo
        logoText: "Pinterest Quiz",
        
        // Títulos principais
        mainTitle: "Descubra se você está perdendo tráfego no Pinterest (e como corrigir isso agora)",
        welcomeText: "Leva menos de 1 minuto! Responda esse quiz rápido e veja se você está deixando de atrair visitantes grátis para seu site com o Pinterest.",
        
        // Benefícios
        benefit1: "Aumento real de tráfego orgânico",
        benefit2: "SEO otimizado para pins e perfil",
        benefit3: "Estratégia profissional de crescimento",
        
        // Botão inicial
        startButtonText: "Começar Quiz",
        
        // Título dos resultados
        resultsTitle: "Seu Resultado",
        
        // CTA final
        ctaTitle: "Pronto para transformar seu Pinterest?",
        ctaText1: "Analisando suas respostas, parece que seu Pinterest tem um grande potencial não aproveitado.",
        ctaText2: "A boa notícia? Você pode mudar isso agora com a ajuda de um especialista.",
        ctaButtonText: "Sim! Quero otimizar meu Pinterest agora",
        
        // Footer
        footerText: "© 2024 Pinterest Quiz. Todos os direitos reservados.",
        
        // Labels dos resultados
        problemLabel: "O problema:",
        solutionLabel: "A solução:",
        
        // Navegação
        nextButton: "Próxima",
        resultButton: "Ver Resultado",
        
        // Perguntas do quiz
        questions: [
            {
                question: "Você já usa o Pinterest para atrair visitantes para seu site, blog ou loja?",
                options: [
                    "Sim, mas não tenho estratégia clara",
                    "Não, ainda não uso o Pinterest",
                    "Sim, e tenho uma estratégia bem definida",
                    "Já tentei, mas não tive resultados"
                ]
            },
            {
                question: "Com que frequência você publica novos pins?",
                options: [
                    "Diariamente ou várias vezes por semana",
                    "Uma vez por semana",
                    "Raramente ou nunca",
                    "Não sei como criar pins atrativos"
                ]
            },
            {
                question: "Seus pins são otimizados com técnicas de SEO?",
                options: [
                    "Sim, uso palavras-chave e descrições otimizadas",
                    "Não, não sei como fazer isso",
                    "Às vezes, mas não tenho certeza se está certo",
                    "O que é SEO para Pinterest?"
                ]
            },
            {
                question: "Você já contratou alguém especialista para te ajudar com o Pinterest?",
                options: [
                    "Não, sempre tentei fazer sozinho",
                    "Sim, mas não tive os resultados esperados",
                    "Sim, e foi muito positivo",
                    "Não tenho orçamento para isso"
                ]
            },
            {
                question: "Qual seu maior objetivo com o Pinterest?",
                options: [
                    "Aumentar tráfego para meu site/blog",
                    "Vender mais produtos",
                    "Construir uma comunidade engajada",
                    "Não tenho objetivos claros"
                ]
            },
            {
                question: "Como você se sente sobre seus resultados atuais no Pinterest?",
                options: [
                    "Frustrado - não consigo gerar tráfego",
                    "Satisfeito, mas quero melhorar",
                    "Confuso - não sei se estou fazendo certo",
                    "Não tenho resultados para avaliar"
                ]
            }
        ],
        
        // Resultados personalizados
        results: {
            beginner: {
                title: "Você está perdendo oportunidades valiosas!",
                message: "Seu resultado mostra que você ainda não está aproveitando todo o potencial do Pinterest. A maioria dos empreendedores como você perde tráfego valioso por falta de estratégia profissional."
            },
            struggling: {
                title: "Você precisa de ajuda profissional!",
                message: "Seu resultado indica que você está tentando, mas não está conseguindo os resultados desejados. Isso é muito comum - a maioria das pessoas não consegue otimizar o Pinterest sozinha."
            },
            intermediate: {
                title: "Você pode melhorar muito mais!",
                message: "Você tem uma base sólida, mas ainda está deixando dinheiro na mesa. Com a estratégia certa, você pode multiplicar seus resultados no Pinterest."
            },
            advanced: {
                title: "Você está no caminho certo!",
                message: "Parabéns! Você já tem uma boa estratégia, mas ainda pode otimizar ainda mais. Imagine o que um especialista pode fazer para acelerar seus resultados."
            }
        }
    },
    
    en: {
        // Logo
        logoText: "Pinterest Quiz",
        
        // Main titles
        mainTitle: "Discover if you're losing Pinterest traffic (and how to fix it now)",
        welcomeText: "Takes less than 1 minute! Answer this quick quiz and see if you're missing out on free visitors to your website with Pinterest.",
        
        // Benefits
        benefit1: "Real increase in organic traffic",
        benefit2: "SEO optimized for pins and profile",
        benefit3: "Professional growth strategy",
        
        // Start button
        startButtonText: "Start Quiz",
        
        // Results title
        resultsTitle: "Your Result",
        
        // Final CTA
        ctaTitle: "Ready to transform your Pinterest?",
        ctaText1: "Analyzing your answers, it seems your Pinterest has great untapped potential.",
        ctaText2: "The good news? You can change this now with the help of an expert.",
        ctaButtonText: "Yes! I want to optimize my Pinterest now",
        
        // Footer
        footerText: "© 2024 Pinterest Quiz. All rights reserved.",
        
        // Result labels
        problemLabel: "The problem:",
        solutionLabel: "The solution:",
        
        // Navigation
        nextButton: "Next",
        resultButton: "See Result",
        
        // Quiz questions
        questions: [
            {
                question: "Do you already use Pinterest to attract visitors to your website, blog or store?",
                options: [
                    "Yes, but I don't have a clear strategy",
                    "No, I don't use Pinterest yet",
                    "Yes, and I have a well-defined strategy",
                    "I've tried, but didn't get results"
                ]
            },
            {
                question: "How often do you publish new pins?",
                options: [
                    "Daily or several times a week",
                    "Once a week",
                    "Rarely or never",
                    "I don't know how to create attractive pins"
                ]
            },
            {
                question: "Are your pins optimized with SEO techniques?",
                options: [
                    "Yes, I use keywords and optimized descriptions",
                    "No, I don't know how to do this",
                    "Sometimes, but I'm not sure if it's right",
                    "What is SEO for Pinterest?"
                ]
            },
            {
                question: "Have you ever hired an expert to help you with Pinterest?",
                options: [
                    "No, I've always tried to do it myself",
                    "Yes, but I didn't get the expected results",
                    "Yes, and it was very positive",
                    "I don't have budget for this"
                ]
            },
            {
                question: "What's your main goal with Pinterest?",
                options: [
                    "Increase traffic to my website/blog",
                    "Sell more products",
                    "Build an engaged community",
                    "I don't have clear goals"
                ]
            },
            {
                question: "How do you feel about your current Pinterest results?",
                options: [
                    "Frustrated - I can't generate traffic",
                    "Satisfied, but I want to improve",
                    "Confused - I don't know if I'm doing it right",
                    "I don't have results to evaluate"
                ]
            }
        ],
        
        // Personalized results
        results: {
            beginner: {
                title: "You're missing valuable opportunities!",
                message: "Your result shows that you're not yet taking advantage of Pinterest's full potential. Most entrepreneurs like you lose valuable traffic due to lack of professional strategy."
            },
            struggling: {
                title: "You need professional help!",
                message: "Your result indicates that you're trying, but not achieving the desired results. This is very common - most people can't optimize Pinterest on their own."
            },
            intermediate: {
                title: "You can improve much more!",
                message: "You have a solid foundation, but you're still leaving money on the table. With the right strategy, you can multiply your Pinterest results."
            },
            advanced: {
                title: "You're on the right track!",
                message: "Congratulations! You already have a good strategy, but you can optimize even more. Imagine what an expert can do to accelerate your results."
            }
        }
    },
    
    es: {
        // Logo
        logoText: "Pinterest Quiz",
        
        // Títulos principales
        mainTitle: "Descubre si estás perdiendo tráfico en Pinterest (y cómo solucionarlo ahora)",
        welcomeText: "¡Toma menos de 1 minuto! Responde este quiz rápido y ve si estás perdiendo visitantes gratuitos para tu sitio web con Pinterest.",
        
        // Beneficios
        benefit1: "Aumento real de tráfico orgánico",
        benefit2: "SEO optimizado para pins y perfil",
        benefit3: "Estrategia profesional de crecimiento",
        
        // Botón inicial
        startButtonText: "Comenzar Quiz",
        
        // Título de resultados
        resultsTitle: "Tu Resultado",
        
        // CTA final
        ctaTitle: "¿Listo para transformar tu Pinterest?",
        ctaText1: "Analizando tus respuestas, parece que tu Pinterest tiene un gran potencial sin aprovechar.",
        ctaText2: "¿La buena noticia? Puedes cambiar esto ahora con la ayuda de un experto.",
        ctaButtonText: "¡Sí! Quiero optimizar mi Pinterest ahora",
        
        // Footer
        footerText: "© 2024 Pinterest Quiz. Todos los derechos reservados.",
        
        // Labels de resultados
        problemLabel: "El problema:",
        solutionLabel: "La solución:",
        
        // Navegación
        nextButton: "Siguiente",
        resultButton: "Ver Resultado",
        
        // Preguntas del quiz
        questions: [
            {
                question: "¿Ya usas Pinterest para atraer visitantes a tu sitio web, blog o tienda?",
                options: [
                    "Sí, pero no tengo una estrategia clara",
                    "No, aún no uso Pinterest",
                    "Sí, y tengo una estrategia bien definida",
                    "Lo he intentado, pero no tuve resultados"
                ]
            },
            {
                question: "¿Con qué frecuencia publicas nuevos pins?",
                options: [
                    "Diariamente o varias veces por semana",
                    "Una vez por semana",
                    "Raramente o nunca",
                    "No sé cómo crear pins atractivos"
                ]
            },
            {
                question: "¿Tus pins están optimizados con técnicas de SEO?",
                options: [
                    "Sí, uso palabras clave y descripciones optimizadas",
                    "No, no sé cómo hacer esto",
                    "A veces, pero no estoy seguro si está bien",
                    "¿Qué es SEO para Pinterest?"
                ]
            },
            {
                question: "¿Ya has contratado a alguien experto para ayudarte con Pinterest?",
                options: [
                    "No, siempre he intentado hacerlo solo",
                    "Sí, pero no tuve los resultados esperados",
                    "Sí, y fue muy positivo",
                    "No tengo presupuesto para esto"
                ]
            },
            {
                question: "¿Cuál es tu mayor objetivo con Pinterest?",
                options: [
                    "Aumentar tráfico para mi sitio web/blog",
                    "Vender más productos",
                    "Construir una comunidad comprometida",
                    "No tengo objetivos claros"
                ]
            },
            {
                question: "¿Cómo te sientes sobre tus resultados actuales en Pinterest?",
                options: [
                    "Frustrado - no puedo generar tráfico",
                    "Satisfecho, pero quiero mejorar",
                    "Confundido - no sé si lo estoy haciendo bien",
                    "No tengo resultados para evaluar"
                ]
            }
        ],
        
        // Resultados personalizados
        results: {
            beginner: {
                title: "¡Estás perdiendo oportunidades valiosas!",
                message: "Tu resultado muestra que aún no estás aprovechando todo el potencial de Pinterest. La mayoría de emprendedores como tú pierden tráfico valioso por falta de estrategia profesional."
            },
            struggling: {
                title: "¡Necesitas ayuda profesional!",
                message: "Tu resultado indica que estás intentando, pero no estás logrando los resultados deseados. Esto es muy común - la mayoría de personas no pueden optimizar Pinterest por su cuenta."
            },
            intermediate: {
                title: "¡Puedes mejorar mucho más!",
                message: "Tienes una base sólida, pero aún estás dejando dinero sobre la mesa. Con la estrategia correcta, puedes multiplicar tus resultados en Pinterest."
            },
            advanced: {
                title: "¡Estás en el camino correcto!",
                message: "¡Felicitaciones! Ya tienes una buena estrategia, pero aún puedes optimizar más. Imagina lo que un experto puede hacer para acelerar tus resultados."
            }
        }
    }
};

// Dados do quiz (estrutura original mantida para compatibilidade)
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
let currentLanguage = 'pt'; // Idioma padrão

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
                    ${currentQuestion === quizData.questions.length - 1 ? textos[currentLanguage].resultButton : textos[currentLanguage].nextButton}
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
    const langTexts = textos[currentLanguage];
    const result = langTexts.results[profile];
    
    // Obter textos traduzidos para "O problema" e "A solução"
    const problemLabel = getProblemLabel();
    const solutionLabel = getSolutionLabel();
    
    // Criar mensagem personalizada baseada no idioma atual
    const message = `
        <h3>${result.title}</h3>
        <p>${result.message}</p>
        <p><strong>${problemLabel}</strong> ${getProblemText(profile)}</p>
        <p><strong>${solutionLabel}</strong> ${getSolutionText(profile)}</p>
    `;
    
    resultsMessage.innerHTML = message;
}

// Função para obter texto do problema baseado no perfil e idioma
function getProblemText(profile) {
    const problems = {
        pt: {
            beginner: "Você não tem tempo ou conhecimento para criar uma estratégia eficaz no Pinterest.",
            struggling: "Você está perdendo tempo e dinheiro tentando fazer algo que requer expertise especializada.",
            intermediate: "Você está fazendo o básico, mas não está otimizando para máximo impacto.",
            advanced: "Você está fazendo bem, mas pode fazer ainda melhor com ajuda profissional."
        },
        en: {
            beginner: "You don't have time or knowledge to create an effective Pinterest strategy.",
            struggling: "You're wasting time and money trying to do something that requires specialized expertise.",
            intermediate: "You're doing the basics, but not optimizing for maximum impact.",
            advanced: "You're doing well, but can do even better with professional help."
        },
        es: {
            beginner: "No tienes tiempo o conocimiento para crear una estrategia efectiva en Pinterest.",
            struggling: "Estás perdiendo tiempo y dinero intentando hacer algo que requiere experiencia especializada.",
            intermediate: "Estás haciendo lo básico, pero no optimizando para máximo impacto.",
            advanced: "Lo estás haciendo bien, pero puedes hacer aún mejor con ayuda profesional."
        }
    };
    
    return problems[currentLanguage][profile];
}

// Função para obter texto da solução baseado no perfil e idioma
function getSolutionText(profile) {
    const solutions = {
        pt: {
            beginner: "Um especialista pode fazer isso por você, gerando tráfego orgânico real enquanto você foca no seu negócio.",
            struggling: "Um especialista pode transformar sua presença no Pinterest e gerar o tráfego que você precisa.",
            intermediate: "Um especialista pode levar sua estratégia ao próximo nível e acelerar seus resultados.",
            advanced: "Um especialista pode otimizar sua estratégia atual e maximizar seus resultados."
        },
        en: {
            beginner: "An expert can do this for you, generating real organic traffic while you focus on your business.",
            struggling: "An expert can transform your Pinterest presence and generate the traffic you need.",
            intermediate: "An expert can take your strategy to the next level and accelerate your results.",
            advanced: "An expert can optimize your current strategy and maximize your results."
        },
        es: {
            beginner: "Un experto puede hacer esto por ti, generando tráfego orgánico real mientras te enfocas en tu negocio.",
            struggling: "Un experto puede transformar tu presencia en Pinterest y generar el tráfego que necesitas.",
            intermediate: "Un experto puede llevar tu estrategia al siguiente nivel y acelerar tus resultados.",
            advanced: "Un experto puede optimizar tu estrategia actual y maximizar tus resultados."
        }
    };
    
    return solutions[currentLanguage][profile];
}

// Função para obter label "O problema" traduzido
function getProblemLabel() {
    return textos[currentLanguage].problemLabel;
}

// Função para obter label "A solução" traduzido
function getSolutionLabel() {
    return textos[currentLanguage].solutionLabel;
}

// Função para detectar idioma do navegador
function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.split('-')[0]; // Pega apenas o código principal (pt, en, es)
    
    // Verifica se o idioma é suportado
    if (textos[langCode]) {
        return langCode;
    }
    
    // Se não for suportado, retorna português como padrão
    return 'pt';
}

// Função para aplicar traduções
function applyTranslations(lang) {
    const langTexts = textos[lang];
    
    // Logo
    document.getElementById('logoText').textContent = langTexts.logoText;
    
    // Aplicar traduções aos elementos principais
    document.getElementById('mainTitle').textContent = langTexts.mainTitle;
    document.getElementById('welcomeText').textContent = langTexts.welcomeText;
    
    // Benefícios
    document.getElementById('benefit1').textContent = langTexts.benefit1;
    document.getElementById('benefit2').textContent = langTexts.benefit2;
    document.getElementById('benefit3').textContent = langTexts.benefit3;
    
    // Botão inicial
    document.getElementById('startButtonText').textContent = langTexts.startButtonText;
    
    // Título dos resultados
    document.getElementById('resultsTitle').textContent = langTexts.resultsTitle;
    
    // CTA final
    document.getElementById('ctaTitle').textContent = langTexts.ctaTitle;
    document.getElementById('ctaText1').textContent = langTexts.ctaText1;
    document.getElementById('ctaText2').innerHTML = `<strong>${langTexts.ctaText2}</strong>`;
    document.getElementById('ctaButtonText').textContent = langTexts.ctaButtonText;
    
    // Footer
    document.getElementById('footerText').textContent = langTexts.footerText;
    
    // Atualizar dados do quiz com o idioma selecionado
    quizData.questions = langTexts.questions.map((q, index) => ({
        id: index + 1,
        question: q.question,
        options: q.options.map((option, optIndex) => ({
            text: option,
            value: getOriginalValue(index, optIndex) // Mantém os valores originais para compatibilidade
        }))
    }));
}

// Função para mapear valores originais (mantém compatibilidade)
function getOriginalValue(questionIndex, optionIndex) {
    const originalValues = [
        ['basic', 'beginner', 'advanced', 'struggling'],
        ['frequent', 'weekly', 'rarely', 'clueless'],
        ['optimized', 'not_optimized', 'sometimes', 'clueless'],
        ['never', 'bad_experience', 'good_experience', 'budget'],
        ['traffic', 'sales', 'engagement', 'no_goals'],
        ['frustrated', 'satisfied', 'confused', 'no_results']
    ];
    return originalValues[questionIndex][optionIndex];
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Detectar e aplicar idioma
    currentLanguage = detectLanguage();
    applyTranslations(currentLanguage);
    
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