import angular from 'angular'
import 'angular-ui-router'
import 'ng-file-upload'
angular.module('wedesi', ["ui.router", "ngFileUpload"])
.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/home')
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: function($location) {
        console.log('in home');
        $('#Carousel').carousel({
        interval: 5000
        });
        $('#Carousel1').carousel({
        interval: 5000
        })
      },
      controllerAs: 'homeCtrl'
    })

    $stateProvider
    .state('post', {
      url: '/post-an-ad',
      templateUrl: 'postad/postad.html',
      controller: function($location, $state, $scope, Upload) {

  $scope.uploadFiles = function(files, errFiles) {
        $scope.files = files;
        $scope.errFiles = errFiles;
        angular.forEach(files, function(file) {
            file.upload = Upload.upload({
                data: {file: file}
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * 
                                         evt.loaded / evt.total));
            });
        });
    }


var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn'),
            allPrevBtn = $('.prevBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    allPrevBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

        $(".form-group").removeClass("has-error");
        prevStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');

       $scope.savePost=function(){
       	console.log($scope.post);
       	$state.go('viewPost');
       }
      },
      controllerAs: 'postCtrl'
    })

    $stateProvider
    .state('viewPost', {
      url: '/view',
      templateUrl: 'postad/view-post.html',
      controller: function($location, $state, $scope) {
      
      },
      controllerAs: 'viewPostCtrl'
    })

     $stateProvider
    .state('viewAll', {
      url: '/view-all',
      templateUrl: 'postad/viewall.html',
      controller: function($location, $state, $scope) {
      
      },
      controllerAs: 'viewAllCtrl'
    })
})
