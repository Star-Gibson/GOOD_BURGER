$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var freshBurger = {
            // LINK TO HANDLEBARS FORM "freshBurger"
            burger_name: $("#freshBurger").val().trim(),
            devoured: 0
        };

        // POST REQUEST
        $.ajax("/api/burgers", {
            type: "POST",
            data: freshBurger
        }).then(
            function () {
                console.log("ORDER UP!");
                // RELOADS PAGE TO RECEIVE UPDATED LIST
                location.reload();
            }
        );
    });

    //ONCLICK - NOMNOM
    $(".nomnom").on("click", function (event) {
        var id = $(this).data("id");
        // CHANGES DEVOURED VALUE to 1
        var boolean = {
            devoured: 1
        };

        //PUT REQUEST
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: boolean
        }).then(
            function () {
                console.log("changed devoured to", boolean);
                // RELOADS PAGE TO RECEIVE UPDATED LIST
                location.reload();
            }
        );
    });
})