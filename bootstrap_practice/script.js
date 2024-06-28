
    window.addEventListener('load', function() {
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
    });

    function changeMode() {
        var checkBox = document.getElementById('flexSwitchCheckDefault');
        var body = document.getElementsByTagName('body')[0];

        if (checkBox.checked == true) {
            body.style.backgroundColor = "Black";
        } else {
            body.style.backgroundColor = "";
        }
    }
