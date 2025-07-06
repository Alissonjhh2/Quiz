# Página de Vendas - Quiz Pinterest

Uma página de vendas interativa em formato de quiz para promover serviços de gerenciamento do Pinterest no Fiverr.

## 🚀 Características

- **Quiz Interativo**: 6 perguntas personalizadas para identificar o perfil do usuário
- **Design Moderno**: Interface responsiva e atrativa
- **Resultados Personalizados**: Análise baseada nas respostas do usuário
- **Otimizado para Conversão**: Foco em gerar leads para o serviço do Fiverr

## 📁 Estrutura dos Arquivos

```
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica do quiz
└── README.md           # Este arquivo
```

## 🎯 Como Personalizar

### 1. Link do Fiverr
Para adicionar o link do seu serviço no Fiverr:

1. Abra o arquivo `index.html`
2. Localize a linha 89 (dentro da seção CTA):
```html
<a href="#" class="cta-button" id="ctaButton">
```
3. Substitua `#` pelo link do seu serviço no Fiverr:
```html
<a href="https://www.fiverr.com/seu-usuario/seu-servico" class="cta-button" id="ctaButton">
```

### 2. Personalizar Perguntas
Para modificar as perguntas do quiz, edite o arquivo `script.js`:

1. Localize a seção `quizData.questions`
2. Modifique as perguntas e opções conforme necessário
3. Ajuste a lógica de análise em `analyzeResults()` se necessário

### 3. Personalizar Resultados
Para modificar as mensagens de resultado:

1. No arquivo `script.js`, localize a função `displayResults()`
2. Edite as mensagens para cada perfil (beginner, struggling, intermediate, advanced)

## 🎨 Personalização Visual

### Cores
As cores principais podem ser alteradas no arquivo `styles.css`:
- Cor primária: `#e60023` (vermelho Pinterest)
- Gradiente de fundo: `#667eea` para `#764ba2`
- Cor de destaque: `#f6ad55`

### Fontes
A página usa a fonte Inter do Google Fonts. Para alterar:
1. Modifique o link no `index.html`
2. Atualize `font-family` no CSS

## 📱 Responsividade

A página é totalmente responsiva e funciona bem em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🚀 Como Usar

1. **Local**: Abra `index.html` em qualquer navegador
2. **Online**: Faça upload dos arquivos para seu servidor web
3. **Hospedagem**: Pode ser hospedado em qualquer serviço (Netlify, Vercel, etc.)

## 📊 Funcionalidades do Quiz

### Perguntas Incluídas:
1. Uso atual do Pinterest
2. Frequência de publicação
3. Otimização SEO
4. Experiência com especialistas
5. Objetivos principais
6. Satisfação com resultados

### Perfis Identificados:
- **Beginner**: Iniciantes sem estratégia
- **Struggling**: Pessoas com dificuldades
- **Intermediate**: Usuários com base sólida
- **Advanced**: Usuários experientes

## 💡 Dicas de Otimização

1. **Teste A/B**: Experimente diferentes perguntas e mensagens
2. **Analytics**: Adicione Google Analytics para rastrear conversões
3. **SEO**: Otimize meta tags para melhor indexação
4. **Velocidade**: Comprima imagens se adicionar elementos visuais

## 🔧 Suporte

Para dúvidas ou personalizações adicionais, consulte a documentação ou entre em contato.

---

**Nota**: Lembre-se de substituir o link do Fiverr antes de usar a página em produção! 