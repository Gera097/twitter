const UserService = require("../services/UserService")

require("./../../app/services/UserService")
class UserView {
    static createUser(payload){
        if (payload === null) {
            return { error: "payload no existe"}
        }
        else {UserService.create(payload)}
        
    }
}

module.exports = UserView