function addContent() {
  let task_val = document.getElementById("task").value;
  let description_val = document.getElementById("description").value;
  if (localStorage.getItem("items") == null) {
    items_arr = [];
    items_arr.push([task_val, description_val]);
    localStorage.setItem("items", JSON.stringify(items_arr));
  } else {
    items_str = localStorage.getItem("items");
    items_arr = JSON.parse(items_str);
    items_arr.push([task_val, description_val]);
    localStorage.setItem("items", JSON.stringify(items_arr));
  }
  addToTable();
}
function addToTable() {
  if (localStorage.getItem("items") == null) {
    items_arr = [];
    localStorage.setItem("items", JSON.stringify(items_arr));
  } else {
    items_str = localStorage.getItem("items");
    items_arr = JSON.parse(items_str);
  }
  let table_content = document.getElementById("table-contents");
  let str = "";
  items_arr.forEach((element, idx) => {
    str += `<tr>
      <th scope="row">${idx + 1}</th>
      <td>${element[0]}</td>
      <td>${element[1]}</td>
      <td><button class="btn btn-sm btn-primary" onclick="deleteContent(${idx})">Delete</button></td>
      </tr>`;
  });
  table_content.innerHTML = str;
}
function deleteContent(item_idx) {
  let items_str1 = localStorage.getItem("items");
  let items_arr1 = JSON.parse(items_str1);
  items_arr1.splice(item_idx, 1);
  localStorage.setItem("items", JSON.stringify(items_arr1));
  addToTable();
}
function clearlist() {
  if (confirm("Are you sure?")) {
    localStorage.clear();
    addToTable();
  }
}
localStorage.clear();
addtolist = document.getElementById("add-to-list");
addtolist.addEventListener("click", addContent);
