import { test, expect } from '@playwright/test';

let token = "";
test.beforeEach(async ({ request }) =>{
    let authURL = "http://localhost:4000/api/auth/login"
    let authResponse = await request.post(authURL, 
        {
           data:{
            "email": "admin@acme.test",
            "password": "admin123"
            } 
        }
    )
    expect(await authResponse.status()).toBe(200);
    const jsonBody = await authResponse.json();
    console.log(jsonBody);
    token = await jsonBody.data.token;
    console.log(token);

})

test("Api testing", async ({ request }) => {
    let createUserEndpoint = "http://localhost:4000/api/users"
    const userResponse = await request.post(createUserEndpoint, 
        {
            headers: {
                "Authorization":`Bearer ${token}`
            },
            data: {
                "firstName": "sunday session1",
                "lastName": "api session1",
                "email": "sundaysession1@test.com",
                "phone": "9876543210",
                "role": "QA",
                "status": "Active"
            }
        }
    )
     expect(await userResponse.status()).toBe(201);
    const userjsonBody = await userResponse.json();
    console.log(userjsonBody);
});