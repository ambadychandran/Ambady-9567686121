const request = require('supertest');
const app = require('../src/app');

describe('GET /GetAll', () => {
    it('gets all cards', async () => {
        const res = await request(app).get('/GetAll');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([]);
    });
});

describe('POST /Add', () => {

    it('returns an error when input is missing', async () => {
        let card = { name: "John Doe" };
        const res = await request(app)
            .post('/Add')
            .send(card);

        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual({  success: false , error: 'Input is missing' });
    });

    it('returns an error when card number is too long', async () => {
        let card = { name: "John Doe", cardNumber: "12345678123456781234567", limit: 1000 };
        const res = await request(app)
            .post('/Add')
            .send(card);

        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual({ success: false , error: 'Card number too long' });
    });

    it('returns an error when input contains special characters', async () => {
        let card = { name: "John Doe", cardNumber: "123456781234A678", limit: 1000 };
        const res = await request(app)
            .post('/Add')
            .send(card);

        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual({  success: false, error: 'Invalid input' });
    });

    it('returns an error with invalid card number', async () => {
        let card = { name: "John Doe", cardNumber: "1234567812345679", limit: 1000 };
        const res = await request(app)
            .post('/Add')
            .send(card);

        expect(res.statusCode).toEqual(400);
        expect(res.body).toEqual({  success: false , error: 'Invalid card number' });
    });

    it('creates a new credit card with valid card number', async () => {
        let card = { name: "John Doe", cardNumber: "4485275742308327", limit: 1000 };
        const res = await request(app)
            .post('/Add')
            .send(card);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
                success: true,
                data: {
                    name: "John Doe",
                    cardNumber: "4485275742308327",
                    limit: 1000,
                    balance: 0
                }
            }
        );
    });

});

