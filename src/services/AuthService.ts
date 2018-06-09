export class AuthService {

    private userName: string;

    constructor(userName: string) {
        this.userName = userName;
    }

    public getName() {
        return this.userName;
    }
}