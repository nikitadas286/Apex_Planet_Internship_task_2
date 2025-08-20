 function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // Form Validation
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || contact === "") {
      alert("All fields are required!");
      event.preventDefault();
    } else if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    } else {
      alert("Form submitted successfully!");
    }
  });

  function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.className = "remove";
    removeBtn.onclick = function() {
      li.remove();
    };

    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}