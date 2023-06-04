---
sidebar_position: 4
---

# ETL

Os dados são a base para a tomada de decisão e análise em muitas empresas e indústrias. A biblioteca Pandas do Python é uma das ferramentas mais populares para preparar e manipular esses dados. Ele fornece uma série de funções e métodos para trabalhar com tabelas de dados, incluindo operações de junção, conjunto e indexação. Neste artigo, vamos dar uma olhada nos principais códigos de preparação de dados em Pandas.

ETL é uma sigla para "Extrair, Transformar e Carregar", e é um processo utilizado para integrar dados de diferentes fontes em um único sistema. Isso envolve a extração de dados de fontes variadas, sua limpeza e transformação em um formato comum, e carregamento em um sistema centralizado para análise e relatórios. ETL é essencial para a tomada de decisões baseadas em dados em empresas de todos os tamanhos e setores.

## Limpeza de dados
A limpeza de dados é uma etapa importante na preparação de dados, pois permite remover dados ausentes, duplicados e incorretos. A biblioteca pandas fornece funções para limpar dados, como dropna(), drop_duplicates() e replace().

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
import pandas as pd

# Lendo arquivo CSV
df = pd.read_csv('dados.csv')

# Removendo linhas com dados ausentes
df = df.dropna()

# Removendo linhas duplicadas
df = df.drop_duplicates()

# Substituindo valores incorretos
df = df.replace({'valor_errado': 'valor_correto'})

```

## Transformação de dados em Python

A biblioteca pandas em Python é uma das ferramentas mais poderosas para manipulação de dados. Ela fornece uma série de funções que permitem trabalhar com dados em formato tabular, como se fosse uma planilha do Excel. Uma das operações mais comuns que podemos realizar com os dados é o join.

O join é uma operação que combina linhas de dois ou mais tabelas com base em uma coluna comum. Há vários tipos de joins, cada um com suas próprias regras e usos. Aqui está um exemplo de como usar a biblioteca pandas para realizar cada um desses tipos de joins:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
import pandas as pd

# Criando tabelas de exemplo
table1 = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})
table2 = pd.DataFrame({'A': [2, 3, 4], 'C': [7, 8, 9]})

# Inner Join
inner_join = pd.merge(table1, table2, on='A', how='inner')
print(inner_join)

# Left Join
left_join = pd.merge(table1, table2, on='A', how='left')
print(left_join)

# Right Join
right_join = pd.merge(table1, table2, on='A', how='right')
print(right_join)

# Outer Join
outer_join = pd.merge(table1, table2, on='A', how='outer')
print(outer_join)
```

O código acima mostra como usar a função pd.merge() para realizar os tipos de joins mais comuns: inner join, left join, right join e outer join. O parâmetro on especifica a coluna comum que será usada para combinar as tabelas, e o parâmetro how especifica o tipo de join a ser realizado.

Outra operação comum é a união, que combina linhas de duas ou mais tabelas sem se preocupar com colunas duplicadas. Para realizar uma união, você pode usar a função pd.concat():

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
# Union
union = pd.concat([table1, table2])
print(union)
```

Por fim, podemos realizar filtros para selecionar as linhas que atendem a determinadas condições. Para isso, podemos usar o atributo query() ou loc[] para selecionar as linhas desejadas.

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
# Filtros
table1.query("A > 1")
table1.loc[table1['A'] > 1
```

É importante notar que essas são apenas algumas das operações básicas que podem ser realizadas com a biblioteca pandas. Existem muitas outras funções e métodos disponíveis que podem ser usados ​​para manipular e analisar dados de maneira mais avançada.

Além disso, é importante lembrar que ao trabalhar com grandes conjuntos de dados, é importante considerar as limitações de memória e desempenho. A biblioteca pandas possui algumas técnicas para lidar com dados de grande volume, como o uso de chunks para ler e manipular dados em partes menores.

