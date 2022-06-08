export function showError(err) {
    if (err) console.log(err);
    try {
        Toastify({
            text: "An error occurred",
            duration: 30000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#2e2e38",
                outline: "none",
                borderColor: "#121212",
                boxShadow: "0 0 10px #cf2d2d"
            },
            onClick: function(){} // Callback after click
        }).showToast();
    }
    catch
    {
        alert("An error occurred!");
    }
}