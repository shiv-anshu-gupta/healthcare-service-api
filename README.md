Project Title: Healthcare Service Management API
Description:
This is a simple API to manage healthcare services using Node.js, Express, and MongoDB. It includes endpoints for adding, retrieving, updating, and deleting services.

Prerequisites:
Node.js (version 14 or later)
MongoDB (either locally installed or a MongoDB Atlas account)
Installation and Setup:
Clone the repository 

git clone https://github.com/yourusername/healthcare-service-api.git
cd healthcare-service-api
Install dependencies.

npm install
Set up environment variables.

npm start
The server will run on http://localhost:3000 by default.

API Endpoints:
Add a New Service
POST /api/services

Example body:
json
{
  "name": "Dental Checkup",
  "description": "Routine dental examination.",
  "price": 50
}
Get All Services
GET /api/services

Update a Service
PUT /api/services/:id

Example body:
json
{
  "name": "Vision Test",
  "description": "Eye examination and vision correction.",
  "price": 45
}
Delete a Service
DELETE /api/services/:id

Testing (Optional):
You can test the API using Postman:

Start the server as described above.
Use Postman to interact with the API by sending requests to http://localhost:3000/api/services.
