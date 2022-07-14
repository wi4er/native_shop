const request = require("supertest");
const app = require("..");
const cheerio = require("cheerio");

// jest.mock("../../environment", () => ({
// }));


describe("Detail page", () => {
    test("Should render", async () => {
        await request(app)
            .get("/search/?q=lore")
            .expect(200)
            .then(res => {
                // console.log(res.text);


            })
    });
});
