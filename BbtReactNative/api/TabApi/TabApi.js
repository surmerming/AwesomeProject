
'use strict'

var propsCheck=require('../../base/PropsCheck/PropsCheck');

class Tab {

    constructor(props) {

        this._compName='TabApi';

        this.options={
            curName:{
                must:true,
                type:'string',
            },
        };

        propsCheck.check(this,props);
        this.props=props;


        this._curName=this.props.curName;

    }

    /*getDefaultProps(){
     return {

     };
     }*/

    clicked(name){
        this._curName=name;
    }

    getCurName(){
        return this._curName;
    }

    isCur(name){
        return this._curName==name;
    }

};



module.exports=Tab;