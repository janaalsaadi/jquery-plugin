
$.validator.addMethod("checklower", function(value) {
    return /[a-z]/.test(value);
  });
  $.validator.addMethod("checkupper", function(value) {
    return /[A-Z]/.test(value);
  });
  $.validator.addMethod("checkdigit", function(value) {
    return /[0-9]/.test(value);
  });

  $.validator.addMethod("checkspecialChar", function(value) {
  return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value);
});




$(function() {
  
    

    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
  
        firstname: "required",
        lastname: "required",
        gender:"required",
        email: {
          required: true,
          email: true,
         // nadeemEmail:true
        
        },



        password: {
          required: true,
          minlength: 8,
          checklower: true,
          checkupper: true,
          checkdigit: true,
          checkspecialChar:true

        },
       
      },
   
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        gender:"Please choose your gender",
        password: {
          required: "Please provide a password",
          minlength: "Password must be 8 char at least",
          checklower: "please enter one small letter at least",
          checkupper: "please enter one capital letter at least",
          checkdigit: "please enter one digit  at least",
          checkspecialChar :" please enter one special char at least "
        },

       
     
            email: "Please enter a valid email address",
      

            
      },
      
      
     
      submitHandler: function(form) {
        form.submit();
      }
    });
  });