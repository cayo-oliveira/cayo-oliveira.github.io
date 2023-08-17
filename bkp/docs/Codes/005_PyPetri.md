---
sidebar_position: 5
---

Aqui está um exemplo básico de como modelar uma arquitetura simples de processamento de dados usando o pacote PyPetri em Python:


```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
from pyPetri.petri import *

# Criando lugares
data_storage = Place("Data Storage")
data_processing = Place("Data Processing")
data_output = Place("Data Output")

# Criando transições
data_in = Transition("Data In", in_places=[data_storage], out_places=[data_processing])
data_out = Transition("Data Out", in_places=[data_processing], out_places=[data_output])

# Adicionando marcas iniciais
data_storage.add_tokens(1)

# Executando a transição "Data In"
data_in.fire()

# Verificando o estado atual da rede
print(data_processing.token_no)
# Output: 1

# Executando a transição "Data Out"
data_out.fire()

# Verificando o estado atual da rede
print(data_output.token_no)
# Output: 1

```

Este exemplo mostra como os dados são armazenados em um lugar, depois são processados em outro lugar e finalmente são saídos em outro lugar. As transições representam as operações de enviar os dados do armazenamento para o processamento e depois do processamento para o output. Este exemplo é genérico e não relacionado especificamente com o AWS.

