const { Recipe, conn , Diet_type} = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Recipe.create({ name: 'Milanesa a la napolitana' });
      });
    });
    describe('id',() => {
      it('should throw an error if id is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid id')))
          .catch(() => done());
      });
      it('should work when its a valid id', () => {
        Recipe.create({ id: '12938192839asjhdaushd1283781237' });
      });
    });
    describe('resume',() => {
      it('should throw an error if resume is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid resume')))
          .catch(() => done());
      });
      it('should work when its a valid resume', () => {
        Recipe.create({ resume: 'loremloremloremloremloremlorem' });
      });
    });
  });
});

describe('Diet Type model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
    describe('Validators', () => {
      beforeEach(() => Diet_type.sync({ force: true }));
      describe('name', () => {
        it('should create if name its correct', () => {
          Diet_type.create({ name: "pepe" })
        })
      })
    });
})
