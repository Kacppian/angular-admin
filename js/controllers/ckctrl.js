'use strict';

angular.module('admin-page')
              .controller('CkeditorCtrl', function(){

                var self = this;

                self.num = 1;
                self.options = {
                  language: 'en',
                  allowedContent: true,
                  entities: true
                };

                self.content = {};

                self.printVals = function () {
                  console.log(self.content);
                }

                self.genString = function () {
                  return "<div><div ckeditor='ckctrl.options' ng-model='scope.content.editor" + self.num + "' ></div><h1>{{scope.content.editor" + self.num + "}}</h1></div>"
                }

              });
