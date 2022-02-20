const postTitle = document.getElementById('postTitle');
const postBody = document.getElementById('postBody');
const postSubmit = document.getElementById('postSubmit');
let userId = document.getElementById('userId');
userId.style.display = 'none';
let hiddenIds = document.querySelectorAll('.postId');
hiddenIds.forEach(id => {
  id.style.display = 'none';
});

const deleteButtons = document.querySelectorAll('.deleteButton');

const deleteQuery = (e)=> {
  e.preventDefault();
  try {
    let postId = e.target.parentNode.firstChild.nextSibling.textContent;
  userId = userId.textContent;
  fetch("http://localhost:5001/api/posts", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          post_id: postId
        }),
      }).then(
          (res)=>{
              window.location.href = 'http://localhost:5001/dashboard';
          }
      );
  } catch (err) {
    console.log(err)
  }
  

}


const postQuery = (e) => {
  e.preventDefault();
  try {
    fetch("http://localhost:5001/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: postTitle.value,
          body: postBody.value,
          user_id: userId.textContent,
          date_stamp: Date()
        }),
      }).then(
          (res)=>{
              window.location.href = 'http://localhost:5001/dashboard';
          }
      );
  } catch (err) {
    console.log(err);
  }
    
}

postSubmit.addEventListener('click', postQuery);
deleteButtons.forEach(element => {
  element.addEventListener('click', deleteQuery);
});