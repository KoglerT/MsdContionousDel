const fs = require("fs");
const createFile = require("../../lib/writeFile")

var handler = function(error) {
    if (error) {
        console.log("failed", error);
    } else {
        console.log('deleted');
    }
}


describe("write File", () => {
    it("see if newFile.txt is created ", () => {
        var path = "newfile.txt";
        var exits = fs.existsSync(path);
        fs.unlink(path, handler);
     
        
        
        
        setTimeout(function () {
            createFile();
        }, 8000);
        
        setTimeout(function() {
            expect(exits).toBe(true)}, 3000)

            fs.unlink(path, handler);
    })
})



        




       