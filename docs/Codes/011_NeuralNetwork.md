---
sidebar_position: 11
---

# Neural Network

## Simple Example

```python title="Loop em Arquivos CSV"
import pandas as pd
import numpy as np

# Importing the dataset
data = pd.read_csv('titanic.csv')

# Preprocessing and cleaning the data
data = data.drop(['Name','Ticket','Cabin'], axis=1)
data = data.fillna(data.mean())
data.loc[data["Sex"] == "male", "Sex"] = 0
data.loc[data["Sex"] == "female", "Sex"] = 1
data.loc[data["Embarked"] == "S", "Embarked"] = 0
data.loc[data["Embarked"] == "C", "Embarked"] = 1
data.loc[data["Embarked"] == "Q", "Embarked"] = 2

# Indicator variable
data["FamilySize"] = data["SibSp"] + data["Parch"] + 1
data["IsAlone"] = 0
data.loc[data.FamilySize == 1, "IsAlone"] = 1
data = data.drop(['SibSp','Parch','FamilySize'], axis=1)

# Splitting the dataset into the Training set and Test set
X = data.iloc[:, 1:].values
y = data.iloc[:, 0].values
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)

# Feature Scaling
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

# Building the Neural Network
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import Dropout

classifier = Sequential()

# Adding the input layer and the first hidden layer with dropout
classifier.add(Dense(units = 6, kernel_initializer = 'uniform', activation = 'relu', input_dim = 7))
classifier.add(Dropout(rate = 0.1))

# Adding the second hidden layer with dropout
classifier.add(Dense(units = 6, kernel_initializer = 'uniform', activation = 'relu'))
classifier.add(Dropout(rate = 0.1))

# Adding the output layer
classifier.add(Dense(units = 1, kernel_initializer = 'uniform', activation = 'sigmoid'))

# Compiling the Neural Network
classifier.compile(optimizer = 'adam', loss = 'binary_crossentropy', metrics = ['accuracy'])

# Fitting the Neural Network to the Training set
classifier.fit(X_train, y_train, batch_size = 10, epochs = 100)

# Predicting the Test set results
y_pred = classifier.predict(X_test)
y_pred = (y_pred > 0.5)

# Creating the Confusion Matrix
from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_test, y_pred)

# Changing the threshold
from sklearn.metrics import roc_auc_score
threshold = 0.4
y_pred = np.where(y_pred > threshold, 1, 0)
cm = confusion_matrix(y_test, y_pred)
print(cm)
```

In this example, we are using the titanic dataset and preprocessing it by cleaning and filling missing values. We also added an indicator variable "IsAlone" to see if the passenger was traveling alone. Then, we split the data into training and test sets and scaled the features using StandardScaler. 
We then built a neural network using Keras library with 2 hidden layers, and Dropout regularization to prevent overfitting. The network was trained using the Adam optimizer and a binary cross-entropy loss function. 
After training the model, we made predictions on the test set and created a confusion matrix to evaluate the performance. Finally, we changed the threshold for classification and re-evaluated the model using the new threshold.



## Adan Otimization
A otimiza????o Adam ?? um algoritmo de otimiza????o que ?? utilizado para atualizar os pesos das redes neurais durante o treinamento. Ele ?? uma varia????o do algoritmo de otimiza????o stochastic gradient descent (SGD) e foi proposto por Kingma e Ba em 2014. Ele combina as boas propriedades do SGD com a adapta????o de taxa de aprendizado baseada em gradientes hist??ricos, como o algoritmo Adagrad. Isso permite que ele se adapte automaticamente ??s diferentes escalas de par??metros e proporcione uma converg??ncia mais r??pida e suave.


## Binary cross-entropy loss
A fun????o de perda binary cross-entropy ?? utilizada para problemas de classifica????o bin??ria, onde temos apenas duas classes. Ela ?? utilizada para medir a diferen??a entre a sa??da prevista e a sa??da desejada. Ela ?? dada por:

L = -(y * log(??) + (1-y) * log(1-??))

onde L ?? a fun????o de perda, y ?? a sa??da desejada (valor verdadeiro) e ?? ?? a sa??da prevista. A finalidade da fun????o de perda ?? minimizar a diferen??a entre a sa??da prevista e a sa??da desejada. Quanto menor for a fun????o de perda, melhor ser?? o desempenho do modelo.


## Results

```python title="Loop em Arquivos CSV"
import matplotlib.pyplot as plt
import numpy as np

# Plotting the loss during training
loss = classifier.history['loss']
plt.plot(loss)
plt.title('Loss during training')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.show()

# Plotting the accuracy during training
acc = classifier.history['accuracy']
plt.plot(acc)
plt.title('Accuracy during training')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.show()

# Plotting the confusion matrix
plt.imshow(cm, cmap=plt.cm.Blues) 
plt.title('Confusion Matrix') 
plt.xlabel('Predicted') 
plt.ylabel('Actual')

tick_marks = np.arange(2)
plt.xticks(tick_marks, ['Survived', 'Not Survived'])
plt.yticks(tick_marks, ['Survived', 'Not Survived'])

for i in range(2):
    for j in range(2):
        plt.text(j, i, cm[i, j], ha='center', va='center', color='black')

plt.show()
```


In this example, we are using the matplotlib library to plot the loss and accuracy during training. The loss is plotted in the first graph, which shows how the loss decreased as the number of epochs increased. The second graph shows the accuracy during training, which indicates how well the model performed on the training set.
Finally, We plotted the confusion matrix, which shows the number of true positives, true negatives, false positives and false negatives. The x-axis represents the predicted values and the y-axis represents the actual values. The diagonal elements represent the number of correct predictions and the off-diagonal elements represent the number of incorrect predictions.

The result of this code is a graphical representation of the training process and the performance of the model, which makes it easier to understand and analyze the results.