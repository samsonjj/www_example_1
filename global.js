// capture the current window onload, so that it's not discarded.
// call the following logic after the preexisting window onload event logic.
window_onload_temp = window.onload;
window.onload = () => {
    if (window_onload_temp !== null) {
        window_onload_temp();
    }
    $("#nav-placeholder").load("./nav.html");
}