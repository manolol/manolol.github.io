let getQuote = () => {

    let text, author;

    let randomColor = "#" + Math.floor(Math.random() * 999999);
    console.log("background color: " + randomColor);
    document.getElementById('body').style.backgroundColor = randomColor;
    let buttons = document.getElementsByClassName('button');
    document.getElementById('text').style.color = randomColor;
    document.getElementById('author').style.color = randomColor;
    document.getElementById('quote-icon').style.color = randomColor;
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = randomColor;
    }

    $.ajax({
        url: "http://api.forismatic.com/api/1.0/",
        jsonp: "jsonp",
        dataType: "jsonp",
        data: {
            method: "getQuote",
            lang: "en",
            format: "jsonp"
            
        },
        
        success: function(response)   {
          
          text = response.quoteText;
          author = response.quoteAuthor;
          $("#text").text(text);
          
          if (author)   {
            $("#author").text("- " + author);
          } else  {
            $("#author").text(" ~ Unknown");
          }
        }
    });

  }

$(document).ready(function() {
    getQuote();
    $("#new-quote").click(getQuote);
});

