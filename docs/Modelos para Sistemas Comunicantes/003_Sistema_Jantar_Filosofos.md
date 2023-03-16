---
sidebar_position: 1
---

# PRoblema

O Problema do Jantar dos Filósofos é um clássico problema de sincronização em ciência da computação, proposto pelo filósofo Dijkstra em 1965. O problema descreve um cenário em que cinco filósofos estão sentados ao redor de uma mesa e precisam compartilhar cinco garfos para comer seu jantar. O problema é que cada filósofo precisa de dois garfos para comer, um à sua esquerda e outro à sua direita, e, se cada filósofo pegar o garfo à sua esquerda e esperar pelo garfo à sua direita, haverá um impasse, ou deadlock. O problema é um exemplo clássico de como a sincronização inadequada entre processos pode levar a impasses em sistemas distribuídos.

## FOrmalismo

O Problema do Jantar dos Filósofos com 3 filósofos pode ser modelado formalmente como um conjunto de três filósofos {F1, F2, F3} e um conjunto de três garfos {G1, G2, G3}. Cada filósofo pode estar em um de dois estados: "pensando" ou "comendo". Para comer, cada filósofo precisa pegar os garfos à sua esquerda e à sua direita simultaneamente. No entanto, se cada filósofo pegar o garfo à sua esquerda e esperar pelo garfo à sua direita, haverá um impasse. O problema é um exemplo clássico de como a sincronização inadequada entre processos pode levar a impasses em sistemas distribuídos.

## Sistemas

No Problema do Jantar dos Filósofos, os sistemas são os filósofos e os garfos, que representam os recursos compartilhados pelos filósofos. Cada filósofo é um processo que precisa acessar os recursos compartilhados para realizar suas tarefas (comer e pensar). O problema consiste em sincronizar o acesso a esses recursos para evitar impasses (deadlocks) ou condições de corrida (race conditions) entre os processos.

## MOdelo

O modelo de autômato para um filósofo pode ser representado por um autômato de Mealy ou de Moore, onde o estado do autômato representa o estado atual do filósofo (comendo ou pensando), e as transições de estado representam as ações que o filósofo pode realizar (pegar um garfo, soltar um garfo, começar a comer, parar de comer).

Um exemplo de autômato de Mealy para um filósofo seria:

+---------+        +---------+
| Pensando| --f1-->|Faminto   |
+---------+        +---------+
    ^   e1         /        |
    |             /  f2     | f3
   e2           /          v
+---------+  /       +----------+
| Comendo |<--f4--| Garfos   |
+---------+  \       +----------+
             \          f5
              \        |
               --f6--- v
             +----------+
             | Pensando |
             +----------+


onde:

Estados: Pensando, Faminto, Comendo
Transições: f1 (pegar garfo esquerdo), f2 (soltar garfo esquerdo), f3 (pegar garfo direito), f4 (começar a comer), f5 (soltar garfo direito), f6 (parar de comer)
Saídas: e1 (pedir garfos), e2 (devolver garfos)
O autômato de Mealy para um filósofo pode ser representado em UML como uma máquina de estados, onde cada estado é um círculo e cada transição é uma seta rotulada com a entrada e a saída correspondentes. O exemplo acima seria representado em UML da seguinte forma:

+------------+           +--------------+
| Pensando   | --f1/e1-->| Faminto      |
+------------+           +--------------+
   | e2                       | f2
   |                          v
   |                     +---------+
   |                     | Comendo |
   |                     +---------+
   | e2                       | f5
   |                          v
   +----------------f4------>+-------+
                              | Pensando |
                              +-------+


## Viz Gráfica em Python

Segue abaixo um exemplo de modelo de autômato em Python para o filósofo 1 com visualização gráfica:

from graphviz import Digraph

# Tabela de estados
estados = {
  'PENSANDO': 0,
  'FAMINTO': 1,
  'COMENDO': 2
}

# Tabela de eventos
eventos = {
  'PEDIR_GARFOS': 0,
  'DEVOLVER_GARFOS': 1,
  'PEGAR_GARFO_ESQUERDO': 2,
  'PEGAR_GARFO_DIREITO': 3,
  'SOLTAR_GARFO_ESQUERDO': 4,
  'SOLTAR_GARFO_DIREITO': 5,
  'COMECAR_A_COMER': 6,
  'PARAR_DE_COMER': 7
}

