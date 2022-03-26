const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const { expect } = chai;

describe ('Testing the GET petition', async() => {
    // Arrange 
    let baseUri = 'http://localhost:8080/books';
    
    it('Consumes GET service', async() => {
        // Act
        const response = await agent.get(baseUri);

        //Assert
        expect(response.status).to.equal(statusCode.OK);
    });

    it('checks that there is data on the response', async() => {
        const response = await agent.get(baseUri);
        expect(response.body).to.not.be.empty;
    });
});
