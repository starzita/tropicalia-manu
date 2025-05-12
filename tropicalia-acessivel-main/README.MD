Aula 01
Trabalhando no header

Alinhando conteúdo à direita
https://getbootstrap.com/docs/4.3/utilities/flex/#justify-content

Mudar fonte
tipo da fonte e cor

Mudar cor do background menu

Adicionar imagem à esquerda

Aumentar espaçamento



div*3

modal
Galeria:  src="img/projeto-1.png"
    class="img-fluid w-100"

    footer
    bootstrap icons <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    --------------------------

    <title>Foco Visível</title>
    <style>
        a {
            color: blue;
            text-decoration: none;
        }
        a:focus {
            outline: 2px solid orange;
            background-color: lightyellow;
        }
    </style>
</head>
<body>
    <a href="#">Link acessível</a>
</body>
</html>
Dicas de Acessibilidade:
Visibilidade do Foco: Garanta que o estado de foco seja visível e distinto. Evite remover o outline padrão sem substituí-lo por um estilo visível.
Consistência: Certifique-se de que todos os elementos interativos (links, botões, campos de formulário) tenham estados de foco bem definidos.