# Tabela de transições
transicoes = {
  estados['PENSANDO']: {
    eventos['PEDIR_GARFOS']: estados['FAMINTO'],
    eventos['DEVOLVER_GARFOS']: estados['PENSANDO']
  },
  estados['FAMINTO']: {
    eventos['PEGAR_GARFO_ESQUERDO']: estados['FAMINTO'],
    eventos['PEGAR_GARFO_DIREITO']: estados['FAMINTO'],
    eventos['SOLTAR_GARFO_ESQUERDO']: estados['PENSANDO'],
    eventos['SOLTAR_GARFO_DIREITO']: estados['PENSANDO'],
    eventos['COMECAR_A_COMER']: estados['COMENDO']
  },
  estados['COMENDO']: {
    eventos['PARAR_DE_COMER']: estados['PENSANDO']
  }
}

# Função para obter o próximo estado com base no estado atual e no evento recebido
def proximo_estado(estado_atual, evento):
  return transicoes[estado_atual][evento]

# Visualização gráfica do autômato
dot = Digraph(comment='Autômato do Filósofo 1')
dot.node('PENSANDO', 'PENSANDO')
dot.node('FAMINTO', 'FAMINTO')
dot.node('COMENDO', 'COMENDO')
dot.edge('PENSANDO', 'FAMINTO', label='PEDIR_GARFOS')
dot.edge('FAMINTO', 'FAMINTO', label='PEGAR_GARFO_ESQUERDO')
dot.edge('FAMINTO', 'FAMINTO', label='PEGAR_GARFO_DIREITO')
dot.edge('FAMINTO', 'PENSANDO', label='SOLTAR_GARFO_ESQUERDO')
dot.edge('FAMINTO', 'PENSANDO', label='SOLTAR_GARFO_DIREITO')
dot.edge('FAMINTO', 'COMENDO', label='COMECAR_A_COMER')
dot.edge('COMENDO', 'PENSANDO', label='PARAR_DE_COMER')
dot.edge('FAMINTO', 'PENSANDO', label='DEVOLVER_GARFOS')
dot.render('filosofo1.gv', view=True)

## O que está na aula

P: Sistema de Filosovos
F: SIstema de Garfos

### Filosofos

P1 -- PEga Garfo 1 (1F1) --> 1F1
P1 -- PEga Garfo 1 (1F3) --> 1F3

1F1 -- Com o Garfo (1F3) --> 1C (Comer)
1F3 -- Com o Garfo (1F1) --> 1C (Comer)

1C (Comer) -- 1F --> P1 (Estado Inicial)

O autômato pode ser formalmente descrito como:

markdown
Copy code
A = (Q, Σ, δ, q0, F)

Onde:
- Q = {P1, 1F1, 1F3, 1C} é o conjunto de estados do autômato.
- Σ = {1F} é o conjunto de eventos.
- δ: Q x Σ -> Q é a função de transição, definida por:
    - δ(P1, 1F1) = 1F1
    - δ(P1, 1F3) = 1F3
    - δ(1F1, 1F3) = 1C
    - δ(1F3, 1F1) = 1C
    - δ(1C, 1F) = P1
- q0 = P1 é o estado inicial do autômato.
- F = {} é o conjunto de estados finais do autômato, pois o autômato é cíclico.
Onde:

Q é o conjunto de estados do autômato.
Σ é o conjunto de eventos.
δ é a função de transição, que mapeia cada estado e evento a um novo estado.
q0 é o estado inicial do autômato.
F é o conjunto de estados finais do autômato.
Neste caso, temos quatro estados possíveis (P1, 1F1, 1F3 e 1C) e um evento possível (1F). A função de transição δ indica que, a partir do estado P1, se o evento 1F1 ou 1F3 ocorrer, o autômato transita para os estados 1F1 ou 1F3, respectivamente. Em seguida, se o autômato estiver no estado 1F1 e ocorrer o evento 1F3, ou se estiver no estado 1F3 e ocorrer o evento 1F1, ele transita para o estado 1C. Por fim, se o autômato estiver no estado 1C e ocorrer o evento 1F, ele transita de volta para o estado inicial P1.

Note que o conjunto de estados finais F é vazio, pois o autômato é cíclico e pode permanecer em um estado por tempo indeterminado.

#### Em Python

python
Copy code
from graphviz import Digraph

# Definindo o grafo
g = Digraph('jantar_dos_filosofos')

# Definindo os estados
g.node('P1', shape='ellipse', style='bold', color='blue')
g.node('1F1', shape='ellipse')
g.node('1F3', shape='ellipse')
g.node('1C', shape='doublecircle')

# Definindo as transições
g.edge('P1', '1F1', label='Pega Garfo 1')
g.edge('P1', '1F3', label='Pega Garfo 3')
g.edge('1F1', '1C', label='Com o Garfo 3')
g.edge('1F3', '1C', label='Com o Garfo 1')
g.edge('1C', 'P1', label='Fim de Comer')

# Visualizando o grafo
g.view()
E o formalismo em Python:

