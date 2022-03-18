const name = document.getElementById("name");
const phone = document.getElementById("ProductID");
const date = document.getElementById("date");
const submit = document.getElementById("submit");
const form=document.getElementById('form')



var storage = window.localStorage;

submit.onclick = saveContact = () => {
  if(name.value.length>=6 && phone.value.length>=6 && date.value!=''){
    let contact = {
    id: Math.round(Math.random() * 100000),
    name: name.value,
    phone: phone.value,
    date: date.value,
  };
  storage.setItem(contact.id, JSON.stringify(contact));
  alert('Succesful Register');
  }
  
  
};


const keys = Object.keys(storage);

for (let key of keys) {
  const contact = JSON.parse(storage.getItem(key));
  const contactList = document.getElementById("contact-list");
  var deleteKey = key;

  let contactListBoxes = document.createElement("div");
  let h3Name = document.createElement("h3");
  let spanId = document.createElement("span");
  let br = document.createElement("br");
  let italicDate = document.createElement("i");
  let deleteButton = document.createElement("button");

  deleteButton.onclick = () => {
    storage.removeItem(key);
    window.location.href = "/";
  };

  contactListBoxes.classList.add("container-box");
  h3Name.classList.add("h3");
  spanId.classList.add("id");
  italicDate.classList.add("date");
  deleteButton.classList.add("button");

  h3Name.innerHTML = contact.name;
  spanId.innerHTML = contact.phone;
  italicDate.innerHTML = contact.date;
  deleteButton.innerHTML = "Delete";

  contactListBoxes.appendChild(h3Name);
  contactListBoxes.appendChild(spanId);
  contactListBoxes.appendChild(br);
  contactListBoxes.appendChild(italicDate);
  contactListBoxes.appendChild(br);
  contactListBoxes.appendChild(deleteButton);

  contactList.appendChild(contactListBoxes);

  h3Name.innerHTML = contact.name;
}
