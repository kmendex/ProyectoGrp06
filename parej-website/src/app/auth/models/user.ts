export class User {
    constructor(
        public userID:string='',
        public name:string='',
        public email: string='',
        public password:string='',
        public avatar: string= 'assets/svg/profile/profile.svg',
    ){}
}
