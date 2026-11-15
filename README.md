# 📻 Orbis Tech Kids FM

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-brightgreen?logo=github)](https://radioorbiskids.vml10.xyz/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Stream Status](https://img.shields.io/badge/Stream-AzuraCast%20Live-orange?logo=soundcharts)](https://radio.vml10.xyz/listen/orbis_kids_fm/radio.mp3)
[![i18n](https://img.shields.io/badge/Languages-PT%20|%20EN%20|%20ES-purple)](#-funcionalidades--arquitetura-web)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](SECURITY.md)

> **Conectando sonhos de Xique-Xique ao mundo da tecnologia, educação e inovação!**  
> Uma plataforma interativa de rádio web educativa projetada para inspirar crianças e jovens de comunidades ribeirinhas, sertanejas e de todo o Brasil a sonharem mais alto através da tecnologia e do conhecimento.

---

## 🌟 Sobre a Iniciativa

O **Orbis Tech Kids FM** nasceu no coração do sertão baiano, às margens do Rio São Francisco em **Xique-Xique - BA**, com um propósito claro: **democratizar o acesso ao conhecimento, à tecnologia e à esperança**.

Através de uma experiência sonora lúdica, unimos música de qualidade, dicas de ciência, tecnologia, inteligência artificial e mensagens educativas com personagens marcantes, transformando o entretenimento infantil em uma ferramenta poderosa de inclusão digital e impacto social.

🔗 **Ouça ao vivo agora:** [https://radioorbiskids.vml10.xyz](https://radioorbiskids.vml10.xyz)

---

## 🚀 Funcionalidades & Arquitetura Web

O projeto é construído como um frontend estático de alta performance, sem dependências pesadas, projetado para carregar instantaneamente até mesmo em conexões móveis limitadas:

- 🎵 **Player de Áudio Resiliente:** Integração contínua com streaming de áudio **AzuraCast** (`https://radio.vml10.xyz`), com controle de volume, status de reprodução e reconexão automática.
- 🌍 **Internacionalização (i18n):** Alternância dinâmica e instantânea em um clique entre **Português**, **Inglês** e **Espanhol**.
- 🌦️ **Clima & Geolocalização 100% Open-Source:** Widget de clima em tempo real alimentado pela API aberta da **Open-Meteo** e geolocalização reversa com zero chaves ou tokens privados expostos no cliente. Fallback inteligente para as coordenadas de Xique-Xique/BA.
- 🎙️ **Acessibilidade Universal (Web Speech API):** Botão nativo de leitura de tela em áudio que lê o conteúdo da página para crianças em fase de alfabetização ou pessoas com deficiência visual.
- 🧮 **Educação & Saúde Interativa:** Calculadora infantil/juvenil de IMC (Índice de Massa Corporal) acompanhada da tabela de referência da Organização Mundial da Saúde (OMS).
- 🎭 **Locução Interativa de Personagens:** Canal aberto para os ouvintes solicitarem alôs personalizados com vozes de personagens como *Peppa Pig, Shrek, Mickey, Pato Donald* e muito mais.
- 📱 **Mobile-First & Responsivo:** Layout adaptável com animações em CSS puro, efeitos visuais com partículas interativas e compatibilidade total com smartphones, tablets, smart TVs e PCs.

---

## 📂 Estrutura do Repositório

```text
├── index.html                   # Aplicação principal (Player Web, i18n, Clima, IMC, Acessibilidade)
├── biografia.html               # Biografia do idealizador do projeto
├── CNAME                        # Configuração de domínio customizado (radioorbiskids.vml10.xyz)
├── .github/
│   └── workflows/
│       └── validate.yml         # CI automatizada para validação de HTML e scanner de segurança
├── .gitignore                   # Exclusão de artefatos temporários de SO
├── LICENSE                      # Licença permissiva MIT
├── SECURITY.md                  # Política e diretrizes de reporte de segurança
└── README.md                    # Documentação oficial do projeto
```

---

## 💻 Como Executar Localmente

Como o projeto é desenvolvido em HTML5, CSS3 e JavaScript puro, não é necessário instalar dependências complexas:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/rivonildo/orbis-tech-kids-fm.git
   cd orbis-tech-kids-fm
   ```

2. **Abra em seu navegador:**
   - Basta abrir o arquivo `index.html` diretamente no seu navegador favorito, ou:
   - Inicie um servidor local rápido com Python:
     ```bash
     python3 -m http.server 8080
     ```
   - Acesse no navegador: `http://localhost:8080`

---

## 🛡️ Segurança & Privacidade

- **Zero Credenciais:** Nenhuma chave privada, token de API ou senha é armazenada ou exposta no código.
- **APIs Abertas:** Todas as integrações externas (clima, fontes e ícones) utilizam endpoints públicos e seguros via HTTPS.
- Para reportar qualquer questão de segurança, consulte nossa [Política de Segurança](SECURITY.md).

---

## 💖 Como Apoiar o Projeto

O **Orbis Tech Kids FM** é um projeto independente mantido com dedicação comunitária. Toda ajuda é bem-vinda para manter os servidores de streaming ativos e expandir oficinas de robótica e programação para crianças ribeirinhas:

- **Chave PIX (Código Aleatório):** `dc0520f0-a2a6-4945-95fd-fc317b22671d`
- **Titular:** Rivonildo Azevedo (Nubank - 260 | Agência: 0001 | Conta: 40280541-5)
- **WhatsApp Oficial:** [+55 (74) 981334625](https://wa.me/5574981334625)

---

## 👨‍💻 Idealizador

**Rivonildo Azevedo**  
Estudante de Engenharia de Software, entusiasta de tecnologia, inteligência artificial e impacto social, natural de Xique-Xique, Bahia.

> *"Construindo pontes de oportunidade para transformar o presente e inspirar o futuro da nossa gente!"*

---

## ⭐ Apoie com uma Estrela!

Se você acredita no poder da educação e da tecnologia para transformar a vida de crianças no sertão e em todo o Brasil, deixe uma estrela (**Star ⭐**) neste repositório e compartilhe com seus amigos e comunidade tech!
