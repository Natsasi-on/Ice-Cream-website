$(document).ready(function () {
    // Disable Saturday and Sunday checkboxes
    $("#sat").prop("disabled", true);
    $("#sun").prop("disabled", true);

    // Hide territorial input when certain temperaments are selected
    $("#temperament_1").on("click", function () {
        $(".territorailBox").hide();
    });

    $("#temperament_2").on("click", function () {
        $(".territorailBox").hide();
    });

    $("#temperament_3").on("click", function () {
        $(".territorailBox").hide();
    });

    $("#temperament_4").on("click", function () {
        $(".territorailBox").show();
    });

    // Show/hide special diet input based on checkbox
    $("#diet").change(function () {
        if (this.checked) {
            $("#ifChecked").show();
        } else {
            $("#ifChecked").hide();
        }
    });

    // Custom validation method for checking if one time is greater than another
    $.validator.addMethod("greater", function (value, element, param) {
        return this.optional(element) || parseInt(value) > parseInt($(param).val());
    }, "Invalid value");

    // Trigger validation for 'timeLeave' when 'timeArrive' changes
    $('[name="timeArrive"]').on('change', function () {
        $('[name="timeLeave"]').valid();
    });

    // Trigger validation for 'cellPhone' when 'dayTimePhone' changes
    $('[name="dayTimePhone"]').on('change', function () {
        $('[name="cellPhone"]').valid();
    });

    // Trigger validation for 'dayTimePhone' when 'cellPhone' changes
    $('[name="cellPhone"]').on('change', function () {
        $('[name="dayTimePhone"]').valid();
    });

    // Form validation using the jQuery Validate plugin
    $("form[name='myForm']").validate({
        rules: {
            // Define validation rules for form fields
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
            // Define validation error messages
            catname: {
                required: "*Please enter your cat name",
            },
            age: {
                required: "*Please enter cat age",
                min: "*Not a valid value"
            },
            days: "*Please choose a day",
            timeArrive: {
                required: "*Please choose a time",
            },
            timeLeave: {
                required: "*Please choose a time",
                greater: "*Should be later than the Time Arrive"
            },
            specialDiet: "*Please enter special diet",
            territorial: "*Please enter territorial",
            owner: "*Please enter owner name",
            cellPhone: {
                required: "*Please provide cell phone or daytime phone",
                number: "*Should be a number",
                minlength: "*Your phone number must be at least 10 characters long",
            },
            dayTimePhone: {
                required: "*Please provide cell phone or daytime phone",
                number: "*Should be a number",
                minlength: "*Your phone number must be at least 10 characters long",
            },
            email: "Please enter a valid email address",
            contactPhone: {
                required: "*Please provide contact phone",
                number: "*Should be a number",
                minlength: "*Your phone number must be at least 10 characters long",
            },
        },

        submitHandler: function (form) {
            // Submit the form if it's valid
            form.submit();
        }
    });
});
