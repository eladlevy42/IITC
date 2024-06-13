const elemFormCreate = document.querySelector("#formCreate");
const elemInputTitle = elemFormCreate.querySelectorAll("input")[0];
const elemInputViews = elemFormCreate.querySelectorAll("input")[1];
const elemPostsLength = document.querySelector("#postLength");
const elemFormDelete = document.querySelector("#formDelete");
const elemInputIdToDelete = elemFormDelete.querySelector("input");

const baseUrl = "http://localhost:3000";
const elemSuccess = document.querySelector("#success");
const elemFailure = document.querySelector("#failure");
const urlPosts = `${baseUrl}/posts`;
elemFormCreate.addEventListener("submit", addPost);
elemFormDelete.addEventListener("submit", deletePost);
function getLength() {
  axios
    .get(urlPosts)
    .then(function (response) {
      const posts = response.data;
      elemPostsLength.innerText = posts.length;
      setSuccess();
    })
    .catch(function (error) {
      setFailure();
    });
}

function setSuccess() {
  elemSuccess.innerText = "success";
}

function resetAlert() {
  elemSuccess.innerText = "";
  elemFailure.innerText = "";
}
async function deletePost(e) {
  e.preventDefault();
  resetAlert();
  const url = `${urlPosts}/${elemInputIdToDelete.value}`;
  await axios.delete(url).then(setSuccess).catch(setFailure);
}

function addPost(e) {
  e.preventDefault();
  const formData = new FormData(elemFormCreate);
  resetAlert();
  console.log(formData);
  axios
    .post(urlPosts, formData, {
      headers: { "Content-Type": "application/json" },
    })
    .then(function (response) {
      getLength();
      console.log(response);
      setSuccess();
    })
    .catch(function (error) {
      console.log(error);
      setFailure();
    });
}
function setFailure() {
  elemFailure.innerText = "failure";
}
