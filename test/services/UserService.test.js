const UserService = require("./../../app/services/UserService")

describe("Tests for UserService", () => {

    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "Gera097", "Gerardo")
        expect(user.username).toBe("Gera097")
        expect(user.name).toBe("Gerardo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()

    })
})