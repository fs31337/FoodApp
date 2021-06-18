/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  name: 'Milanesa a la napolitana',
  id: "918239a81f29f381asdasd9238",
  resume:"asdaskjdaksjd",

};
const recipe2 = {
  name: 'Fugazza',
  id: "asdasda1123123123",
  resume:"asdaskjdaksjd333333331231231",

};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));

  describe('GET /recipes', () => {
    it('should get 200', () =>
      agent.get('/recipes').expect(200)
    );
  });

  describe('/recipes?name="..."',() =>{
    it('should get 9 recipes', () =>
      agent.get('/recipes?name=Rice')
      .then((res) => expect(res.body.results)));
    it('should get error if recipe not found', () =>
      agent.get('/recipes?name=asdasdasdasdasd')
      .catch((err) => expect(err)));

  describe('/recipes{idReceta}',() =>{
    it('should 1 recipe', () =>
      agent.get('/recipes/717171')
      .then((res) => expect(200)));
      it('should get error if recipe not found', () =>
      agent.get('/recipes/aisdjiajdiasjdiajsdi')
      .catch((err) => expect(err)));
  });

  describe('/recipe',() =>{
    it('should get 200 if recipe its created', () =>
      agent.post('/recipe').send(recipe2).expect(200));
      it('should get error if recipe not found', () =>
      agent.get('/recipes/aisdjiajdiasjdiajsdi')
      .catch((err) => expect(err)));
  });
  })
});
