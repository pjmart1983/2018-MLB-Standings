$(document).ready(function () {
        $('#portfolio').hover(
        function () {
            $('#myDropdown', this).slideDown("fast");
        }, function () {
            $('#myDropdown', this).slideUp("fast");
        });
    });