makefile
Copy code
grafo = {
    "P1": {
        "1F1": "Pega Garfo 1",
        "1F3": "Pega Garfo 3"
    },
    "1F1": {
        "1C": "Com o Garfo 3"
    },
    "1F3": {
        "1C": "Com o Garfo 1"
    },
    "1C": {
        "P1": "Fim de Comer"
    }
}
### Garfos

FL: Garfos Livres
FU: Garfos em Uso

FL -- 1F1, 3F1 --> FU
FU -- 1F, 3F --> FL

#MUDAR A VOLTA PARA f E NAO F1

O automato pode ser formalmente descrito como:

kotlin
Copy code
A = (Q, Σ, δ, q0, F)

Onde:
- Q = {FL, FU} é o conjunto de estados do automato.
- Σ = {1F1, 3F1} é o conjunto de eventos.
- δ: Q x Σ -> Q é a função de transição, definida por:
    - δ(FL, 1F1) = FU
    - δ(FL, 3F1) = FU
    - δ(FU, 1F1) = FL
    - δ(FU, 3F1) = FL
- q0 = FL é o estado inicial do automato.
- F = {FL, FU} é o conjunto de estados finais do automato.
Onde:

Q é o conjunto de estados do automato.
Σ é o conjunto de eventos.
δ é a função de transição, que mapeia cada estado e evento a um novo estado.
q0 é o estado inicial do automato.
F é o conjunto de estados finais do automato.
Neste caso, temos dois estados possíveis (FL e FU) e dois eventos possíveis (1F1 e 3F1). A função de transição δ indica que, a partir do estado FL, se o evento 1F1 ou 3F1 ocorrer, o automato transita para o estado FU. De forma análoga, se o automato estiver no estado FU e ocorrer um evento 1F1 ou 3F1, ele transita para o estado FL. O estado inicial é FL, e os estados finais são FL e FU, indicando que o automato pode terminar em qualquer um desses estados.

#### EM Python

Segue o código em Python para visualização do automato:

python
Copy code
from graphviz import Digraph

dot = Digraph(comment='Sistema de Garfos')

dot.node('FL', 'FL', shape='doublecircle')
dot.node('1F1', '1F1')
dot.node('3F1', '3F1')
dot.node('FU', 'FU', shape='doublecircle')

dot.edge('FL', '1F1', label='1F1')
dot.edge('FL', '3F1', label='3F1')
dot.edge('FU', '1F1', label='1F1')
dot.edge('FU', '3F1', label='3F1')
dot.edge('1F1', 'FL', label='1F1')
dot.edge('3F1', 'FL', label='3F1')
dot.edge('1F1', 'FU', label='1F1')
dot.edge('3F1', 'FU', label='3F1')

dot.render('garfos.gv', view=True)
O formalismo matemático para esse automato é:

A = ({FL, FU, 1F1, 3F1}, {1F1, 3F1}, δ, {FL, FU}, {FL, FU})

onde:

{FL, FU, 1F1, 3F1} é o conjunto de estados
{1F1, 3F1} é o conjunto de eventos
δ é a função de transição de estados
{FL, FU} é o conjunto de estados finais
{FL, FU} é o estado inicial.

## Composição PAralela

COnsiderando a composição paralela, como que seria o sistema acima com 1 filosofo e 1 garfo.

A composição paralela pode ser representada utilizando o operador de produto cartesiano entre os autômatos dos filósofos e dos garfos.

Assumindo que o autômato do filósofo e do garfo possuem as seguintes definições:

Autômato do filósofo: F = ({F1}, {e, p}, δf, F1, If)
Autômato do garfo: G = ({G1}, {p, l}, δg, G1, Ig)
Onde F1 e G1 representam os estados iniciais, {e, p} e {p, l} são os eventos permitidos em cada autômato, δf e δg representam as funções de transição de estado e If e Ig representam os conjuntos de estados finais dos autômatos.

A composição paralela dos autômatos é dada por:

A = F x G = ({(F1, G1)}, {e, p, l}, δ, (F1, G1), {F1, G1})

Onde F x G representa o produto cartesiano entre os autômatos F e G, e ({(F1, G1)}, {e, p, l}, δ, (F1, G1), {F1, G1}) representa o autômato resultante da composição.

A função de transição δ é definida por:

scss
Copy code
δ((F1, G1), e) = {(F1, G1)} se e ∈ {e, l}
δ((F1, G1), p) = {(p, G1), (F1, p)} se G1 = l
δ((F1, G1), p) = {(F1, G1)} se G1 = p
δ((F1, G1), p) = {(p, l)} se G1 = p
Essa função de transição indica como o autômato resultante A se comporta quando um evento é disparado. Por exemplo, se o filósofo 1 dispara o evento p (pegar o garfo), o autômato resultante A pode transitar para os estados (p, G1) ou (F1, p), dependendo do estado atual do garfo.

