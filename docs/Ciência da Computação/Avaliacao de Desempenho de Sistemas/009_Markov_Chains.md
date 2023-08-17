---
sidebar_position: 12
---

# Markov Chains

:::info Book
MACIEL, Paulo. Operational Analysis. In: Performance, Reliability and Availability of Computational Systems Volume I. 1. ed. New York: Springer, 2018. p. 169-190.
:::

## Variável Aleatória e Processos Estocásticos: Entendendo Cadeias de Markov de Tempo Contínuo (CTMC)

### Introdução
Em primeiro lugar, precisamos entender o que é uma variável aleatória. Simplificando, uma variável aleatória pode ser entendida como uma função que atribui um valor numérico a cada resultado possível em um cenário aleatório. Esse conceito é essencial para entendermos os processos estocásticos e, em particular, as Cadeias de Markov de Tempo Contínuo (CTMC).

### Processos Estocásticos
Um processo estocástico é uma coleção de variáveis aleatórias indexadas por algum conjunto, geralmente representando tempo. Isso significa que é um tipo de modelo matemático que muda com o tempo de acordo com determinadas probabilidades.

Dentro de um processo estocástico, cada variável aleatória representa o estado do sistema em um determinado momento. Deste modo, temos a seguinte definição: um processo estocástico é um conjunto de variáveis aleatórias onde {X(t): t pertence T}. Nesse contexto:

- X(t) representa o estado do processo no momento t.
- t é o tempo, que nesse caso pode ser qualquer valor não negativo, já que estamos lidando com tempo contínuo.
- Cada valor de X(t) é um estado possível do processo.

#### Variável Aleatória

Seja S o espaço de amostra de um experimento aleatório, ou seja, o conjunto de todos os resultados possíveis desse experimento. Uma variável aleatória X é uma função que mapeia cada elemento s em S para um número real. Isso pode ser escrito matematicamente como:

X : S → R

onde:

S é o espaço de amostra
R é o conjunto de todos os números reais
X é a variável aleatória
Por exemplo, considere um lançamento de um dado justo de 6 lados. O espaço de amostra S é {1, 2, 3, 4, 5, 6}. Podemos definir a variável aleatória X como o resultado do lançamento do dado. Então, X mapeia cada resultado s em S para um número real (neste caso, o mesmo número, pois estamos apenas considerando o resultado do lançamento). Portanto, temos X(1) = 1, X(2) = 2, X(3) = 3, X(4) = 4, X(5) = 5 e X(6) = 6.

### Cadeias de Markov de Tempo Contínuo (CTMC)
Dentro do universo de processos estocásticos, temos um tipo específico chamado Cadeias de Markov de Tempo Contínuo (CTMC). Nesse tipo de processo, a probabilidade do próximo estado depende apenas do estado atual e não dos estados anteriores.

### Exemplo Prático
Vamos a um exemplo prático para ilustrar o conceito:

Suponha que temos uma máquina que pode estar em três estados: funcionando normalmente, funcionando com defeito e quebrada. Podemos modelar isso como um processo estocástico, onde X(t) é o estado da máquina no tempo t.

- Se X(t) = 0, a máquina está funcionando normalmente no tempo t.
- Se X(t) = 1, a máquina está funcionando com defeito no tempo t.
- Se X(t) = 2, a máquina está quebrada no tempo t.

Este processo estocástico pode ser uma Cadeia de Markov de Tempo Contínuo se a probabilidade do próximo estado depende apenas do estado atual e não dos estados anteriores. Por exemplo, a máquina pode ter uma probabilidade maior de quebrar se estiver funcionando com defeito, mas a probabilidade de quebrar no futuro não depende de quantas vezes a máquina funcionou com defeito no passado.

### Conclusão

Os processos estocásticos, e em particular as Cadeias de Markov de Tempo Contínuo (CTMC), são ferramentas poderosas na modelagem de sistemas que evoluem ao longo do tempo de acordo com probabilidades. Sejam sistemas físicos, como a máquina do nosso exemplo, ou até mesmo fenômenos econômicos, essa é uma área da matemática com aplicações muito amplas e úteis.

Espero que este artigo tenha ajudado a entender melhor esses conceitos. Se você tiver mais perguntas ou se algo não ficou claro, por favor, deixe um comentário!

