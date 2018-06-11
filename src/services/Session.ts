export class Session {

    private static singleInstance: Session;

    public authToken: string;
    public userName: string;
    public firstName: string;

    constructor() {
        this.firstName = "UserX";
    }

    public static get Instance() {
        return this.singleInstance || (this.singleInstance = new this());
    }

    public IsLoggedIn() : boolean {
        return (this.authToken !== undefined && this.authToken !== '');
    }
}
