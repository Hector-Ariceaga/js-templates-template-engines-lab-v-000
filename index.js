function createPost() {
  let postTitle = document.getElementById('titleName').value
  let postAuthor = document.getElementById('authorName').value
  let postText = document.getElementById('postText').value
  console.log(postTitle)
  console.log(postAuthor)
  console.log(postText)

  let postTemplate = document.getElementById('post-template').innerHTML;

  let templateFn = _.template(postTemplate)

  let page = document.getElementById('page-template').innerHTML

  let templateHTML = templateFn({postTitle: postTitle, postAuthor: postAuthor, postText: postText})

  page.innerHTML += templateHTML
}

function postComment() {

}
