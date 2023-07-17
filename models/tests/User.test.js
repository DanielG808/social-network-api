const User = require("../User");

describe("User Model", () => {
  it("should validate the email entry", async () => {
    const userData = { username: "Dan", email: "stjimmy400@gmail.com" };
    const result = new User(userData);
    expect(result.validateSync()).toBe(undefined);
  });
});
