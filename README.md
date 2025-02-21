# 🎁 Amigo Secreto

Um aplicativo web simples e interativo para realizar sorteios de amigo secreto. Desenvolvido com HTML, CSS e JavaScript vanilla, este projeto permite adicionar participantes, remover participantes e realizar o sorteio de forma aleatória.

## 📋 Índice

- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Usar](#-como-usar)
- [Personalização](#-personalização)
- [Possíveis Melhorias](#-possíveis-melhorias)

## ✨ Funcionalidades

- Adicionar nomes de participantes
- Remover participantes individualmente
- Realizar sorteio aleatório
- Interface responsiva e amigável
- Validação de entradas vazias
- Prevenção de nomes duplicados
- Suporte para tecla Enter ao adicionar nomes

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS para personalização)
- JavaScript (ES6+)
- Google Fonts (Inter e Merriweather)

## 📁 Estrutura do Projeto

```
amigo-secreto/
│
├── index.html
├── style.css
├── app.js
├── assets/
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md
```

## 🎮 Como Usar

1. **Instalação**
   - Clone este repositório ou faça o download dos arquivos
   - Não é necessário instalar dependências

2. **Executando o Projeto**
   - Abra o arquivo `index.html` em um navegador web moderno
   - Ou use um servidor local (recomendado):
     - Se tiver o VS Code, use a extensão "Live Server"
     - Ou use qualquer servidor HTTP local de sua preferência

3. **Utilizando o Aplicativo**
   - Digite um nome no campo de texto
   - Clique em "Adicionar" ou pressione Enter
   - Repita para adicionar mais participantes
   - Use o "✕" para remover participantes se necessário
   - Clique em "Sortear amigo" para realizar o sorteio

## 🎨 Personalização

O projeto utiliza variáveis CSS que podem ser facilmente personalizadas no arquivo `style.css`:

```css
:root {
    --color-primary: #4B69FD;    /* Cor principal */
    --color-secondary: #FFF9EB;  /* Cor de fundo secundária */
    --color-tertiary: #C4C4C4;  /* Cor dos botões secundários */
    --color-button: #fe652b;    /* Cor do botão principal */
    --color-button-hover: #e55720; /* Cor do hover do botão */
    --color-text: #444444;      /* Cor do texto */
    --color-white: #FFFFFF;     /* Cor branca */
}
```

## 🚀 Possíveis Melhorias

- [ ] Adicionar persistência local (LocalStorage)
- [ ] Implementar função de desfazer
- [ ] Adicionar animação no sorteio
- [ ] Permitir edição de nomes
- [ ] Exportar lista de participantes
- [ ] Adicionar modo escuro

## 📝 Notas Adicionais

- O projeto foi desenvolvido com foco em simplicidade e usabilidade
- Compatível com todos os navegadores modernos
- Responsivo para diferentes tamanhos de tela
- Não requer conexão com internet (exceto para carregar as fontes)

## ⚠️ Requisitos Mínimos

- Navegador web moderno com suporte a ES6
- JavaScript habilitado
- Resolução mínima recomendada: 320px (mobile)