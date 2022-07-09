const request = require("supertest");
const app = require("..");
const cheerio = require("cheerio");

// jest.mock("../../environment", () => ({
// }));


describe("Detail page", () => {
    test("Should render", async () => {
        await request(app)
            .get("/product/cabbage/")
            .expect(200)
            .then(res => {
                console.log(res.text);
                
                
            })
    });

    test("Shouldn't render with 404", async () => {
        await request(app)
            .get("/product/wrong/")
            .expect(404)
            .then(res => {
                const $ = cheerio.load(res.text);

                const html = $("page-notfound").html()

                console.log(html);
            })
    });

});
