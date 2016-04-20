# period5

**Name attributes of HTTP protocol makes it difficult to use for real time systems.**
Because the HTTP protocol is only half duplex the server and the user can't communicate simultaneously, so the data can be inacurate, when using the HTTP protocol there's a big overhead opening and closing certain objects like cookies and headers.

**Explain polling and long-polling strategies, their pros and cons.**
Polling sends a request and gets an answer back right after even tho the answer is empty, where as the long polling waits till there's and answer to be sent back.

**What is HTTP streaming, SSE (Server sent events)?**
Makes the server able to send data to the client without a request, which makes it possible to recieve updates as they happen.
but is only from server to client.

**What is WebSocket protocol, how is it different from HTTP communication, what advantages it has over
HTTP?**
Instead of a half duplex communication it's full duplex, so it can both request and recieve data simultainously
 

**Explain what the WebSocket Protocol brings to the Web-world.**
It makes the data recieved more acurate

**Explain and demonstrate the process of WebSocket communication - From connecting client to server,
through sending messages, to closing connection.**

First the client sends request to connect to the server, then the server responses with the answer, if accepted the handshake is done, after that the client and server can comunicate with eachother until one side closes the connection.

Client Requests connection ->  Server respones -> Messages -> until one side closes the connection 


**What's the advantage of using libraries like Socket.IO, Sock.JS, WS, over pure WebSocket libraries in the
backend and standard APIs on frontend? Which problems do they solve?**


**What is Backend as a Service, Database as a Service, why would you consider using Firebase in your
projects?**

**Explain the pros & cons of using a Backend as a Service Provider like Firebase.**

**Explain and demonstrate “three-way data binding” using Firebase and Angular**

**Explain and demonstrate the difference between the simple chat system in your own WebSocket + Node.js
backend vs. Firebase.**
