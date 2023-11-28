document.querySelector('#dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let xhr = new XMLHttpRequest();
    let form = event.target;

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.responseText);
                if (response.success === "true") {
                    document.querySelector('#responsePara').innerHTML = 'Data was successfully entered!';
                } else {
                    document.querySelector('#responsePara').innerHTML = 'There was an error entering the data.';
                }
            }
        }
    };

    xhr.open('POST', 'form.php', true);
    xhr.send(new FormData(form));
});