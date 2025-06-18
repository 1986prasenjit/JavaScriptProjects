import { User } from "./User.model.js";


class Admin extends User {
    constructor(name, email) {
        super(name, email)
    }
    getRole(){
        return "Admin"
    }
}

export { Admin };