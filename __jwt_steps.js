/*
Objective
1.to secure API
-----------------CREATE TOKEN------------
1.client: after login send user basic info to create token
2.in server side: npm i jsonwebtoken
3. import jsonwebtoken
4.jwt.sign(payload, secret, {expires} )
5.return token to the client side

6. after receiving the token store it in either httponly cookie or local storage (second best solution)
7.use a general space onAuthStateChange>AuthProvider
------------------SEND TOKEN TO SERVER-------------------
1. for sensitive api calls ssend a authorization headers
{authorization: 'Bearer token'}
-----------------------VERIFY TOKEN-----------------------
1. create a function called verifyJWT(middle ware)
2.this function will have 3 params: req,res,next
3.first check  authorization headers exists
4. if not send 401
5.get the token out of the authorization header
6.call jwt.verify(token,secret,(error,decoded)=>{})
7.if err=>send 401
8. set decoded to the rer object so that we can retrieve it later
9. call the nex() to go to the next function
--------------------------------------
10. check whether token has the email that matches the requested email


*/ 