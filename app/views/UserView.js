const UserService = require("../services/UserService")

require("./../../app/services/UserService")
class UserView {
    static createUser(payload){
        if (payload === null) {
            return { error: "payload no existe"}
        }
        else if (payload.username === null || payload.name === null || payload.id === null) {
            return { error: "necesitan tener un valor válido"}
        }
        else if (!(Object.keys(payload).includes('username') && Object.keys(payload).includes('name') && (Object.keys(payload).includes('id')))) {
            return { error: "necesitan tener un valor válido"}
        }
        else {
            return UserService.create(payload.id, payload.username, payload.name)
        }
        
    }
}

module.exports = UserView