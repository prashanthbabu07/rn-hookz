module.exports = function ()
{
    return `
        <html>
            <head>
                <title>Page Title</title>
            </head>
            <body>

                <h1>My First Heading</h1>
                <p>My first paragraph.</p>

            </body>

            <script>

                window.addEventListener('message', function(data) {
                    //window.ReactNativeWebView.postMessage(data.data);
                    window.ReactNativeWebView.postMessage('Hello from message win');
                }, false);

                document.addEventListener('message', function(data) {
                    //window.ReactNativeWebView.postMessage(data.data);
                    window.ReactNativeWebView.postMessage('Hello from message doc');
                }, false);
                
                setTimeout(function () {
                    window.ReactNativeWebView.postMessage("Hello from WebView...")
                }, 2000)


            </script>
            
        </html>
    `
};