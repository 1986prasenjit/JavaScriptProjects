import { User } from "./User.model.js";


class Member extends User {
    constructor(name, email) {
        super(name, email)
    }

    borrowBook(){

    }

    returnBook(){

    }
    
    getRole() {
        return "Member"
    }
}

export { Member };