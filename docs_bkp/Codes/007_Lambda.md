---
sidebar_position: 7
---

A função lambda é uma característica poderosa do Python que permite a criação de funções anônimas, ou seja, funções sem nome. Elas são úteis para aplicar operações simples e rápidas em conjuntos de dados, sem a necessidade de criar uma função separada.

A sintaxe básica de uma função lambda é:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"

lambda argumentos: expressão
Onde argumentos são os parâmetros da função e expressão é o que a função deve retornar. Por exemplo, uma função lambda que retorna o dobro de um número seria escrita como:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"

dobro = lambda x: x*2
print(dobro(5)) # irá imprimir 10
```

Uma das principais vantagens do uso de funções lambda é a sua simplicidade e facilidade de uso. Elas são frequentemente utilizadas com as funções built-in do Python como filter, map e reduce para aplicar operações em conjuntos de dados.

Por exemplo, considere um conjunto de dados de preços de imóveis, onde cada registro contém informações como preço, metragem e número de quartos. Utilizando uma função lambda, podemos filtrar os imóveis com preço menor que R$ 1.000.000:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"

dados = [{'preco': 900000, 'metragem': 200, 'quartos': 3},
         {'preco': 1200000, 'metragem': 300, 'quartos': 4},
         {'preco': 800000, 'metragem': 150, 'quartos': 2},
         {'preco': 1000000, 'metragem': 250, 'quartos': 3},
         {'preco': 1100000, 'metragem': 280, 'quartos': 3}]

imoveis_baratos = filter(lambda x: x['preco'] < 1000000, dados)
print(list(imoveis_baratos))
```

O código acima irá imprimir apenas os imóveis com preço menor que R$ 1.000.000.

Outro exemplo é utilizando a função map para aplicar uma operação em todos os elementos de um conjunto de dados. Por exemplo, se quisermos aumentar o preço de todos os imóveis em 10%, podemos utilizar o seguinte código:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"

imoveis_aumento = map(lambda x: {'preco': x['preco']*1.1, 'metragem': x['metragem'], 'quartos': x['quartos']}, dados)
print(list(imoveis_aumento))
```

Este código irá imprimir uma lista com os imóveis onde o preço foi aumentado em 10%.

Além disso, as funções lambda também são úteis em conjunto com o pandas, biblioteca para manipulação e análise de dados em Python. Por exemplo, podemos utilizar uma função lambda para aplicar uma operação em uma coluna específica de um DataFrame.

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
import pandas as pd

# Criando um DataFrame com dados de preços de imóveis
df = pd.DataFrame(dados)

# Aplicando uma função lambda para aumentar o preço em 10%
df['preco'] = df['preco'].apply(lambda x: x*1.1)

# Exibindo o DataFrame com preços atualizados
print(df)
```

Este código irá imprimir um DataFrame com os preços dos imóveis aumentados em 10%.

Esses são apenas alguns exemplos do uso das funções lambda em Python. Como elas são flexíveis e fáceis de usar, elas são uma ferramenta valiosa para manipulação de dados em uma variedade de cenários, especialmente em conjunto com outras bibliotecas e funções built-in do Python.


Outro exemplo de como as funções lambda podem ser úteis é na criação de novas colunas em um DataFrame baseado em valores de outras colunas. Por exemplo, considere um conjunto de dados de pacientes com informações sobre idade, peso e altura. Podemos adicionar uma coluna chamada "IMC" (índice de massa corporal) utilizando uma função lambda:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
df['IMC'] = df.apply(lambda x: x['peso'] / (x['altura']**2), axis=1)
```

Neste caso, a função lambda está sendo aplicada a cada linha do DataFrame (usando o parâmetro axis=1) e cálculo do IMC é feito pela divisão do peso pelo quadrado da altura.

As funções lambda também podem ser utilizadas em conjunto com outras bibliotecas de machine learning, como scikit-learn. Por exemplo, ao treinar um modelo de classificação, é comum precisar transformar o conjunto de dados antes de passá-lo para o modelo. Uma técnica comum é normalizar os dados, o que pode ser facilmente realizado com uma função lambda:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler(feature_range=(0, 1))
df[['coluna1','coluna2','coluna3']] = scaler.fit_transform(df[['coluna1','coluna2','coluna3']].apply(lambda x: (x - x.min()) / (x.max() - x.min())))
```

Neste exemplo, estamos utilizando o MinMaxScaler do scikit-learn para normalizar as colunas especificadas no DataFrame. A função lambda está sendo utilizada para calcular a normalização dos dados.

Em resumo, as funções lambda são uma ferramenta poderosa para a manipulação e análise de dados em Python. Elas permitem aplicar operações simples e rápidas em conjuntos de dados, sem a necessidade de criar funções separadas. Elas são especialmente úteis em conjunto com outras bibliotecas e funções built-in do Python, como pandas e scikit-learn, e são uma ótima opção para melhorar a performance e a clareza do seu código.
