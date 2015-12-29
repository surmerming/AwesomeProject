
'use strict'


import React,{
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    Platform,
    ListView,
    StatusBarIOS,
    BackAndroid,
} from 'react-native';

import Header from '../Header/Header';
import Search from '../Search/Search';
import IndexMenu from '../IndexMenu/IndexMenu';


class CanEatIndex extends Component{

    componentWillMount(){
        if(Platform.OS=='ios'){
            StatusBarIOS.setStyle('light-content');
        }


        BackAndroid.addEventListener('hardwareBackPress', ()=> {
            if(this.refs.nav){
                this.refs.nav.pop();
            }
            return true;
        });

    }



    componentWillUnmount(){
        if(Platform.OS=='ios'){
            StatusBarIOS.setStyle('default');
        }
    }



    render(){

        return (

            <Navigator ref='nav'
                initialRoute={{name: 'home'}}
                renderScene={ this._render_page }  />
        );

    }


    _render_page(route, nav){
        console.log('in render page '+route.name);

        if(route.name=='home'){

            return (
                <View  style={{backgroundColor:'#efeff4',flex:1}}>
                    <Header title='能不能吃' nav={nav}/>

                    <Search nav={nav} />

                    <IndexMenu nav={nav} />
                </View>
            );
        }


        if(!route.page){
            console.error('页面导航请求没有传入page参数.');
            return;
        }

        return (
            route.page
        );

    }


}


module.exports=CanEatIndex;


