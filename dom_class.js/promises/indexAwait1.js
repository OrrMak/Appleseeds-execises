
async function fetchUsers() {
    try{
        let usersData=await fetch('https://jsonplaceholder.typicode.com/users');
        let data=await usersData.json();
        return data;
    }
    catch (error) {
        console.log('Error fetching users:', error);
    }
}
// fetchUsers();

async function fetchPosts(userId) {
    if(Number.isInteger(userId)){
       try{
            let postsData=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            let posts=await postsData.json();

            // Check if posts array is empty
             if (posts.length === 0) {
                console.log(`No posts found for user ID ${userId}`);
                return [];
            } else {
                return posts;
            }
        }
        catch (error) {
            console.log('Error fetching posts:', error);
        }
    }
    else{
        console.log('userId Must Be an Integer');
    }
}
// fetchPosts(4);

async function displayUserAndPosts() {
    try{
        const users = await fetchUsers();
        const usersContainer=document.getElementById('users');
        
        users.forEach(async user => {    
            const userSection=document.createElement('section');
            usersContainer.appendChild(userSection);

            userSection.innerHTML =`
                    <h2>${user.name}</h2>
                    <p><strong>Email:</strong>${user.email}</p>
                    <div class="posts"></div>`;

            const postsContainer = userSection.querySelector('.posts');
            
            try{
                const posts= await  fetchPosts(user.id);
                posts.forEach(post => {
                    const postDiv=document.createElement('div');
                    postDiv.innerHTML=`<strong>${post.title}</strong><br>${post.body}`;
                    postsContainer.appendChild(postDiv);
                });
            }
            catch(error){
                console.log(`Error fetching posts for user ID ${user.id}:`, error)
            }
        });

    }
    catch(error){
        console.log('Error fetching users:', error);
    }
}

displayUserAndPosts();