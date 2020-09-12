const formatValue = (value: number | string): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    +value,
  );

export default formatValue;
