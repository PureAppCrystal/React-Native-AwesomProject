import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

class Tab3 extends React.Component {
    render() {
        return (
            <WebView
                source={{uri: 'https://facebook.github.io/react-native/'}}
                style={{marginTop: 20}}
            />
        );
    }
}

export default Tab3;