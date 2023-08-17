---
sidebar_position: 2
---

# Main Commands

Variáveis: são como "caixas" que armazenam valores. Podem ser criadas atribuindo um valor a uma variável usando o sinal de igualdade (=). Exemplo:

```python title="Comandos pandas mais utilizados"
x = 5
Print: usado para imprimir texto ou valores de variáveis na tela. Exemplo:
Copy code
print("Hello, World!")
```


Condicionais: usadas para executar ações diferentes com base em uma condição específica. Exemplo:

```python title="Comandos pandas mais utilizados"
if x > 5:
    print("x é maior que 5")
else:
    print("x é menor ou igual a 5")
```

Laços: usados ​​para repetir ações várias vezes. Exemplo:

```python title="Comandos pandas mais utilizados"
for i in range(5):
    print(i)

```

Listas: são estruturas de dados que armazenam uma coleção de itens. Exemplo:

```python title="Comandos pandas mais utilizados"
my_list = [1, 2, 3, 4, 5]
```

Dicionários: são estruturas de dados semelhantes a listas, mas cada item é identificado por uma chave, ao invés de um índice. Exemplo:

```python title="Comandos pandas mais utilizados"
my_dict = {'chave1': 'valor1', 'chave2': 'valor2'}
```

Funções: são blocos de código que podem ser reutilizados. Exemplo:

```python title="Comandos pandas mais utilizados"
def my_function(x):
    return x * 2

```
Além desses comandos básicos, Python também possui várias bibliotecas para machine learning, incluindo:

NumPy: é uma biblioteca para computação científica que fornece suporte para arrays multidimensionais e operações matemáticas avançadas. Exemplo:

```python title="Comandos pandas mais utilizados"
import numpy as np

# Criando um array
my_array = np.array([1, 2, 3])
```

Pandas: é uma biblioteca para manipulação e análise de dados que fornece suporte para estruturas de dados como DataFrames e Series. Exemplo:

```python title="Comandos pandas mais utilizados"
import pandas as pd

# Lendo um arquivo CSV
df = pd.read_csv('my_data.csv')
```

Scikit-learn: é uma biblioteca para machine learning que fornece algoritmos de aprendizado supervisionado e não supervisionado, incluindo regressão, classificação e clustering. Exemplo:

```python title="Comandos pandas mais utilizados"
from sklearn.linear_model import LinearRegression

Criando um modelo de regressão linear
model = LinearRegression()

Treinando o modelo com dados de treinamento
model.fit(X_train, y_train)

Fazendo previsões com dados de teste
y_pred = model.predict(X_test)
```


4. TensorFlow: é uma biblioteca de computação numérica para aprendizado de máquina criada pelo Google. Ele é usado para construir modelos de aprendizado de máquina escaláveis e personalizados. Exemplo:

```python title="Comandos pandas mais utilizados"
import tensorflow as tf

# Criando um modelo de rede neural
model = tf.keras.Sequential()
model.add(tf.keras.layers.Dense(units=64, activation='relu', input_shape=(784,)))
model.add(tf.keras.layers.Dense(units=10, activation='softmax'))
```


Keras: é uma biblioteca de redes neurais de alto nível escrita em Python. Ele fornece uma interface fácil de usar para construir modelos de aprendizado de máquina. Exemplo:

```python title="Comandos pandas mais utilizados"
from keras.models import Sequential
from keras.layers import Dense

# Criando um modelo de rede neural
model = Sequential()
model.add(Dense(units=64, activation='relu', input_shape=(784,)))
model.add(Dense(units=10, activation='softmax'))
Esses são apenas alguns dos principais comandos e bibliotecas em Python para machine learning. Há muito mais recursos e técnicas disponíveis, e é importante estudar e experimentar com eles para se tornar um especialista em aprendizado de máquina.
```

Além das bibliotecas de machine learning mencionadas anteriormente, também é comum usar bibliotecas de visualização de dados para analisar o output de modelos de aprendizado de máquina. Uma das bibliotecas mais populares é o matplotlib. Ele permite criar gráficos e plots para visualizar dados de maneira clara e intuitiva.

```python title="Comandos pandas mais utilizados"
import matplotlib.pyplot as plt

# Criando um gráfico de linha
plt.plot([1, 2, 3, 4, 5])
plt.show()
```


Outra biblioteca importante é o seaborn, que é baseado no matplotlib e fornece uma interface mais amigável para criar gráficos estatísticos.

```python title="Comandos pandas mais utilizados"
import seaborn as sns

# Criando um gráfico de distribuição
sns.distplot([1, 2, 3, 4, 5])
plt.show()
```


Uma tarefa importante ao avaliar modelos de aprendizado de máquina é analisar a precisão do modelo. Uma das maneiras de fazer isso é usando a matriz de confusão. A biblioteca pandas pode ser usada para criar facilmente uma matriz de confusão a partir de um conjunto de previsões e valores reais.

```python title="Comandos pandas mais utilizados"
from sklearn.metrics import confusion_matrix

# Criando a matriz de confusão
conf_matrix = confusion_matrix(y_test, y_pred)

# Convertendo para dataframe
conf_matrix_df = pd.DataFrame(conf_matrix, columns=['Predicted Negative', 'Predicted Positive'], index=['Actual Negative', 'Actual Positive'])

# Visualizando a matriz de confusão
print(conf_matrix_df)
```


