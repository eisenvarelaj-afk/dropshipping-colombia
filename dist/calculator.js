export function calculate(values) {
  const keys = ['price', 'product', 'shipping', 'ads', 'fee', 'reserve'];
  if (keys.some(key => typeof values[key] !== 'number' || !Number.isFinite(values[key]) || values[key] < 0) || values.price <= 0 || values.fee > 100 || keys.filter(key => key !== 'fee').some(key => values[key] > 100000000)) {
    throw new RangeError('Completa los campos con valores válidos. El precio debe ser mayor que cero y la comisión debe estar entre 0 y 100 %.');
  }
  const paymentFee = values.price * values.fee / 100;
  const adLimit = values.price - values.product - values.shipping - paymentFee - values.reserve;
  const margin = adLimit - values.ads;
  return { paymentFee, adLimit, margin, percent: margin / values.price * 100 };
}
