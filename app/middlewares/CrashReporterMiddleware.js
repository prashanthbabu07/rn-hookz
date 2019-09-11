const crashReporterMiddleware = store => next => action =>
{
    try
    {
        return next(action);
    }
    catch (error)
    {
        console.error('Caught an exception!', err);
        console.log('Send crash logs to app server');
        throw error;
    }
}

export default crashReporterMiddleware;