import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../dist/calculator.js';

const example = { price: 100000, product: 45000, shipping: 12000, ads: 20000, fee: 3, reserve: 5000 };
test('el ejemplo descuenta cada costo y calcula el umbral publicitario', () => {
  assert.deepEqual(calculate(example), { paymentFee: 3000, adLimit: 35000, margin: 15000, percent: 15 });
});
test('distingue equilibrio y pérdida sin ocultar resultados negativos', () => {
  assert.equal(calculate({ ...example, ads: 35000 }).margin, 0);
  assert.equal(calculate({ ...example, ads: 50000 }).margin, -15000);
  assert.equal(calculate({ ...example, product: 120000 }).adLimit, -40000);
});
test('rechaza valores incompletos, infinitos y fuera del dominio', () => {
  for (const override of [{price:0},{product:-1},{fee:101},{ads:NaN},{shipping:Infinity},{reserve:undefined},{price:100000001}]) {
    assert.throws(() => calculate({ ...example, ...override }), RangeError);
  }
});
test('permite costos nulos y comisiones decimales', () => {
  assert.equal(calculate({ price:100,product:0,shipping:0,ads:0,fee:2.5,reserve:0 }).margin,97.5);
});
