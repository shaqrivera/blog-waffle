const postTitle = document.getElementById('postTitle');
const postBody = document.getElementById('postBody');
const postSubmit = document.getElementById('postSubmit');
let hiddenIds = document.querySelectorAll('.postId');
hiddenIds.forEach(id => {
  id.style.display = 'none';
});

const deleteButtons = document.querySelectorAll('.deleteButton');

const deleteQuery = (e)=> {
  e.preventDefault();
  try {
    let postId = e.target.parentNode.firstChild.nextSibling.textContent;
  fetch("/api/posts", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: postId
        }),
      }).then(
          (res)=>{
              window.location.href = '/dashboard';
          }
      );
  } catch (err) {
    console.log(err)
  }
  

}


const postQuery = (e) => {
  e.preventDefault();
  if(postTitle.value && postBody.value){
  try {
    fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: postTitle.value,
          body: postBody.value,
          date_stamp: Date()
        }),
      }).then(
          (res)=>{
              window.location.href = '/dashboard';
          }
      );
  } catch (err) {
    console.log(err);
  }
  }  
}

postSubmit.addEventListener('click', postQuery);
deleteButtons.forEach(element => {
  element.addEventListener('click', deleteQuery);
});
