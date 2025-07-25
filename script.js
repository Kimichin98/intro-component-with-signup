
    document.querySelectorAll("#first-name-form, #last-name-form, #email-form, #password-form").forEach(form => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();


        // Get form elements
    const fields = [
      {
        id: "first-name",
        errorId: "first-name-error",
        iconId: "first-name-icon",
        validate: (val) => val.length > 2 && /^[A-Za-z]+$/.test(val),
        message: "First name must contain letters only.",
      },
      {
        id: "last-name",
        errorId: "last-name-error",
        iconId: "last-name-icon",
        validate: (val) => val.length > 1 && /^[A-Za-z]+$/.test(val),
        message: "Last name must contain letters only.",
      },
      {
        id: "email",
        errorId: "email-error",
        iconId: "email-icon",
        validate: (val) => /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|mx|co|io)$/.test(val),
        message: "Enter a valid email with a standard domain.",
      },
      {
        id: "password",
        errorId: "password-error",
        iconId: "password-icon",
        validate: (val) => val.length > 8,
        message: "Password must be more than 8 characters.",
      },
    ];

    let isValid = true;

    fields.forEach((field) => {
      const input = document.getElementById(field.id);
      const errorEl = document.getElementById(field.errorId);
      const iconEl = document.getElementById(field.iconId);
      const value = input.value.trim();

      // Reset visuals
      input.classList.remove("error-border");
      iconEl.classList.remove("show-error-icon");
      errorEl.textContent = "";

      // Validate field
      if (!field.validate(value)) {
        errorEl.textContent = field.message;
        input.classList.add("error-border");
        iconEl.src = "./images/icon-error.svg";
        iconEl.alt = "error";
        iconEl.classList.add("show-error-icon");
        isValid = false;
      }
    });

    if (isValid) {
      alert("Form submitted successfully!");
    }
  });
  
  });