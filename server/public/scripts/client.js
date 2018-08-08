console.log('JS');

let FoodApp = angular.module('FoodApp', []);

FoodApp.controller('FoodController', function(){
    let fc = this;

    fc.addFood = function(){
        console.log('in add food, give me', fc.foodIn);
        
    }
})