import {Publisher, PublisherModel} from 'enqueuer-plugins-template';

export class MyPublisher extends Publisher {

    public constructor(publisherProperties: PublisherModel) {
        super(publisherProperties);
    }

    public async publish(): Promise<void> {
        //Publish it to somewhere
        //If it's a synchronous implementation, don't forget setting the 'messageReceived' attribute
        this.messageReceived = {data: 'someValue'};
    }

}
