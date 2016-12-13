'use strict';

angular.module('admin-page')
       .directive("elerepeat", function($compile){
         return function (scope, ele, attr, ngModel) {
           ele.bind("click", function(){
             scope.ckctrl.num++;
             console.log(scope.ckctrl.num);
             var ele = scope.ckctrl.genString();
             angular.element(document.getElementsById("working"))
                    .append($compile(ele)(scope));
           });

         };
       });
