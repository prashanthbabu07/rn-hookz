import * as signalR from '@aspnet/signalr';
import { increment } from '../reducers/actions/Counter';

const signalr = (url) =>
{
    return store =>
    {
        let connection = new signalR.HubConnectionBuilder().withUrl(url, {
            accessTokenFactory: () =>
            {
                return "eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyZjE5MjUzNTRhMmZhN2M3YWI1MWZmOTI2OGFmMGUwIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1NTYxMTgwMzUsImV4cCI6MTU4NzY1NDAzNSwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5jaGlsemluLmNvbSIsImF1ZCI6WyJodHRwczovL2FjY291bnRzLmNoaWx6aW4uY29tL3Jlc291cmNlcyIsInN1cGVyYXBwLmFwaSJdLCJjbGllbnRfaWQiOiI2MGI4OGM1NS1kZDI2LTRhYjQtYjk1My0wOGI2MmFmZDZkMTUiLCJzdWIiOiI4YjY3ZTg1OC00M2I0LTQ2NzAtODY2NC0wYTlhZDFjNGI3MjAiLCJhdXRoX3RpbWUiOjE1NTYxMTgwMzQsImlkcCI6ImxvY2FsIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInN1cGVyYXBwLmFwaSJdLCJhbXIiOlsicHdkIl19.EG9kDia2eKcWY1EGVvvNaeGukMj_XjNJiULu7CARMbBLkW92IMivHUtsDrjqjXG2dnK2CkxKA-iIATuefjmAWfBiEhEeeh-O7PkXkZZ6RFXA_71bwvGGsvicSOMw6BWQHWvL8hRbYeDojQTqErsgSj95uy0Uwdl09zKuspFHWP7-00OvE68Gk4aPnDjrrEHmGrc7UWxJKnGTMC3GZ3gJ_75U6g89_PZJ5gtIYqG9Ae7ZjAAYWrwzYBuS6iEKNegYj6epghnrEgEjYgj_JlwIwuUmgX6KvBKAVslFlHdFVc-VXZ4GYRL3asU-w0ycZEbkA1ZzrtwCuQzP9j9BWtW2Bw";
            }
        }).build();

        connection.on('send', data =>
        {
            console.log("dispatch actions from here", data);
            store.dispatch(increment())
        });

        connection.start()
            .then(r =>
            {
                console.log(connection);
            })
            .catch(error =>
            {
                console.log(error);
            });

        console.log("**********signalr", url);

        return next => action =>
        {
            return next(action);
        }
    }
}

export default signalr;