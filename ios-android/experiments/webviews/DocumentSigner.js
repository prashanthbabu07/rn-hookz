import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { Platform } from 'react-native';

const sourceUri = (
    Platform.OS === 'android'
        ? 'file:///android_asset/'
        : ''
) + 'Web.bundle/loader.html';

const params = 'platform=' + Platform.OS;

const injectedJS = `
  if (!window.location.search) {
    var link = document.getElementById('progress-bar');
    link.href = './site/index.html?${params}';
    link.click();
  }
`;

const DocumentSigner = () => 
{
    let refWebView = null;

    // const run = `
    //   document.body.style.backgroundColor = 'blue';
    //   true;
    // `;

    // const injectScript = () => 
    // {
    //     //document.body.style.backgroundColor = 'blue';
    //     window.ReactNativeWebView.postMessage(injectScript.toString());
    //     true;
    // }

    setTimeout(() =>
    {
        // console.log('************', refWebView);
        refWebView.postMessage("Hello from RN");
        // var script = "(" + injectScript.toString() + "());";
        // console.log(script);
        // refWebView.injectJavaScript(script);
    }, 5000);

    setTimeout(() =>
    {
        refWebView.postMessage("Hello from RN");
    }, 5000);

    return (

        <WebView
            ref={ref => (refWebView = ref)}
            injectedJavaScript={injectedJS}
            source={{ uri: sourceUri }}
            javaScriptEnabled={true}
            originWhitelist={['*']}
            allowFileAccess={true}
            onMessage={event =>
            {
                console.log(event.nativeEvent.data);
            }}
        />

        // <WebView
        //     // source={{ uri: 'https://www.chilzin.com' }}
        //     source={{
        //         html: require('./Document.js')()
        //     }}
        //     originWhitelist={['*']}
        //     style={{ marginTop: 50 }}
        //     ref={ref => (refWebView = ref)}
        //     onMessage={event =>
        //     {
        //         alert(event.nativeEvent.data);
        //     }}
        // />
    );
}

export default DocumentSigner;