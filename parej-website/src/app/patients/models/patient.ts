export class Patient {
    constructor(
        public patientId:string='',
        public name:string='',
        public identification:string='',
        public email:string='',
        public phoneNumber:string='',
        public avatar:string='assets/svg/avatar/avatar.svg',
        public description:string='',
        public physioId:string=''
    ){}
}
