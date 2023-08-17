---
sidebar_position: 3
---

# Pandas

## History of Pandas

A biblioteca Pandas para Python é uma das ferramentas mais populares entre os cientistas de dados e engenheiros de dados. Ela foi criada em 2008 por Wes McKinney enquanto ele trabalhava como engenheiro de dados na AQR Capital Management.

A ideia original por trás do Pandas era proporcionar uma ferramenta de análise de dados de alto desempenho e fácil de usar para Python. McKinney estava insatisfe com as opções existentes, como o uso de planilhas do Excel ou ferramentas de banco de dados relacional, e decidiu criar sua própria biblioteca.

O Pandas foi lançado pela primeira vez em 2008 como um projeto open-source no GitHub. Desde então, tem sido amplamente adoptado pela comunidade Python e é agora considerado como uma das principais bibliotecas para análise de dados. Ele é usado em muitos projetos de ciência de dados, análise financeira e engenharia de dados, e é amplamente considerado como uma ferramenta essencial para qualquer pessoa que trabalha com dados em Python.

O Pandas é projetado para lidar com dados em forma de tabela, como os que são encontrados em planilhas do Excel ou em bancos de dados relacionais. Ele oferece uma série de ferramentas para limpeza de dados, manipulação de dados e análise de dados. Ele permite aos usuários fazer coisas como selecionar, filtrar e agrupar dados, bem como criar tabelas pivot e aplicar funções estatísticas.

Além disso, o Pandas tem suporte para lidar com dados faltantes e oferece várias opções para lidar com esses dados. Ele também tem suporte para lidar com dados em formatos diferentes, como CSV, Excel e JSON.

O Pandas tem evoluido muito desde sua criação, e agora é uma das principais bibliotecas de análise de dados em Python. Ele é amplamente utilizado por cientistas de dados, engenheiros de dados e analistas de negócios, e é uma das principais ferramentas utilizadas em projetos de data science.

Em resumo, a biblioteca Pandas é uma das ferramentas mais populares e úteis para análise de dados em Python. Ele foi criado em 2008 por Wes McKinney, e desde então tem evoluído muito e se tornou uma ferramenta essencial para qualquer pessoa que trabalha com dados em Python.

## Principais Comandos

A preparação de dados é uma etapa crucial na ciência de dados, pois permite que os dados sejam limpos, transformados e organizados para facilitar a análise. O Python é uma linguagem de programação popular para a preparação de dados devido à sua grande variedade de bibliotecas e ferramentas. Neste artigo, vamos discutir alguns dos principais comandos do Python utilizados para preparação de dados e ciência de dados.

### Leitura e escrita de arquivos
Para ler e escrever arquivos em Python, podemos usar as bibliotecas pandas e numpy. A biblioteca pandas fornece funções para ler e escrever arquivos em diferentes formatos, como CSV, Excel e JSON. A biblioteca numpy fornece funções para ler e escrever arquivos em formatos binários.

```python title="Reading and Writing a .csv File"
import pandas as pd

# Lendo arquivo CSV
df = pd.read_csv('dados.csv')

# Escrevendo arquivo CSV
df.to_csv('dados_modificados.csv', index=False)
```

```python title="Read and Write Binary File"
import numpy as np

# Lendo arquivo binário
arr = np.load('dados.npy')

# Escrevendo arquivo binário
np.save('dados_modificados.npy', arr)

```

### Comandos mais utilizados

```python title="Comandos pandas mais utilizados"
import pandas as pd

# Criar um DataFrame vazio
df = pd.DataFrame()

# Carregar um arquivo CSV para um DataFrame
df = pd.read_csv('arquivo.csv')

# Mostrar as primeiras linhas do DataFrame
print(df.head())

# Mostrar as últimas linhas do DataFrame
print(df.tail())

# Selecionar uma coluna específica
coluna = df['nome_coluna']

# Selecionar várias colunas
colunas = df[['coluna1', 'coluna2']]

# Filtro por condição booleana
filtro = df[df['coluna'] > valor]

# Ordenar por uma coluna específica
ordenado = df.sort_values(by='coluna')

# Agrupar por uma coluna específica e calcular uma estatística
agrupado = df.groupby('coluna').mean()

# Contar o número de ocorrências em uma coluna
contado = df['coluna'].value_counts()

# Resetar os índices
df.reset_index(drop=True, inplace=True)
```

Por favor, note que esses são apenas alguns exemplos básicos do que pode ser feito com a biblioteca pandas. A biblioteca oferece muitas outras funcionalidades e operações para trabalhar com dados. É recomendável ler a documentação para entender melhor as funcionalidades e como utilizá-las.

```python title="Comandos pandas mais utilizados"
import pandas as pd

# Lista de dicionários representando registros com CPF e data de referência
lista = [{'cpf': '12345678901', 'data_referencia': '2022-01-01', 'outros_dados': 'dado1'},
         {'cpf': '12345678901', 'data_referencia': '2022-01-02', 'outros_dados': 'dado2'},
         {'cpf': '98765432109', 'data_referencia': '2022-01-01', 'outros_dados': 'dado3'},
         {'cpf': '98765432109', 'data_referencia': '2022-01-02', 'outros_dados': 'dado4'},
         {'cpf': '11111111111', 'data_referencia': '2022-01-01', 'outros_dados': 'dado5'},
         {'cpf': '11111111111', 'data_referencia': '2022-01-02', 'outros_dados': 'dado6'}]

# Cria um DataFrame a partir da lista
df = pd.DataFrame(lista)

# Transforma a coluna 'data_referencia' em um tipo de data válido
df['data_referencia'] = pd.to_datetime(df['data_referencia'])

# Agrupa os dados pelo CPF e seleciona a data de referência mais recente
df = df.groupby('cpf').apply(lambda x: x.sort_values(by='data_referencia', ascending=False).head(1))

# Remove o índice gerado pelo agrupamento
df.reset_index(drop=True, inplace=True)

# Exibe o DataFrame final sem duplicidade
print(df)
```

Este código irá criar um DataFrame a partir de uma lista de dicionários, onde cada dicionário representa um registro com cpf, data_referencia e outros_dados. Em seguida, ele transforma a coluna 'data_referencia' em um tipo de data válido, agrupa os dados pelo CPF e seleciona a data de referência mais recente para cada grupo. Por fim, remove o índice gerado pelo agrupamento e exibe o DataFrame final sem duplicidade.

