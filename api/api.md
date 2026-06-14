
What is API ?
Application Programming Interface 

Example


zomato.  -              Java
weather - api access. - Python 
google map -            C#


APIs 
SOAP
REST

common data exchange process = json

Component - 
1 - Authrization - (credential) - key (OAuth)
response - token 

2 - Resource or Endpoint
3 - Request Payload process 
    a - query param
        google.map.com/api/distance?source=pune&target=mumbai
    b - path param
        google.map.com/api/distance/pune/mumbai
    c - json payload
        {
            "source":"pune",
            "target":"mumbai"
        }    

4 - Methods (CRUD) - Create read update delete
    GET - Read
    POST - Create
    PUT - Update   - entire resource 
    PATCH - Update - partial updates
    DELETE - Delete

5 - Response from API
    
    Response header - type - json/ conlent, cookkies, and session info
    Response code - 
     
     1XX - Informational
     2XX - Success ,   200 - OK, 201 - Created , 204 - No Content
     3XX - Redirectional ,  300 - Moved , 302 - Moved Permanently
     4XX - Client side - 400 - bad request, 401 - Unathorized, 403 - Forbidden, 404 - resouece not found , 405 - Method not allowed, 409 - confluct, 429 - too many request
     5XX - Server Side - 500 - internal server error, 503 - service not available

    response body
      json response . cross check 