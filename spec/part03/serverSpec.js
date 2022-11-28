var hello_world_server = require("../../app/hello_world")
var request = require('request')

   describe("test if hello_world.js is running", function() {
    it("chrcks if server is running", function(finished) {
        var url = 'http://localhost:3000'

        request(url, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            expect(body).toBe('Hello World');
            finished();
        })
    
    });
   });
