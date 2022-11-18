//DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");
let count = 1;

//関数
const addList = (user) => {
  const list = document.createElement("li");
  list.innerText = user.name;
  lists.appendChild(list);
};
const getUsers = async () => {
  //データのやりとり

  let res = await fetch("https://api.disneyapi.dev/characters?page=" + count);

  const users = await res.json();
  return users;
};

const listUsers = async () => {
  const users = await getUsers();

  //DOM操作
  users.data.forEach(addList);
  count++;
};

//イベント
addEventListener("load", listUsers);
button.addEventListener("click", listUsers);
