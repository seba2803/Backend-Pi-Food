const request = require('supertest');
const server = require('../server');
const { conection } = require('../database');

afterAll(async () => {
  // Cierra la conexión de Mongoose al finalizar las pruebas
  await conection.close();
});

describe('Manejador de rutas inexistentes', () => {
  it('Debe devolver un status code 404 al hacer una req a "/{ruta inexistente}" y devolver "Not found"', async () => {
    const req = await request(server).get('/asara');
    expect(req.statusCode).toBe(404);
    expect(req.text).toBe('Not found');
  });
  describe('Rutas del servidor', () => {
    it('Debe devolver un JSON al hacer una req a "/"', async () => {
      const response = await request(server).get('/');
      expect(!Array.isArray(response)).toBeTruthy();
      expect(response.error).toEqual(false);
    });
  });
});
