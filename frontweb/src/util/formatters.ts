export const formatPrice = (price: number) => {
  const params = {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }
  console.log(params)

  return new Intl.NumberFormat('pt-BR', params).format(price)
}
