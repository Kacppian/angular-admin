'use strict';

angular.module('admin-page', ['ui.bootstrap', 'ui.router', 'ckeditor'])
              .config(function($stateProvider, $urlRouterProvider){

              $stateProvider
                .state("main", {
                  url: "/",
                  templateUrl: "./views/main.html",
                })
                .state("editor", {
                  url: "/editor",
                  templateUrl: "./views/editor.html",
                  controller: "CkeditorCtrl",
                  controllerAs: "ckctrl",
                })

                $urlRouterProvider.otherwise('/');
              });
