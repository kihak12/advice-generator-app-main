let last = 0;
    function catchAdvice() {
        fetch("https://api.adviceslip.com/advice")
            .then(function (response) {
                return response.json();
            })
            .then(function (e) {
                if(e.slip.id == last){
                    catchAdvice()
                }
                last = e.slip.id;
                document.getElementById("advice").innerText = "Advice # " + e.slip.id;
                document.getElementById("citation").innerText = "\"" + e.slip.advice + "\"";
            })
            .catch(function (error) {
                console.log("Error: " + error);
            });
    }

    catchAdvice()
    document.getElementById("searchAdvice").addEventListener('click', e => {
        catchAdvice()
    })

    window.addEventListener('resize', function() {
        if(this.window.innerWidth < 800){
            this.document.getElementById("icon").src = "./../images/pattern-divider-mobile.svg";
        }else{
            this.document.getElementById("icon").src = "./../images/pattern-divider-desktop.svg";
        }
    }, true);