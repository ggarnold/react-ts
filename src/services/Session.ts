export class Session {

    public authToken: string;
    public userName: string;
    public firstName: string;

    // constructor() { }

    public IsLoggedIn() : boolean {
        return (this.authToken !== undefined && this.authToken !== '');
    }
}