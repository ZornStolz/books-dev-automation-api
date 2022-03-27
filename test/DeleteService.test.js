const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const { expect } = chai;

describe ('Testing the DELETE petition', async() => {
    // Arrange 
    let baseUri = 'http://localhost:8080/books';
    let dummy = {name:'test', author:'test'};
    
    it('Consumes DELETE service', async() => {
        // Act
        const res = await agent.post(baseUri).send(dummy);
        let id = res.body.id;
        
        const response = agent.delete(baseUri + '/' + id);
        
        //Assert //bug
        expect(response.status).to.equal(statusCode.OK);

    });
});
