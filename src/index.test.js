const { server } = require("./index"); // Adjust the path as necessary
const request = require("supertest");

describe("index.js", function () {
  after(function () {
    server.close(); // Close the server after tests
  });

  it("sTest echo root path", function (done) {
    request(server).get("/").expect(200, done);
  });
});