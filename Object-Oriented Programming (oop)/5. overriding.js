//superclass
class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(Message, receiver) {
        console.log(`${this.sender} sent ${Message} to ${receiver}`)
    }
}
//subclass
class WhatsAppSevice extends MailService {
    BroadcastMessage(Message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(Message, receiver);
        }
    }
    constructor(sender, isBusiness) {
        super(sender);
        this.isBusiness = isBusiness;
    }
    //ovveriding method
    sendMessage(message, receiver) {
        // memanggil method sendMessage pada super class
        super.sendMessage(message, receiver);
        console.log('Massage Via WhatsApp');

    }
}



class EmailService extends MailService {
    DelayedMessage(Message, receiver, Delay) {
        setTimeout(() => {
            this.sendMessage(Message, receiver)
        }, Delay);
    }
}

// const WhatsApps = new WhatsAppSevice('081312201169');
// const Email = new EmailService('ravi.10121015@mahasiwa.unikom.ac.id');

// WhatsApps.sendMessage('Hai', '08134456123');
// WhatsApps.BroadcastMessage('Hai', ['087623341201', '081422389654']);
// WhatsApps.DelayedMessage(); //error

// Email.sendMessage('hai', 'Chelasea@gmail.com');
// Email.DelayedMessage('hai', 'Chelsea@gmail.com', 9000);
// Email.BroadcastMessage(); //error

const mailService = new MailService('some recevier');
const whatsAppSevice = new WhatsAppSevice('081312201169', 'Morata');
mailService.sendMessage('Hai Apa Kabar', 'some rcevier');
whatsAppSevice.sendMessage('hai, udah bangun?', 'some recevier');