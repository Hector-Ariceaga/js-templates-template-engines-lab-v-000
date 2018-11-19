function createPost() {
  let postTitle = document.getElementById('titleName').value
  let postAuthor = document.getElementById('authorName').value
  let postText = document.getElementById('postText').value

  let pageTemplate = _.template(document.getElementById('page-template'))
  let postTemplate = _.template(document.getElementById('post-template'))
  let commentsTemplate = _.template(document.getElementById('comments-template'))

  console.log(pageTemplate)
  console.log(postTemplate)
  console.log(commentsTemplate)

  let page = document.getElementById('page-template').innerHTML

  let templateHTML = templateFn({postTitle: postTitle, postAuthor: postAuthor, postText: postText})

  page.innerHTML += templateHTML
}

function postComment() {

}
