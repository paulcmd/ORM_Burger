$(function () {
    $(".submit").on("click", function (event) {
        event.preventDefault();
        const burger_name = $(".burger-name").val().trim();
        $.ajax("/api/burgers", {
            type: "POST",
            data: { burger: burger_name }
        }).then(() => {
            location.reload();
        });
    });

    $(".devour-btn").on("click", function () {
        let id = $(this).data("id");
        $.ajax("/api/burgers", {
            type: "PUT",
            data: { id: id, devoured: 1 }
        }).then(() => {
            location.reload();
        })
    });

    $(".del-btn").on("click", function () {
        let id = $(this).data("id");
        $.ajax("/api/burgers", {
            type: "DELETE",
            data: { id: id }
        }).then(() => {
            location.reload();
        });
    });

    $(".enjoy-btn").on("click", function () {
        let id = $(this).data("id");
        $.ajax("/api/burgers", {
            type: "PUT",
            data: { id: id, devoured: 0 }
        }).then(() => {
            location.reload();
        });
    });
});