const img = document.getElementById('img');
const author = document.getElementById('author');
const quote = document.getElementById('quote');

//const totalQuotes = document.childNodes('total_quotes');

fetch("https://thatsthespir.it/api")

    .then(res => {

        if (res.ok) {

            res.json().then(data => {
                author.innerHTML = data.author
                img.src = data.photo
                quote.innerHTML = data.quote

            })

        } else {

            console.log("error");
            document.getElementById('error').innerHTML = "Fatal error";
        }
        
    });






