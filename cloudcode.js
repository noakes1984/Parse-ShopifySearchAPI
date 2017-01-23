Parse.Cloud.httpRequest({

url: PUT_IN_YOUR_URL_AS_A_STRING,
success: function(httpResponse) {
    
    response.success(httpResponse.text);

},
error: function(httpResponse) {

    response.success(httpResponse.text);

}
});
});



var PUT_IN_YOUR_URL_AS_A_STRING3 = 'https://key:key@topboxcuts.myshopify.com/admin/orders.json?page=2';
Parse.Cloud.define("getPage3", function(request, response) {

Parse.Cloud.httpRequest({

url: PUT_IN_YOUR_URL_AS_A_STRING3,
success: function(httpResponse) {
    
    response.success(httpResponse.text);

},
error: function(httpResponse) {

    response.success(httpResponse.text);

}
});
});

var PUT_IN_YOUR_URL_AS_A_STRING1 = 'https://key:key@topboxcuts.myshopify.com/admin/orders/';
var two = '.json';

//+request.params.hello2+/403185860

Parse.Cloud.define("getPage2", function(request, response) {

Parse.Cloud.httpRequest({

url: PUT_IN_YOUR_URL_AS_A_STRING1+request.params.hello2+two,
success: function(httpResponse) {
    
    response.success(httpResponse.text);

},
error: function(httpResponse) {

    response.success(httpResponse.text);

    //console.log(PUT_IN_YOUR_URL_AS_A_STRING1+request.params.hello2+two)

    console.log(request.params.hello2);
    
}
});
});
