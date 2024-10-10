

const usersData=fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        if(!response.ok){
            console.log('error')
        }
        return response.json();
    })
    .then(usersData=>{
        const users=document.getElementById('users');

        usersData.forEach(element => {
            const userDiv=document.createElement('div');
            userDiv.classList.add('user');
            users.appendChild(userDiv);
            userDiv.innerHTML =`
                <h2>${element.name}</h2>
                <p><strong>Email:</strong> ${element.email}</p>
                <div class="posts"></div>`

            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${element.id}`)
                .then(response=>{
                    if(!response.ok){
                        console.log('error getting post of userid')
                    }
                    console.log('error getting posts for posts');
                    return response.json();
                })
                
                .then(postsData=>{
                    const postContainer=userDiv.querySelector('.posts'); //!!
                    const postHeader=document.createElement('h2')
                    postContainer.appendChild(postHeader)
                        
                    postsData.forEach(el => {
                        const postDiv=document.createElement('div')
                        postDiv.classList.add('post')
                        postDiv.innerHTML = `<strong>${el.title}</strong><br>${el.body}`;
                        postContainer.appendChild(postDiv);
                            });      
                })
                .catch((error)=>{
                    console.log('There was an error fetching posts:', error);
                })
   
        })
    })
    .catch(error=>{
        console.log('There was an error fetching users:', error);
    });

