import * as signalr from '@aspnet/signalr';
import { increment } from '../features/Counter/actions';

const signalrMiddleware = (url) =>
{
    return store =>
    {
        let connection = new signalr.HubConnectionBuilder().withUrl(url, {
            accessTokenFactory: () =>
            {
                return '<api-token>';
            }
        }).build();

        connection.on('send', data =>
        {
            let event = JSON.parse(data);
            if (event.messageType === 'NewConversationMessageAdded')
            {
                console.log(event);
                store.dispatch(increment())
            }
        });

        const startConnection = () =>
        {
            connection.start()
                .then(() =>
                {
                    connection.onclose(() =>
                    {
                        startConnection();
                    });
                })
                .catch(error =>
                {
                    setTimeout(() =>
                    {
                        startConnection();
                    }, 5000);
                });
        }
        startConnection();

        return next => action => next(action);
    }
}

export default signalrMiddleware;
