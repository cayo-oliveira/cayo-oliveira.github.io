---
sidebar_position: 12
---

# Análise Exploratória de Dados

:::info Book
MACIEL, Paulo. Operational Analysis. In: Performance, Reliability and Availability of Computational Systems Volume I. 1. ed. New York: Springer, 2018. p. 169-190.
:::

## Resumo Estatístico (SQL)

```sql
-- Estatísticas Quantitativas
SELECT
    AVG(quantitativo_coluna) AS Media,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY quantitativo_coluna) AS Mediana,
    STDEV(quantitativo_coluna) AS DesvioPadrao,
    VARIANCE(quantitativo_coluna) AS Variancia,
    SKEWNESS(quantitativo_coluna) AS Skewness,
    KURTOSIS(quantitativo_coluna) AS Kurtosis,
    MIN(quantitativo_coluna) AS Minimo,
    MAX(quantitativo_coluna) AS Maximo
FROM tabela;

-- Box Plot e Outliers não são facilmente calculados em SQL puro

-- Coeficiente de Variação
SELECT
    (STDEV(quantitativo_coluna) / AVG(quantitativo_coluna)) * 100 AS CoeficienteVariacao
FROM tabela;

-- Histograma (Pode ser mais complexo de implementar em SQL puro)
-- Consulte: https://docs.microsoft.com/en-us/sql/t-sql/functions/histogram

-- Estatísticas Categóricas
SELECT
    categoria_coluna,
    COUNT(*) AS Frequencia,
    CAST(COUNT(*) AS FLOAT) / SUM(COUNT(*)) OVER () AS FrequenciaRelativa
FROM tabela
GROUP BY categoria_coluna
ORDER BY Frequencia DESC;

-- Paretos (Requer manipulação adicional dos resultados)
-- Diagramas de Barra e Gráfico de Pizza não são análises diretamente suportadas em SQL puro

-- Box Plot
SELECT
    quantitativo_coluna,
    PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY quantitativo_coluna) AS Q1,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY quantitativo_coluna) AS Mediana,
    PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY quantitativo_coluna) AS Q3,
    MAX(quantitativo_coluna) AS Maximo,
    MIN(quantitativo_coluna) AS Minimo
FROM tabela
GROUP BY quantitativo_coluna;

-- Outliers (baseado em IQR)
WITH OutlierBounds AS (
    SELECT
        quantitativo_coluna,
        PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY quantitativo_coluna) AS Q1,
        PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY quantitativo_coluna) AS Q3
    FROM tabela
    GROUP BY quantitativo_coluna
)
SELECT
    t.quantitativo_coluna,
    CASE
        WHEN t.quantitativo_coluna < ob.Q1 - 1.5 * (ob.Q3 - ob.Q1) OR
             t.quantitativo_coluna > ob.Q3 + 1.5 * (ob.Q3 - ob.Q1) THEN 'Outlier'
        ELSE 'Não Outlier'
    END AS OutlierStatus
FROM tabela t
JOIN OutlierBounds ob ON t.quantitativo_coluna = ob.quantitativo_coluna;
```

