$(document).ready(function () { 

    $("#sat").prop("disabled", true);
    $("#sun").prop("disabled", true);


    $("#temperament_1").on("click", function(){
        $(".territorailBox").hide()
    });

    $("#temperament_2").on("click", function(){
        $(".territorailBox").hide()
    });

    $("#temperament_3").on("click", function(){
        $(".territorailBox").hide()
    });

    $("#temperament_4").on("click", function(){
        $(".territorailBox").show();
    });
    

    $("#diet").change(function() {
        if(this.checked) {
            $("#ifChecked").show();
        } else {
            $("#ifChecked").hide(); 
        }
    });

    $.validator.addMethod("greater", function (value, element, param) {
        return this.optional(element) || parseInt(value) > parseInt($(param).val());
    }, "Invalid value");

    $('[name="timeArrive"]').on('change', function () {
        $('[name="timeLeave"]').valid();
    });

    $('[name="dayTimePhone"]').on('change', function () {
        $('[name="cellPhone"]').valid();
    });

    $('[name="cellPhone"]').on('change', function () {
        $('[name="dayTimePhone"]').valid();
    });

    $("form[name='myForm']").validate({
        rules: {
            catname: {
                required: true,
            },
            age: {
                required: true,
                number: true,
                min: 0
            },
            days: {
                required: true
            },
            timeArrive: {
                required: true,
            },
            timeLeave: {
                greater: "#timeArrive",
                required: true
            },
            specialDiet: "required",
            territorial: "required",
            owner: "required",
            dayTimePhone: {
                required: "#cellPhone:blank",
                number: true,
                minlength: 10,
            },
            cellPhone: {
                required: "#dayTimePhone:blank",
                number: true,
                minlength: 10,
            },
            email: {
                email: true
            },
            contactPhone: {
                required: true,
                number: true,
                minlength: 10,
            },
        },
        messages: {
            catname: {
                required: "*Please enter your cat name",
            },
            age: {
                required: "*Please enter cat age",
                min: "*Not valid value"
            },
            days: "*Please choose a day",
            timeArrive: {
                required: "*Please choose time",
            },
            timeLeave: {
                required: "*Please choose time",
                greater: "*Should be later than the Time Arrive"
            },
            specialDiet: "*Plase enter special diet",
            territorial: "*Plase enter territorial",
            owner: "*Plase enter owner name",
            cellPhone: {
                required: "*Please provide cell phone or daytime phone",
                number:"*Should be  a number",
                minlength: "*Your phone number must be at least 10 characters long",
            },
            dayTimePhone: {
                required: "*Please provide cell phone or daytime phone",
                number:"*Should be a number",
                minlength: "*Your phone number must be at least 10 characters long",
            },
            email: "P*lease enter a valid email address",
            contactPhone: {
                required: "*Please provide contact phone",
                number:"*Should be a number",
                minlength: "*Your phone number must be at least 10 characters long",
            },
        },

    submitHandler: function(form) {
      form.submit();
    }
  });
});

