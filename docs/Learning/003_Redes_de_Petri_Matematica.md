# Math of Petri Nets

## Teoria de Conjuntos Generalizados (Bag)
A teoria de conjuntos generalizados, também conhecida como "bag", é uma generalização do conceito de conjuntos convencionais que permite a repetição de elementos. **Em outras palavras, em um conjunto tradicional, cada elemento é único, enquanto que em uma bolsa, um elemento pode aparecer várias vezes.**

Matematicamente, um conjunto B é representado como:

$$
B = {b_1, b_2, b_3,b_4, b_5, ...}
$$

Já uma bolsa é representada como:

$$
B = {b_1^{n_1}, b_2^{n_2}, b_3^{n_3}, ...} 
$$

onde **b_i** é o elemento i-ésimo da bolsa e **n_i** é o **número de vezes que ele aparece na bolsa**.

A teoria de conjuntos generalizados é útil em várias aplicações, como na **contagem de elementos em coleções**, na representação de histogramas, entre outros.

## Estrutura das Redes de Petri

A estrutura das redes de Petri é composta por dois tipos de elementos principais: **Lugares (P)** e **Transições (T)**.

### Lugares

$$
P = {p_1, p_2, ..., p_n}
$$

### Transições

$$
T = {t_1, t_2, ..., t_m}
$$

Os **lugares** são representados por **círculos**, enquanto as **transições** são representadas por **retângulos**. **Cada lugar é associado a uma quantidade não negativa de tokens**, representados por conta-gotas.


### Lugares de Entrada

$$
I: T \rightarrow P^\infty
$$

A função **I: T \rightarrow P^{\infty}** representa a **relação entre as transições e os lugares de entrada** em uma rede de Petri.

**I(t)** é o **conjunto de lugares de entrada** associados à **transição t**. **P^{\infty}** é o **conjunto de lugares com capacidade infinita**, ou seja, lugares que podem conter uma quantidade ilimitada de tokens.

A função **I** permite **identificar quais lugares são usados como entradas para cada transição na rede de Petri**, o que é importante para modelar o comportamento do sistema.

### Lugares de Saída

$$
O: T \rightarrow P^\infty
$$


A função **O: T \rightarrow P^{\infty}** representa a **relação entre as transições e os lugares de saída** em uma rede de Petri.

**O(t)** é o **conjunto de lugares de saída** associados à **transição t**. 

**P^{\infty}** é o **conjunto de lugares com capacidade infinita**, ou seja, lugares que podem conter uma quantidade ilimitada de tokens.

A função **O** permite **identificar quais lugares são usados como saídas para cada transição na rede de Petri**, o que é importante para modelar o comportamento do sistema.

### Capacidade do Lugar

A **capacidade de cada lugar** é representada por uma **constante natural k**, tal que 
$$
k: P \rightarrow N \cup \infty
$$

Lembrando que:
$$
P = {p_1, p_2, ..., p_n}
$$

A função **k: P \rightarrow N \cup \infty** representa a **capacidade de cada lugar em uma rede de Petri**.

**k(p)** é a **capacidade do lugar p**. **N é o conjunto de números naturais**, e **\infty representa a capacidade ilimitada**.

A função **k** permite definir a **capacidade máxima de tokens que cada lugar** na rede de Petri pode conter. Esta informação é importante para modelar o comportamento do sistema, pois limita o número de tokens que podem estar presentes em cada lugar ao mesmo tempo.

Na representação dos modelos, **quando não tem nenhum token nos lugares, a capacidade daquele lugar é infinita.**

### Representação Entradas e Saídas

Em um diagrama de Petri, temos que:

$$
I = I_{t_j}
$$

**I = I_{t_j} representa o conjunto de lugares de entrada associados à transição t_j** em uma rede de Petri.

**I_{t_j} é obtido aplicando a função I à transição t_j**, e **corresponde ao conjunto de lugares na rede que são usados como entradas quando a transição t_j é ativada.**

Este conceito é importante para entender como tokens são movimentados entre lugares na rede de Petri, e como a ativação de uma transição afeta a presença de tokens em lugares específicos. **É importante destacar que, para uma transição ser ativada, é necessário que haja um número suficiente de tokens nos lugares de entrada associados a ela.**

$$
T = t_j
$$

**T = t_j** representa uma transição específica em uma rede de Petri.

**t_j é um elemento do conjunto T**, que **representa o conjunto de todas as transições na rede**. A transição **t_j pode ser ativada ou desativada**, dependendo das condições em lugares específicos na rede.

