const fahrenheitToCelsius = (fahrenheit: number) => {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return celsius.toFixed(1);
}

export default fahrenheitToCelsius