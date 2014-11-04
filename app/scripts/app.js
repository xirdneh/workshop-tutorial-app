(function(window, $, undefined) {
  'use strict';

  console.log('Hello, workshop tutorial!');

  
  var appContext = $('[data-app-name="workshop-tutorial"]');

  //STEP 1: Beginning of STEP 1 code. Delete from here to "STEP 1: DELETE TO HERE " below//
  /* Generate Agave API docs */
  window.addEventListener('Agave::ready', function() {
    var Agave, help, helpItem, helpDetail, methods, methodDetail;

    Agave = window.Agave;

    appContext.html('<h2>Hello AIP Science App &plus; Agave API!</h2><div class="api-help list-group"></div><hr><div class="api-info"></div><br>');

    help = $('.api-help', appContext);

    $.each(Agave.api.apisArray, function(i, api) {
      helpItem = $('<a class="list-group-item">');
      help.append(helpItem);

      helpItem.append($('<h4>').text(api.name).append('<i class="pull-right fa fa-toggle-up"></i>'));
      helpDetail = $('<div class="api-help-detail">');
      helpDetail.append($('<p>').text(api.description));
      helpDetail.append('<h5>Methods</h5>');
      methods = $('<ul>');
      $.each(api.help(), function(i, m) {
        methodDetail = $('<li>');
        methodDetail.append('<strong>' + m + '</strong>');
        var details = api[m.trim()].help();
        if (details) {
          methodDetail.append('<br>').append('Parameters');
          methodDetail.append('<p style="white-space:pre-line;">' + details + '</p>');
        }
        methods.append(methodDetail);
      });
      helpDetail.append(methods);
      helpItem.append(helpDetail.hide());
    });

    $('.api-help > a', appContext).on('click', function() {
      if (! $(this).hasClass('list-group-item-info')) {
        // close other
        $('.api-help > a.list-group-item-info', appContext).removeClass('list-group-item-info').find('.fa').toggleClass('fa-toggle-up fa-toggle-down').end().find('.api-help-detail').slideToggle();
      }

      $(this).toggleClass('list-group-item-info');
      $('.fa', this).toggleClass('fa-toggle-up fa-toggle-down');
      $('.api-help-detail', this).slideToggle();
    });

    var info = $('.api-info', appContext);
    info.addClass('text-center');
    info.append('<p>' + Agave.api.info.title + ': ' + Agave.api.info.description + '</p>');
    info.append('<p><a href="mailto:' + Agave.api.info.contact + '">Contact</a> | <a href="' + Agave.api.info.license + '">License</a> | <a href="' + Agave.api.info.license + '">Terms of use</a></p>');
  });
  //STEP 1: DELETE TO HERE //  
  //STEP 1: Uncomment the following Code://
  /**** To uncomment for STEP 1 delete this entire line ********
  // jshint unused: false
  // Wait for Agave to Bootstrap before executing our code.
  window.addEventListener('Agave::ready', function() {
    var Agave = window.Agave;  
    var successFunction = function(response) {
      //do success stuff!
      console.log('Success! ', response);
    };
    var failFunction = function(err) {
      //do failure stuff!
      console.log('Failure! ', err);
    };

    Agave.api.profiles.me(
	  null, //no input needed here
	  successFunction,
	  failFunction
    );
  });
  *** To uncomment for STEP 1 delete this entire line ********/
  //STEP 1: FINISHED uncommenting here
  
  //STEP 2: DELETE ALL OF STEP 1 CODE
  //STEP 2: Uncomment the following code down to "STEP 2: FINISHED uncommenting here"
  /*** To uncomment for STEP 2 delete this entire line ********
  // jshint unused: false
  // Wait for Agave to Bootstrap before executing our code.
  window.addEventListener('Agave::ready', function() {
    var Agave = window.Agave;  
    var successFunction = function(response) { 
      //do success stuff!
      console.log('Here is the entire response object: ', response); //everything!
      if(response.obj.status !== 'success') { 
        console.log('There was a problem: ' + 
          response.obj.message);
      } else { 
        console.log('Success! Welcome, ', 
          response.obj.result.username);
      } 
    };
    var failFunction = function(err) {
      //do failure stuff!
      console.log('Failure! ', err);
    };

    Agave.api.profiles.me(
	  null, //no input needed here
	  successFunction,
	  failFunction
    );
  });  
  *** To uncomment for STEP 2 delete this entire line ********/
  //STEP 2: FINISHED uncommenting here
  
  //STEP 3: DELETE ALL OF STEP 1 and 2 CODE
  //STEP 3: Uncomment the following code down to "STEP 3: FINISHED uncommenting here"
  /*** To uncomment for STEP 3 delete this entire line ********
  // jshint unused: false
  // jshint camelcase: false
  // Wait for Agave to Bootstrap before executing our code.
  window.addEventListener('Agave::ready', function() {
    var Agave = window.Agave;  
    var successFunction = function(response) { 
    
      if(response.obj.status !== 'success') { 
        console.log('There was a problem: ' + 
          response.obj.message);
      } else { 
        var profile = response.obj.result;
        console.log(JSON.stringify(profile, null, 2));
        $('.profile-name', appContext).text(profile.username);
        
          var vcard = $('.vcard', appContext);
          vcard.find('.fn').text(profile.full_name);
          vcard.find('.email').text(profile.email);
          vcard.find('.tel-primary').text(profile.phone || 'not specified');
          vcard.find('.tel-secondary').text(profile.mobile_phone || 'not specified');

          // do some date parsing
          var parsedDate = profile.create_time.replace(
            /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/,
            '$1-$2-$3T$4:$5:$6'
          );
          vcard.find('.note').text(new Date(parsedDate).toLocaleString());

          vcard.removeClass('hide');        
        
      } 
    };
    var failFunction = function(err) {
      //do failure stuff!
      console.log('Failure! ', err);
    };

    Agave.api.profiles.me(
	  null, //no input needed here
	  successFunction,
	  failFunction
    );
  });
  *** To uncomment for STEP 3 delete this entire line ********/
  //STEP 3: FINISHED uncommenting here
  

})(window, jQuery);
