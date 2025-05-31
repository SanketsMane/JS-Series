# project related to DOM 

## Project Link 
[ Click here ]


# solution code 

## project 1

```document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('body');

    buttons.forEach(function (button) {
        console.log(button);
        button.addEventListener('click', function(e) {
            console.log(e.target);

            if(e.target.id=== 'gray'){
                body.style.backgroundColor = e.target.id;
                h1.style.color = 'orange';
            }

            if(e.target.id === 'red'){
                body.style.backgroundColor = e.target.id;
            }

            if(e.target.id === 'green'){
                body.style.backgroundColor = e.target.id;
            }

            if(e.target.id === 'blue'){
                body.style.backgroundColor = e.target.id;
            }

            if(e.target.id === 'canvas'){
                body.style.backgroundColor = 'white';
                const h1 = document.querySelector('.h1');
                h1.style.color = 'red'
            }
        });
    });
});

````

