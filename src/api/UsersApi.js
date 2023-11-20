import axios from "axios";

class UsersAPI {

    constructor() {
        this.baseUrl = "http://localhost:3001/api";
    }

    async login(credentials) {
        try {
            const url = `${this.baseUrl}/users`;
            const response = await axios.post(url, {
                email: credentials.email,
                password: credentials.password
            });
            return response.data;
        } catch (err) {
            return err;
        }
    }


}

export default UsersAPI