Usando essas bibliotecas de visualização de dados, os dados gerados pela machine learning podem ser facilmente interpretados e analisados. Isso é vital para entender como um modelo está funcionando e onde ele pode ser melhorado.

Em resumo, Python possui uma série de bibliotecas poderosas para machine learning e visualização de dados. Elas permitem construir modelos avançados, fazer previsões precisas e analisar os resultados de maneira eficiente. É importante estudar e experimentar com essas bibliotecas para se tornar um especialista em aprendizado de máquina.

Outra tarefa importante na construção de modelos de aprendizado de máquina é o feature engineering, que é o processo de selecionar e preparar as features (características) dos dados para incluir no treinamento do modelo.

O feature engineering pode incluir tarefas como:

Seleção de features: Escolhendo quais características incluir no modelo. Isso pode ser feito usando técnicas como análise de correlação e seleção de recursos baseada em importância.

Criação de features: Criando novas características a partir das características existentes. Por exemplo, pode-se criar uma nova característica que represente a média das características existentes.

Transformação de features: Alterando a forma de uma característica existente para melhorar o desempenho do modelo. Por exemplo, aplicando uma transformação logarítmica a uma característica.

Tratamento de valores ausentes: Lidando com dados faltantes antes de incluir as características no modelo.

Normalização de features: Ajustando as características para que tenham valores dentro de um determinado intervalo.



```python title="Comandos pandas mais utilizados"
from sklearn.feature_selection import SelectKBest, mutual_info_classif
from sklearn.preprocessing import MinMaxScaler, Imputer

# Seleção de features
selector = SelectKBest(score_func=mutual_info_classif, k=10)
X_new = selector.fit_transform(X, y)

# Transformação de features
scaler = MinMaxScaler()
X_scaled = scaler.fit_transform(X_new)

# Tratamento de valores ausentes
imputer = Imputer()
X_final = imputer.fit_transform(X_scaled)
```

O feature engineering é uma tarefa crítica para o sucesso do aprendizado de máquina, pois as características selecionadas e preparadas podem ter um grande impacto no desempenho do modelo. Isso inclui a precisão, a capacidade de generalizar para novos dados e a capacidade de interpretar os resultados.

Uma boa prática é fazer uma análise exploratória dos dados antes de começar a fazer feature engineering. Isso pode ajudar a identificar características relevantes e descartar características irrelevantes ou redundantes. Além disso, é importante testar e comparar diferentes abordagens de feature engineering para encontrar a melhor solução.

É importante lembrar que o feature engineering é um processo iterativo e pode ser um trabalho constante. Pode ser necessário continuar ajustando e melhorando as características conforme novos dados são adicionados ou novos problemas são abordados.

Em resumo, o feature engineering é uma tarefa crítica no processo de construção de modelos de aprendizado de máquina. Ele envolve selecionar e preparar as características dos dados para incluir no treinamento do modelo. Isso pode ter um grande impacto no desempenho do modelo e é uma tarefa iterativa que requer uma análise cuidadosa dos dados e testes de diferentes abordagens.

Para ilustrar como fazer feature engineering usando o exemplo do Titanic, podemos seguir os seguintes passos:

Carregar os dados:

```python title="Comandos pandas mais utilizados"
import pandas as pd

# Carregando os dados do Titanic
data = pd.read_csv("titanic.csv")
```

Analisar exploratoriamente os dados:

```python title="Comandos pandas mais utilizados"
import seaborn as sns

# Analisando a distribuição das características
sns.pairplot(data, hue='Survived')
Selecionar as características:
```


```python title="Comandos pandas mais utilizados"
from sklearn.feature_selection import SelectKBest, mutual_info_classif

# Selecionando as características mais relevantes
X = data[['Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare', 'Embarked']]
y = data['Survived']

selector = SelectKBest(score_func=mutual_info_classif, k=4)
X_new = selector.fit_transform(X, y)


#Verificando as características selecionadas
selected_features = selector.get_support(indices=True)
print("Características selecionadas:", X.columns[selected_features])
```

4. Tratar valores ausentes:
```python title="Comandos pandas mais utilizados"
from sklearn.impute import SimpleImputer

# Tratando valores ausentes
imputer = SimpleImputer(missing_values=np.nan, strategy='mean')
X_new = imputer.fit_transform(X_new)
```

Normalizar as características:


```python title="Comandos pandas mais utilizados"
from sklearn.preprocessing import MinMaxScaler

# Normalizando as características
scaler = MinMaxScaler()
X_new = scaler.fit_transform(X_new)
```

Em seguida, podemos usar as características selecionadas, tratadas e normalizadas para treinar e avaliar nosso modelo de aprendizado de máquina.

É importante lembrar que essa é apenas uma abordagem possível e que outras técnicas de feature engineering podem ser exploradas para melhorar ainda mais o desempenho do modelo. Além disso, é importante testar e comparar diferentes abordagens de feature engineering para encontrar a melhor solução para o problema específico.

É importante lembrar que o feature engineering é um processo iterativo e pode ser um trabalho constante. Pode ser necessário continuar ajustando e melhorando as características conforme novos dados são adicionados ou novos problemas são abordados.

Em resumo, o código acima ilustra como fazer feature engineering usando o exemplo do Titanic. Ele mostra como selecionar as características mais relevantes, tratar valores ausentes e normalizar as características para melhorar o desempenho do modelo. É importante lembrar que essa é apenas uma abordagem possível e que é importante testar e comparar diferentes abordagens de feature engineering para encontrar a melhor solução para o problema específico.