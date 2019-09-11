import * as signalr from '@aspnet/signalr';
import { increment } from '../actions/Counter';

const signalrMiddleware = (url) =>
{
    return store =>
    {
        let connection = new signalr.HubConnectionBuilder().withUrl(url, {
            accessTokenFactory: () =>
            {
                return 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyZjE5MjUzNTRhMmZhN2M3YWI1MWZmOTI2OGFmMGUwIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1NTYxMTgwMzUsImV4cCI6MTU4NzY1NDAzNSwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5jaGlsemluLmNvbSIsImF1ZCI6WyJodHRwczovL2FjY291bnRzLmNoaWx6aW4uY29tL3Jlc291cmNlcyIsInN1cGVyYXBwLmFwaSJdLCJjbGllbnRfaWQiOiI2MGI4OGM1NS1kZDI2LTRhYjQtYjk1My0wOGI2MmFmZDZkMTUiLCJzdWIiOiI4YjY3ZTg1OC00M2I0LTQ2NzAtODY2NC0wYTlhZDFjNGI3MjAiLCJhdXRoX3RpbWUiOjE1NTYxMTgwMzQsImlkcCI6ImxvY2FsIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInN1cGVyYXBwLmFwaSJdLCJhbXIiOlsicHdkIl19.EG9kDia2eKcWY1EGVvvNaeGukMj_XjNJiULu7CARMbBLkW92IMivHUtsDrjqjXG2dnK2CkxKA-iIATuefjmAWfBiEhEeeh-O7PkXkZZ6RFXA_71bwvGGsvicSOMw6BWQHWvL8hRbYeDojQTqErsgSj95uy0Uwdl09zKuspFHWP7-00OvE68Gk4aPnDjrrEHmGrc7UWxJKnGTMC3GZ3gJ_75U6g89_PZJ5gtIYqG9Ae7ZjAAYWrwzYBuS6iEKNegYj6epghnrEgEjYgj_JlwIwuUmgX6KvBKAVslFlHdFVc-VXZ4GYRL3asU-w0ycZEbkA1ZzrtwCuQzP9j9BWtW2Bw';
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