Para um exemplo mais concreto, considere que o filósofo 1 e o garfo 1 possuem as seguintes definições:

Autômato do filósofo 1: F1 = ({I}, {p}, δf1, I, {I})
Autômato do garfo 1: G1 = ({L}, {l, p}, δg1, L, {L})
Onde I e L representam os estados iniciais, {p} e {l, p} são os eventos permitidos em cada autômato, δf1 e δg1 representam as funções de transição de estado e {I} e {L} representam os conjuntos de estados finais dos autômatos.

A composição paralela dos autômatos é dada por:

A = F1 x G1 = ({(I, L)}, {p, l}, δ, (I, L), {(I, L)})

Onde F1 é o autômato do filósofo 1 e G1 é o autômato do garfo 1. A composição paralela dos autômatos significa que ambos os autômatos podem transitar de forma independente, mas precisam estar em determinados estados para que a ação conjunta possa ocorrer.

Por exemplo, se o filósofo 1 e o garfo 1 estão em estados iniciais (I e L, respectivamente), e o filósofo 1 dispara o evento p, o autômato resultante A transita para o estado (p, L), indicando que o filósofo 1 pegou o garfo 1.

Esse é apenas um exemplo simples de como podemos aplicar a composição paralela de autômatos na arquitetura de dados da AWS para modelar sistemas distribuídos complexos.

## Composição Paralela em Código Python

Segue abaixo o código em Python para a composição paralela dos dois autômatos:

Primeiro, é necessário descrever o formalismo matemático de cada sistema.

Autômato do Problema do Jantar dos Filósofos:

Estados: P1, 1F1, 1F3, 1C
Eventos: 1F1, 1F3, 1F
Estado inicial: P1
Função de transição: δ(P1, 1F1) = 1F1, δ(P1, 1F3) = 1F3, δ(1F1, 1F3) = 1C, δ(1F3, 1F1) = 1C, δ(1C, 1F) = P1
Autômato do Problema do Jantar dos Filósofos:

Estados: FL, FU
Eventos: 1F1, 3F1, 1F3, 3F3
Estado inicial: FL
Função de transição: δ(FL, 1F1) = FU, δ(FL, 3F1) = FU, δ(FU, 1F1) = FL, δ(FU, 3F1) = FL


Para fazer a composição paralela, é necessário criar um novo conjunto de estados, eventos e função de transição. A composição paralela dos autômatos é dada por:

A = F1 x G1 = ({(I, L)}, {p, l}, δ, (I, L), {(I, L)})

Onde:

F1 é o primeiro autômato descrito acima
G1 é o segundo autômato descrito acima
I é o estado inicial da composição, que é uma tupla do estado inicial de F1 e do estado inicial de G1
L é a tupla de estados da composição
p é a tupla de eventos da composição
δ é a função de transição da composição, que é uma função da forma: L x p -> L
Portanto, a composição paralela dos autômatos é dada por:

Q = {(P1, 1F1, FL, FU), (P1, 1F3, FL, FU), (1F1, FL, 1F1, FU), (1F1, FU, 1F1, FL), (1F3, FL, 1F3, FU), (1F3, FU, 1F3, FL), (FL, FL, FL, FL), (FL, FU, FL, FU), (FU, FL, FU, FL), (FU, FU, FU, FU)}
Σ = {1F1, 3F1, 1F3, 3F3}
q0 = (P1, 1F1, FL, FU)

Para visualizar esse autômato, pode-se usar a biblioteca Graphviz e o código em Python abaixo:

python
Copy code
from graphviz import Digraph

dot = Digraph()
dot.attr(rankdir='LR')

# Adiciona os nós
for q in Q:
    dot.node(str(q))

# Adiciona as transições
for q in Q:
    for a in Σ:
        q_next = δ(q, a)
        dot.edge(str(q), str(q_next), label=str(a))

# Define o estado inicial
dot.attr('node', shape='none')
dot.node('start', label='', style='invisible')
dot.edge('start', str(q0))

Define os estados
dot.attr('node', shape='circle')
for state in Q:
if state == q0:
dot.attr('node', color='green')
dot.node(str(state), label=str(state), style='filled')
elif state[0] == P1:
dot.attr('node', color='blue')
dot.node(str(state), label=str(state), style='filled')
else:
dot.node(str(state), label=str(state))

Define as transições
dot.attr('edge', arrowhead='empty')
for state in Q:
for event in Sigma:
next_state = delta(state, event)
if next_state != None:
dot.edge(str(state), str(next_state), label=event)

Renderiza o grafo
dot.render('grafo')

## IDES


### LaTex MikTeX
C:\Users\user\AppData\Local\Programs\MiKTeX

### Ghostscript
C:\Program Files\gs\gs10.00.0