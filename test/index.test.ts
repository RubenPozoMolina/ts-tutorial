import request from "supertest";
import app from "../src/index";

describe("GET /", () => {
    it("should return 200", (done) => {
        request(app).get("/")
            .expect(200, done);
    });
});
