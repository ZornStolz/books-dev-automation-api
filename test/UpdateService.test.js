const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');
const { assert } = require('chai');

const { expect } = chai;

describe ('Testing the PUT petition', async() => {
    // Arrange 
    let baseUri = 'http://localhost:8080/books';
    let dummy = {name:'test', author:'test'};
    let dummy1 = {name:'testUptd', author:'testUpdt'};

    it('PUT service properly updates a new book', async() => {
        //Arrange
        const res = await agent.post(baseUri).send(dummy);
        let id = res.body.id;
        
        // Act
        const response = await agent.put(baseUri + '/' + id).send(dummy1);

        //Assert
        expect(response.status).to.equal(statusCode.OK);
        assert.equal(response.body.name, dummy1.name);
        assert.equal(response.body.author, dummy1.author);

        //delete tracks
        agent.delete(baseUri + '/' + id);
    });

    
    //bug found
    it('PUT empty data should not update a new book', async() => {
        
        //Arrange
        const res = await agent.post(baseUri).send(dummy);
        let id = res.body.id;
        
        // Act
        const response = await agent.put(baseUri + '/' + id).send({name:'', author:''});

        //Assert
        expect(response.status).to.not.equal(statusCode.OK);

        //delete tracks
        agent.delete(baseUri + '/' + id);
        
    });
    
    //bug found
    it('PUT incomplete data should not update a new book', async() => {
        
        //Arrange
        const res = await agent.post(baseUri).send(dummy);
        let id = res.body.id;
        
        // Act
        const response = await agent.put(baseUri + '/' + id).send({name:'papaya', author:''});

        //Assert
        expect(response.status).to.not.equal(statusCode.OK);

        //delete tracks
        agent.delete(baseUri + '/' + id);
    });
});
