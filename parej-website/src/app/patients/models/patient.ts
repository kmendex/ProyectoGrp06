export class Patient {
    constructor(
        public patientId:string='',
        public name:string='',
        public email:string='',
        public phoneNumber:string='',
        public avatar:string='assets/svg/avatar/avatar.svg',
        public physioId:string=''
    ){}
}
