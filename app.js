import { calculate } from './calculator.js';

const money = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });
const percent = new Intl.NumberFormat('es-CO', { maximumFractionDigits: 1 });
const form = document.querySelector('#calculator-form');
const label = document.querySelector('#result-label');
const margin = document.querySelector('#margin');
const rate = document.querySelector('#margin-percent');
const limit = document.querySelector('#ad-limit');
const message = document.querySelector('#result-message');

function update() {
  const inputs = [...form.querySelectorAll('input')];
  if (inputs.some(input => input.value.trim() === '')) {
    label.textContent = 'Faltan datos';
    margin.textContent = 'Sin calcular';
    rate.textContent = 'Completa todos los campos para estimar el margen.';
    limit.textContent = 'Pendiente';
    message.textContent = 'Escribe 0 si no tienes un costo en ese campo.';
    return;
  }
  try {
    const values = Object.fromEntries(inputs.map(input => [input.name, input.valueAsNumber]));
    const result = calculate(values);
    label.textContent = result.margin < 0 ? 'Pérdida por pedido' : result.margin === 0 ? 'Punto de equilibrio por pedido' : 'Contribución por pedido';
    margin.textContent = money.format(result.margin);
    rate.textContent = `${percent.format(result.percent)} % del precio de venta`;
    limit.textContent = result.adLimit < 0 ? 'Sin presupuesto disponible' : money.format(result.adLimit);
    message.textContent = result.margin < 0 ? 'Con estos costos pierdes dinero en cada pedido, incluso antes de costos fijos e impuestos.' : result.margin === 0 ? 'La venta solo cubre los costos ingresados. No queda saldo para costos fijos, impuestos ni trabajo.' : 'Este saldo aún debe cubrir tus costos fijos, impuestos y trabajo.';
  } catch (error) {
    label.textContent = 'Revisa los valores';
    margin.textContent = 'Sin calcular';
    rate.textContent = error.message;
    limit.textContent = 'Pendiente';
    message.textContent = 'Usa importes entre 0 y 100.000.000 COP.';
  }
}
form.addEventListener('input', update);
form.addEventListener('submit', event => { event.preventDefault(); update(); });
form.addEventListener('reset', () => setTimeout(update, 0));
const checks = [...document.querySelectorAll('.checklist input')];
checks.forEach(check => check.addEventListener('change', () => {
  document.querySelector('#check-progress').textContent = `${checks.filter(item => item.checked).length} de ${checks.length} verificaciones completadas`;
}));
update();