Em resumo, a biblioteca pandas em Python é uma ferramenta poderosa para manipulação de dados. Com ela, é possível realizar operações comuns como join, união e filtros de maneira simples e eficiente. É importante estudar e entender as suas funcionalidades para tirar o melhor proveito dela.


```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
import pandas as pd

# Importando a base de dados do Titanic
df = pd.read_csv("titanic.csv")

# Group By
# Agrupando os passageiros por classe de viagem
grouped = df.groupby("Pclass")

# Acessando o tamanho do grupo
print(grouped.size())

# Aplicando uma função de agregação ao grupo
print(grouped["Survived"].mean())

# Sort
# Ordenando os passageiros por idade
df.sort_values("Age", inplace=True)

# Index
# Definindo a coluna "Name" como índice
df.set_index("Name", inplace=True)

# Selecionando um passageiro pelo índice
print(df.loc["Braund, Mr. Owen Harris"])

# Resetando o índice
df.reset_index(inplace=True)

# Chave
# Criando uma nova coluna como chave
df["key"] = df["Pclass"].astype(str) + "_" + df["Sex"]

# Agrupando os passageiros por chave
grouped = df.groupby("key")

# Acessando o tamanho do grupo
print(grouped.size())
```

Este código importa a base de dados do Titanic usando a biblioteca pandas e aplica as operações mais comuns de group by, sort, index e chave. O groupby é usado para agrupar os passageiros por classe de viagem e calcular a média de sobreviventes. O sort é usado para ordenar os passageiros por idade. O index é usado para definir a coluna "Name" como índice e selecionar um passageiro pelo índice. A chave é criada como a combinação de classe de viagem e gênero dos passageiros e é usada para agrupar os passageiros.



## Retirando Duplicadas

A biblioteca pandas é uma das mais populares e poderosas ferramentas para análise de dados em Python. Ela fornece uma série de funcionalidades para transformar e manipular dados de maneira eficiente. Neste artigo, vamos mostrar como usar algumas das operações mais comuns, como sort, chave e escolha de valores únicos usando tail ou head.

Primeiro, vamos importar a biblioteca pandas e carregar alguns dados de exemplo. Neste exemplo, vamos usar o conjunto de dados "iris" que é fornecido com a biblioteca pandas como exemplo.

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
import pandas as pd

# carregar dados de exemplo
df = pd.read_csv("iris.csv")
```

Agora que temos os dados carregados, vamos começar a realizar algumas operações.

### Ordenando os dados
A primeira operação que vamos mostrar é como ordenar os dados. Usando o método "sort_values", podemos ordenar os dados de acordo com uma ou mais colunas. Por exemplo, se quisermos ordenar os dados pelo comprimento da sépala em ordem crescente, podemos usar o seguinte código:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
df = df.sort_values("sepal_length")
```

Se quisermos ordenar os dados pelo comprimento da sépala e largura da sépala, podemos passar uma lista com as colunas desejadas para o método "sort_values":

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
df = df.sort_values(["sepal_length", "sepal_width"])
```

### Selecionando valores únicos
Outra operação comum é selecionar valores únicos em uma coluna específica. Isso pode ser feito usando o método "unique" da coluna desejada. Por exemplo, se quisermos verificar todos os tipos de espécies diferentes presentes no conjunto de dados, podemos usar o seguinte código:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
species = df["species"].unique()
print(species)
```

### Escolhendo valores com tail() e head()
Por fim, às vezes precisamos escolher apenas alguns valores do topo ou base do nosso conjunto de dados. Isso pode ser feito usando os métodos "head" e "tail". Por exemplo, se quisermos ver as primeiras 5 linhas do nosso conjunto de dados, podemos usar o seguinte código:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
df.head(5)
```

E se quisermos ver as últimas 5 linhas do nosso conjunto de dados, podemos usar o seguinte código:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
df.tail(5)
```

