'use strict';

angular.module('confusionApp')
        .constant("baseURL", "http://localhost:3000/")
        .service('menuFactory',['$resource', 'baseURL', function($resource, baseURL) {

    
                this.getDishes = function(){
                    return $resource(baseURL + "dishes/:id", null, {'update':{method:'PUT' }});
                };

                this.getPromotion = function(){
                    return $resource(baseURL + "promotions/:id", null, {'update':{method:'PUT' }});
                };
                        
        }])

        .factory('corporateFactory',['$resource', 'baseURL', function($resource, baseURL) {
    
            var corpfac = {};

     
            // Implement two functions, one named getLeaders,
            corpfac.getLeaders = function(){
                return $resource(baseURL + "leadership/:id", null, {'update':{method:'PUT'}});
            };
            // the other named getLeader(index)
            // corpfac.getLeader = function(index){
            //     return leadership[index];
            // };

            // Remember this is a factory not a service
            return corpfac;
        }])

    .service('feedbackFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        this.sendFeedbackToDB = function(){
            return $resource(baseURL + "feedback/", null, {'update':{method:'PUT'}});
        };

    }])
;
