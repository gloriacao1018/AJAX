document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if (xhr.status === 200) {
                var responseJSON = JSON.parse(xhr.responseText);
                if(responseJSON.success){
                    document.querySelector('#message').innerHTML = 'Data entered successfully';
                } else {
                    // Modify the DOM to show an error message
                    document.querySelector('#message').innerHTML = 'Error entering data';
                }
            } else {
                document.querySelector('#message').innerHTML = 'Error communicating with server';
            }
        }
    };
    xhr.open("POST", "contact.php", true);
    xhr.send(formData);
});