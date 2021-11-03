export class Session {
    constructor(
        public sessionId:string='',
        public patientId:string='',
        public activityId:string='',
        public date:string='',
        public hour:string='',
        public duration:string='',
        public patientName:string='',
        public avatar:string='assets/svg/avatar/avatar.svg',
        public physioId:string=''
    ){}
}
