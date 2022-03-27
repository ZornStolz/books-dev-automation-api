# books-dev-automation-api

## **Overview of the testing**

### *Create service*

- POST a complete information for a new book and validates its content
- An empty POST should not give a 200
- An incomplete POST should not give a 200

### *Read service*

- Test that validates if the GET method for the index is working.
- Test that checks if the response has data

### *Update service*

- PUT complete information for a new book and validates its content
- An empty PUT should not give a 200
- An incomplete PUT should not give a 200

### *Delete service*

- Check if the DELETE service works fine. Bug found because the delete doesn't give a rensponse o way to validate.