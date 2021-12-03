let view;
function initialize(){
    view = '⛰';
    return {
        closure : function() { 
            console.log('view has been set!');
            return view;
        }
    }
}
let result = initialize();
initialize();
result.closure();