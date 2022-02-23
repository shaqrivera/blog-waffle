document.getElementById('postId').style.display = 'none';
const commentSubmit = document.getElementById('commentSubmit');
const commentDeleteButtons = document.querySelectorAll('.commentDeleteButton');
const commentIds = document.querySelectorAll('.commentId');
commentIds.forEach(commentId => {
  commentId.style.display = 'none';
});


const postId = document.getElementById('postId').textContent;

const commentQuery = async (e) => {
    e.preventDefault();
    const commentBody = document.getElementById('commentBody').value.trim();
    if(commentBody){
      try {
          fetch(`http://localhost:5001/api/posts/${postId}/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            body: commentBody,
            date_stamp: Date()
          }),
        })
        .then(
            (res)=>{
                window.location.href = `http://localhost:5001/post/${postId}`;
            }
        );
      } catch (err) {
          console.log(err);
      }
  }
};

const commentDelete = (e) => {
  e.preventDefault();
  try {
    let commentId = e.target.parentNode.firstChild.nextSibling.textContent;
  fetch(`http://localhost:5001/api/posts/${postId}/comments`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment_id: commentId
        }),
      })
      .then(
          (res)=>{
              window.location.href = `http://localhost:5001/post/${postId}`;
          }
      );
  } catch (err) {
    console.log(err)
  }
  

};

commentDeleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener('click', commentDelete)
});
commentSubmit.addEventListener('click', commentQuery)