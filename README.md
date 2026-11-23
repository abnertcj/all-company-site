# All Company — Site institucional

Site estático (HTML, CSS e JavaScript puros) da **All Company**, empresa de esquadrias de alumínio, divisórias, vidros, forros e toldos em São José dos Campos/SP.

🌐 **Site publicado:** https://abnertcj.github.io/all-company-site/

## Conteúdo

- Apresentação da empresa e dos serviços (esquadrias, divisórias, vidros, forros, toldos, portas e instalação)
- Seção "Solicite seu orçamento" com botões que abrem o WhatsApp com mensagem pré-preenchida
- Menu responsivo para dispositivos móveis

## Estrutura

```
.
├── index.html     # Página única do site
├── style.css      # Estilos
├── script.js      # WhatsApp, menu mobile e ano do rodapé
└── images/        # Logo e fotos dos serviços
```

## Como rodar localmente

Não há build nem dependências. Basta abrir o `index.html` no navegador, ou servir a pasta:

```bash
python -m http.server 8000
# acesse http://localhost:8000
```

## Personalização

- **Número e mensagem do WhatsApp:** edite as variáveis `numero` e `mensagem` no início de `script.js`.
- **Textos e imagens:** edite `index.html` e substitua os arquivos em `images/`.

## Publicação (GitHub Pages)

O site é servido pelo GitHub Pages a partir da branch `main` (pasta raiz). Qualquer push para `main` atualiza o site automaticamente em alguns minutos.