**As transições são elementos-chave nas redes de Petri, pois representam eventos ou ações que mudam o estado do sistema, movendo tokens de lugares de entrada para lugares de saída**. A modelagem precisa e correta das transições é crucial para a precisão da representação do sistema modellado.

$$
O = O_{t_j}
$$

**O = O_{t_j}** representa o **conjunto de lugares de saída associados à transição t_j** em uma rede de Petri.

**O_{t_j} é obtido aplicando a função O à transição t_j**, e corresponde ao **conjunto de lugares na rede que são usados como saídas quando a transição t_j é ativada**.

Este **conceito é importante para entender como tokens são movimentados entre lugares na rede de Petri, e como a ativação de uma transição afeta a presença de tokens em lugares específicos.**

### Matriz de Fichas

$$
F: P \times T \rightarrow \mathbb{Z}
$$

**F:P×T→Z é a matriz de fichas que representa a relação entre lugares e transições em uma rede de Petri.**

**F é uma função que recebe como entrada um par de elementos (p_i, t_j), onde p_i $ é um lugar e t_j é uma transição**, e **retorna um número inteiro Z**. O número retornado por **F(p_i, t_j) representa a quantidade de tokens que são transferidos de um lugar p_i para outro lugar ou transição quando a transição t_j é ativada.**

**A matriz de fichas é uma representação formal da dinâmica da rede de Petri**, e é usada para modelar a evolução do estado da rede ao longo do tempo, a partir da ativação de diferentes transições.

### Estado inicial do Sistema

$$
M_0: P \rightarrow \mathbb{N}
$$

M_0: P → N é uma função matemática que mapeia um conjunto P de elementos para o conjunto dos números naturais N. Em outras palavras, para cada elemento p em P, a função M_0 atribui um número natural m = M_0(p) em N. Essa função é usada para representar uma quantidade inicial de recursos ou tokens em um sistema dinâmico, como um sistema de marcações de rede de Petri. O conjunto P pode ser visto como os lugares do sistema e N representa as quantidades de tokens em cada lugar. A função M_0 fornece a quantidade inicial de tokens em cada lugar p.

### Exemplo Simples

Exemplo de Rede de Petri para Arquitetura de Dados Complexa na AWS

Um exemplo simples de modelagem de redes de Petri para uma arquitetura de dados complexa na AWS poderia envolver o uso do Amazon S3 para armazenamento de dados e o Amazon Glue para processamento de dados.

Na modelagem da rede de Petri, um lugar representaria o S3, onde os dados são armazenados, e outro lugar representaria o Glue, onde os dados são processados. A transição representaria a operação de enviar os dados do S3 para o Glue para processamento. A regra de disparo da transição seria definida para ser ativada quando os dados são carregados no S3 e estão prontos para serem processados pelo Glue.

Dessa forma, a rede de Petri garante que os dados sejam armazenados no S3 antes de serem processados pelo Glue, mantendo a integridade dos dados e a eficiência do fluxo de trabalho.


A matriz F para esse exemplo pode ser definida da seguinte forma:

Onde 
- **p_1** representa o **S3**
- **p_2** representa o **Glue**. 

A transição **(Ações/Verbos)**:
- **t_1** representa a operação de **enviar os dados do S3 para o Glue**
- **t_2** representa a operação de **processar os dados no Glue**. 

```math title="Entradas:"
	I = { 
			I(enviar os dados do S3 para o Glue)=[S3],
			I(processar os dados no Glue)=[Glue]
		}
```
```math title="Saídas:"
	O = {
			O(enviar os dados do S3 para o Glue)=[Glue],
			O(processar os dados no Glue)=[S3]
		}
```
### Matriz:

FALTA COMO MONTAR UMA MATRIZ

Valores:
- O valor **-1 na posição F_{p_1, t_1} indica que uma ficha é retirada do lugar S3 quando a transição t_1 é ativada.** 
- O valor **1 na posição F_{p_2, t_1} indica que uma ficha é adicionada ao lugar Glue quando a transição t_1 é ativada.**
- Análogamente, o valor **-1 na posição F_{p_2, t_2} indica que uma ficha é retirada do lugar Glue quando a transição t_2 é ativada**
- **Valor 1 na posição F_{p_1, t_2} indica que uma ficha é adicionada ao lugar S3 quando a transição t_2 é ativada.**

$$
\begin{bmatrix}
F_{p1,t1} & F_{p1,t2} \\
F_{p2,t1} & F_{p2,t2} 
\end{bmatrix} =
\begin{bmatrix}
-1 & 1 \\
1 & -1
\end{bmatrix}
$$

