const app = () => {
    const formsubmit = eleById("submit")
 
    formsubmit.addEventListener("click", (e) => {
        e.preventDefault()
        
        const load = eleById("load")
        const success = eleById("success")
        const contactno = eleById("contactno").value
        const email = eleById("email").value
        const name = eleById("name").value
        const comments = eleById("comments").value
        const csrf = document.getElementsByName("csrfmiddlewaretoken")[0].value
        console.log(csrf)
        console.log(contactno)
        const form = eleById("form-data");
        const formData = new FormData(form);
        const data = {
            contactno:contactno,
            email:email,
            name:name,
            comments:comments,
            csrfmiddlewaretoken:csrf,
        }
        load.classList.toggle('none')
        // success.classList.toggle('none')

        fetch('contactform', {
            method: 'POST', // or 'PUT' 
            body: formData,
            headers:{
                "X-CSRFToken":csrf
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('suc:', data);
                form.reset()
                load.classList.toggle('none')
                success.classList.toggle('none')
                setTimeout(()=>{
                success.classList.toggle('none')
                },3000)

            })
            .catch((error) => {
                console.error('Error:', error);
                form.reset()
                load.classList.toggle('none')

                


            });
    })
}

const eleById = (id) => {
    let element = document.getElementById(id)
    return element;
}

app()