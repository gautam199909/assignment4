const assert = require('chai').assert;
const app = require('./main');

describe('App' , function(){
    it('valid credit card number',function(){
        assert.equal(app('374245455400126'),true);
    })
    it('invalid credit card number',function(){
        assert.equal(app('4388576018402626'),false);
    })
    it('invalid credit card number',function(){
        assert.equal(app('438857601840abcd6'),false);
    })


  
})