---
sidebar_position: 1
---

# Avaliação de Sistemas Críticos

Avaliar a disponibilidade e confiabilidade de sistemas.

## Program

- História
- Lifetime Data Analysis
    - Confiabilidade
    - Disponibilidade
        - Através dos **tempos** de falha e reparo **coletados (medidos)**.
- Modelagem
    - A partir de um sistema, realizado uma modelagem.
    - Uma vez com o modelo, há a avaliação do modelo e resultados.
- Modelos
    - RBD (Diagrama de Blocos de Confiabilidade)
    - FT (Árvore de Falhas)
    - RG (Reliability Graph)
    - CTMC (Cadeias de Markov)
    - SPN (Stochastic Petri Nets)

# Milestones da Dependabilidade

## Milestone 1: 1907

**Data:** 1907  
**Pesquisador:** Andrei A. Markov  
**Contribuição:** Introdução do estudo sobre probabilidade de ocorrência de eventos a partir de um estado presente, que levou ao desenvolvimento das Cadeias de Markov.

## Milestone 2: 1926

**Data:** Meados de 1926  
**Pesquisador:** Desenvolvimento coletivo  
**Contribuição:** Surgimento das Cadeias de Markov a partir do estudo de Andrei A. Markov.

## Milestone 3: 1910

**Data:** 1910  
**Pesquisador:** A. K. Erlang  
**Contribuição:** Estudo de problemas no tráfego telefônico, pioneirismo em sistemas de filas e análise probabilística.

## Milestone 4: 1930

**Data:** 1930  
**Pesquisadores:** Weibull, Waloddi e Gumbel, Emil Julius  
**Contribuição:** Estudos sobre fadiga em sistemas mecânicos.

## Milestone 5: 1933

**Data:** 1933  
**Pesquisador:** Kolmogorov  
**Contribuição:** Formalização completa dos modelos de Markov, incluindo o conceito de Chapman-Kolmogorov.

## Milestone 6: 1956

**Data:** 1956  
**Pesquisador:** Claude E. Shannon, John von Neumann e Edward Forrest Moore  
**Contribuição:** Conceberam o modelo Reliability Block Diagrams (RBD), uma representação gráfica para modelar sistemas de confiabilidade.

## Milestone 7: 1958

**Data:** 1958  
**Pesquisador:** Gnedenjo Boris V.  
**Contribuição:** Contribuição significativa na União Soviética em relação à confiabilidade de sistemas.

## Milestone 8: 1962

**Data:** 1962  
**Pesquisador:** Bell Laboratories  
**Contribuição:** Proposição das Árvores de Falha (FTA), uma metodologia para análise de sistemas de confiabilidade.

## Milestone 9: 1966

**Data:** 1966  
**Pesquisador:** Carl Adams Petri  
**Contribuição:** Introdução das Redes de Petri (Petri Nets), que posteriormente evoluíram para as Redes de Petri Estocásticas (SPN).

## Milestone 10: 1967

**Data:** 1967  
**Pesquisador:** A. Avizienis  
**Contribuição:** Estudo de sistemas tolerantes a falhas, fundamental para os conceitos de Dependabilidade.

## Milestone 11: 2003

**Data:** 2003  
**Pesquisadores:** Blischke, W. R. & Murthy, D. N. P.  
**Contribuição:** Publicação do livro "Reliability: Modeling, Prediction, and Optimization", que aborda conceitos relacionados à confiabilidade.

## Milestone 12: 1989

**Data:** 1989  
**Pesquisador:** Cox, D. R.  
**Contribuição:** Publicação do livro "The Analysis of Binary Data", que trata da análise de dados binários.

## Milestone 13: Atualidade

**Data:** Atualidade  
**Pesquisador:** YouEngCode.com  
**Contribuição:** Agregação do conteúdo histórico e técnico sobre avaliação de sistemas críticos, incluindo Dependability, Reliability Block Diagrams, Árvores de Falha e Redes de Petri Estocásticas, proporcionando uma fonte de conhecimento acessível e informativa para a comunidade interessada.

*Lembrando que as datas para alguns dos milestones podem ser aproximadas, considerando a evolução contínua da pesquisa e da tecnologia ao longo do tempo.*

## Revisão Estatística

> Complementar com a revisão estatística mais detalhada, a partir do livro, em termos de aula.

Dado um sistema, eu tenho parâmetros teta. teta = {alfa, beta, ...} que geralmente eu não conheço. 

Para conhecer esse sistema, eu preciso medir esse sistema e depois obtenho uma amostra com n medições.

[Imagem](http://www.youengcode.com)
> Imagem Sistema > Medição > Amostra

### Estatística descritiva:

Eu pego essa amostra n e gero um sumário estatístico (revisão estatística com média, desvio padrão, skewness, desvio padrão) da amostra, assim como gerar gráficos que auxiliem o entendimento da amostra.

[Imagem](http://www.youengcode.com)
> Imagem Sistema > Medição > Amostra > Estatística Descritiva > Sumário Estatístico + Gráficos Exploratórios

### Inferência Estatística:

Agora, dado o sumário estatístico e da amostra, eu quero estimar os parâmetros do sistema. Eu quero tentar estimar esse sistema ali, com algum grau de confiabilidade.

[Imagem](http://www.youengcode.com)
> Imagem Sistema > Medição > Amostra > Estatística Descritiva > Sumário Estatístico + Gráficos Exploratórios > Inferência Estatística > Estimar os parametros do sistema (tem outro input vindo da amostra)

Essa inferência tem um grau de confiança em que eu acredito que, a partir daquela amostra, eu confio naqueles parâmetros estimados do sistema.