É importante notar que esses métodos também podem ser usados ​​em conjunto com outras operações, como ordenação. Por exemplo, se quisermos ver as 5 linhas com as maiores medidas de comprimento da sépala, podemos usar o seguinte código:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
df.sort_values("sepal_length", ascending=False).head(5)
```

### Conclusão
Este artigo mostrou algumas das operações mais comuns que podem ser realizadas com a biblioteca pandas, incluindo ordenação, seleção de valores únicos e escolha de valores usando head e tail. A biblioteca pandas oferece muitas outras funcionalidades, como agrupamento, junção e filtragem de dados, para ajudar você a realizar a análise de dados de maneira eficiente. Com alguma prática e conhecimento, você pode se tornar muito proficiente em manipular dados usando pandas.



## Linha em Coluna e Coluna em Linha

A biblioteca pandas é uma das principais ferramentas para análise de dados em Python. Ela possui recursos poderosos para manipulação de dados, incluindo as operações de transformação de linha em coluna e coluna em linha. Neste artigo, vamos explorar algumas dessas operações comuns usando exemplos práticos.

Para começar, vamos importar a biblioteca pandas e carregar um conjunto de dados de exemplo:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
import pandas as pd

data = {'Nome': ['John', 'Mary', 'Mike'],
        'Idade': [25, 22, 30],
        'Salário': [35000, 42000, 50000]
        }

df = pd.DataFrame(data)
print(df)

#A saída seria:

   Nome  Idade  Salário
0  John     25    35000
1  Mary     22    42000
2  Mike     30    50000
```

### Transformando linha em coluna
Uma das operações mais comuns é a de transformar linhas em colunas. Isso é conhecido como "melting" ou "desagrupando" os dados. Para fazer isso, usamos o método melt() e especificamos as colunas que queremos manter como índice e as colunas que queremos transformar em colunas. No exemplo abaixo, queremos transformar as colunas "Nome", "Idade" e "Salário" em colunas:


```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
df_melted = pd.melt(df, id_vars=['Nome'], value_vars=['Idade', 'Salário'])
print(df_melted)

#A saída seria:

   Nome variable  value
0  John   Idade     25
1  Mary   Idade     22
2  Mike   Idade     30
3  John  Salário  35000
4  Mary  Salário  42000
5  Mike  Salário  50000
```

Como podemos ver, as colunas "Idade" e "Salário" foram transformadas em colunas "variable" e "value", respectivamente. A coluna "Nome" foi mantida como índice.


### Transformando coluna em linha
Outra operação comum é a de transformar colunas em linhas. Isso é conhecido como "agrupando" ou "pivotando" os dados. Para fazer isso, usamos o método pivot_table() e especificamos as colunas que queremos transformar em índice, as colunas que queremos transformar em colunas e a coluna que queremos usar como valores. No exemplo abaixo, queremos transformar a coluna "Nome" em índice, a coluna "variable" em colunas e a coluna "value" em valores:


```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
df_pivot = df_melted.pivot_table(index='Nome', columns='variable', values='value')
print(df_pivot)

A saída seria:

variable  Idade  Salário
Nome                     
John          25    35000
Mary          22    42000
Mike          30    50000
```

Como podemos ver, a coluna "Nome" foi transformada em índice, a coluna "variable" foi transformada em colunas e a coluna "value" foi usada como valores.

### Agrupando dados
Outra operação comum é agrupar os dados por uma ou mais colunas. Para fazer isso, usamos o método groupby() e especificamos as colunas que queremos usar para agrupar os dados. No exemplo abaixo, queremos agrupar os dados por "Nome" e "variable":

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"

df_grouped = df_melted.groupby(['Nome', 'variable']).mean()
print(df_grouped)


A saída seria:

Copy code
           value
Nome variable   
John Idade    25
     Salário  35000
Mary Idade    22
     Salário  42000
Mike Idade    30
     Salário  50000
```

Como podemos ver, os dados foram agrupados por "Nome" e "variable", e a média foi calculada para cada grupo.

Essas são apenas algumas das operações comuns que podemos realizar com a biblioteca pandas para transformar dados. Com essas técnicas, podemos manipular os dados de maneira flexível e eficiente, preparando-os para análise e visualização.