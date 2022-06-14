# Arquitetura da Solução

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução.

---
## Componentes da solução

A solução implementada conta com os seguintes módulos:

- <b>Navegador</b> - Interface básica do sistema 

- <b>Páginas Web</b> - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema. Além do CSS puro, é utilizado o framework Bootstrap para alguns elementos da página, principalmente os relativos à responsividade nos diferentes dispositivos, tais como os media queries.

- <b>Local Storage</b> - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 

- <b>Estoque</b> – nome dos produtos, bem como seu registro de quantidade, preço e código identificador.

- <b>Notas fiscais</b> – arquivo com as mesmas informações disponíveis no arquivo de estoque, com a coluna adicional do número da nota fiscal e sua data de emissão, que é gerada de acordo com a utilização do usuário.

- <b>Hospedagem</b> - local na Internet onde as páginas são mantidas e acessadas pelo navegador.

---

## Hospedagem

O site utiliza a plataforma do Git-Hub como ambiente de hospedagem do site do projeto. O site é mantido no ambiente da URL: 

<a href="https://gurudevop7884.github.io/Projeto-Puc-Bootstrap/index.html">https://gurudevop7884.github.io/Projeto-Puc-Bootstrap/index.html</a>

A publicação do site no GitHub é feita por meio de uma submissão do projeto (push) via git para o GitHub pages que se encontra no endereço: 

https://github.com/usuário/repositório/settings/pages

---

## Referências

Vietro, I. L. Fluxo de desenvolvimento com GitFlow. 2015. 

Disponível em: https://imasters.com.br/agile/fluxo-de-desenvolvimento-com-gitflow. Acessado em 22/04/2022.
