import {Subscription, SubscriptionModel} from 'enqueuer-plugins-template';

export class MySubscription extends Subscription {

    constructor(subscriptionModel: SubscriptionModel) {
        super(subscriptionModel);
    }

    public async receiveMessage(): Promise<any> {
        //Get the message and send it back as this method return
        return {received: 'asd', number: 123};
    }

    public async subscribe(): Promise<void> {
        //Override it to open a server, register a listener or something similar
    }

    public async unsubscribe(): Promise<void> {
        //Hook method
        //Override it if you need to close a server, remove a listener or something similar
    }

    public async sendResponse(): Promise<void> {
        //If it's a synchronous protocol, feel free to send a response back
    }

}
