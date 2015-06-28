/**
 * Created by tony on 28/06/15.
 */

var condition,condition2;

$('.dialog-id #ok').click(function(){
    if(condition){
        postData();
    }
    if(condition2){
        getData();
    }
    // ...
});