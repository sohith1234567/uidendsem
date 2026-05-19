let eventsData = [
  {
    id: "E101",
    name: "Coding Contest",
    category: "Programming",
    datetime: "2026-03-20 10:00 AM",
    venue: "Lab 1",
    max: 100,
    fee: 100,
    status: "Open"
  },
  {
    id: "E102",
    name: "Project Expo",
    category: "Innovation",
    datetime: "2026-03-20 02:00 PM",
    venue: "Seminar Hall",
    max: 50,
    fee: 150,
    status: "Open"
  },
  {
    id: "E103",
    name: "Hackathon",
    category: "Development",
    datetime: "2026-03-21 09:00 AM",
    venue: "Auditorium",
    max: 30,
    fee: 200,
    status: "Closed"
  },
  {
    id: "E104",
    name: "Tech Quiz",
    category: "Quiz",
    datetime: "2026-03-21 01:00 PM",
    venue: "Room 204",
    max: 60,
    fee: 50,
    status: "Open"
  },
  {
    id: "E105",
    name: "Workshop",
    category: "Training",
    datetime: "2026-03-22 11:00 AM",
    venue: "Lab 2",
    max: 40,
    fee: 120,
    status: "Closed"
  }
];

let registrations = [];
let feedbacks = [];

function updateDateTime() {
  let now = new Date();

  let currentDateTime =
    document.getElementById("currentDateTime");

  if (currentDateTime) {
    currentDateTime.innerText =
      now.toLocaleString();
  }
}

function updateCountdown() {
  let festDate =
    new Date("March 20, 2026 10:00:00").getTime();

  let now = new Date().getTime();

  let diff = festDate - now;

  let countdown =
    document.getElementById("countdown");

  if (!countdown) return;

  if (diff <= 0) {
    countdown.innerText =
      "TechNova 2026 has started!";
    return;
  }

  let days = Math.floor(
    diff / (1000 * 60 * 60 * 24)
  );

  let hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  let minutes = Math.floor(
    (diff % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  let seconds = Math.floor(
    (diff % (1000 * 60)) / 1000
  );

  countdown.innerText =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

function updateDashboard() {
  let total = eventsData.length;

  let openCount =
    eventsData.filter(
      event => event.status === "Open"
    ).length;

  let closedCount =
    eventsData.filter(
      event => event.status === "Closed"
    ).length;

  let totalEvents =
    document.getElementById("totalEvents");

  let openEvents =
    document.getElementById("openEvents");

  let closedEvents =
    document.getElementById("closedEvents");

  if (totalEvents) {
    totalEvents.innerText = total;
  }

  if (openEvents) {
    openEvents.innerText = openCount;
  }

  if (closedEvents) {
    closedEvents.innerText = closedCount;
  }
}

function loadEventsTable() {
  let tbody =
    document.getElementById("eventsTableBody");

  if (!tbody) return;

  tbody.innerHTML = "";

  eventsData.forEach(event => {

    let row = `
      <tr>
        <td>${event.id}</td>
        <td>${event.name}</td>
        <td>${event.category}</td>
        <td>${event.datetime}</td>
        <td>${event.venue}</td>
        <td>${event.max}</td>
        <td>₹${event.fee}</td>
        <td>${event.status}</td>
      </tr>
    `;

    tbody.innerHTML += row;
  });
}

function loadEventDropdown() {
  let eventSelect =
    document.getElementById("eventSelect");

  if (!eventSelect) return;

  eventSelect.innerHTML =
    `<option value="">-- Select Event --</option>`;

  eventsData.forEach(event => {

    let option =
      document.createElement("option");

    option.value = event.name;

    option.textContent =
      `${event.name} (${event.status})`;

    eventSelect.appendChild(option);
  });
}

function showHideTeamFields() {
  let participationType =
    document.getElementById("participationType");

  let teamFields =
    document.getElementById("teamFields");

  if (!participationType || !teamFields)
    return;

  if (participationType.value === "Team") {
    teamFields.classList.remove("hidden");
  } else {
    teamFields.classList.add("hidden");
  }
}

function handleRegistrationForm() {

  let registrationForm =
    document.getElementById("registrationForm");

  if (!registrationForm) return;

  registrationForm.addEventListener(
    "submit",
    function (e) {

      e.preventDefault();

      let studentName =
        document
          .getElementById("studentName")
          .value.trim();

      let registerNumber =
        document
          .getElementById("registerNumber")
          .value.trim();

      let email =
        document
          .getElementById("email")
          .value.trim();

      let mobile =
        document
          .getElementById("mobile")
          .value.trim();

      let department =
        document
          .getElementById("department")
          .value;

      let year =
        document
          .getElementById("year")
          .value;

      let eventName =
        document
          .getElementById("eventSelect")
          .value;

      let participationType =
        document
          .getElementById("participationType")
          .value;

      let teamName =
        document
          .getElementById("teamName")
          .value.trim();

      let teamMembers =
        document
          .getElementById("teamMembers")
          .value;

      let nameError =
        document.getElementById("nameError");

      let regError =
        document.getElementById("regError");

      let emailError =
        document.getElementById("emailError");

      let mobileError =
        document.getElementById("mobileError");

      let eventError =
        document.getElementById("eventError");

      let teamError =
        document.getElementById("teamError");

      let teamMembersError =
        document.getElementById(
          "teamMembersError"
        );

      let successMessage =
        document.getElementById(
          "successMessage"
        );

      nameError.innerText = "";
      regError.innerText = "";
      emailError.innerText = "";
      mobileError.innerText = "";
      eventError.innerText = "";
      teamError.innerText = "";
      teamMembersError.innerText = "";
      successMessage.innerText = "";

      let isValid = true;

      if (studentName === "") {
        nameError.innerText =
          "Enter student name";
        isValid = false;
      }

      if (registerNumber === "") {
        regError.innerText =
          "Enter register number";
        isValid = false;
      }

      if (!email.includes("@")) {
        emailError.innerText =
          "Enter valid email";
        isValid = false;
      }

      if (
        mobile.length !== 10 ||
        isNaN(mobile)
      ) {
        mobileError.innerText =
          "Enter valid 10-digit mobile number";

        isValid = false;
      }

      if (eventName === "") {
        eventError.innerText =
          "Select an event";
        isValid = false;
      }

      let selectedEvent =
        eventsData.find(
          event => event.name === eventName
        );

      if (
        selectedEvent &&
        selectedEvent.status === "Closed"
      ) {
        eventError.innerText =
          "Registration is closed for this event";

        isValid = false;
      }

      if (participationType === "Team") {

        if (teamName === "") {
          teamError.innerText =
            "Enter team name";

          isValid = false;
        }

        if (
          teamMembers < 2 ||
          teamMembers > 4 ||
          teamMembers === ""
        ) {
          teamMembersError.innerText =
            "Team members must be between 2 and 4";

          isValid = false;
        }
      }

      if (!isValid) return;

      let registration = {
        studentName,
        registerNumber,
        email,
        mobile,
        department,
        year,
        eventName,
        participationType,
        teamName,
        teamMembers
      };

      registrations.push(registration);

      successMessage.innerText =
        "Registration Successful!";

      registrationForm.reset();

      document
        .getElementById("teamFields")
        .classList.add("hidden");

      loadRegisteredParticipants();
    }
  );
}

function loadRegisteredParticipants() {

  let tbody =
    document.getElementById(
      "registeredTableBody"
    );

  let count =
    document.getElementById(
      "registrationCount"
    );

  if (!tbody || !count) return;

  tbody.innerHTML = "";

  registrations.forEach(reg => {

    let row = `
      <tr>
        <td>${reg.studentName}</td>
        <td>${reg.registerNumber}</td>
        <td>${reg.eventName}</td>
        <td>${reg.participationType}</td>
        <td>${reg.teamName || "-"}</td>
        <td>${reg.teamMembers || "-"}</td>
      </tr>
    `;

    tbody.innerHTML += row;
  });

  count.innerText =
    registrations.length;
}

function handleFeedbackForm() {

  let feedbackForm =
    document.getElementById("feedbackForm");

  if (!feedbackForm) return;

  feedbackForm.addEventListener(
    "submit",
    function (e) {

      e.preventDefault();

      let fbName =
        document
          .getElementById("fbName")
          .value.trim();

      let fbReg =
        document
          .getElementById("fbReg")
          .value.trim();

      let fbEvent =
        document
          .getElementById("fbEvent")
          .value;

      let fbRating =
        document
          .getElementById("fbRating")
          .value;

      let fbComments =
        document
          .getElementById("fbComments")
          .value.trim();

      let fbRegError =
        document.getElementById(
          "fbRegError"
        );

      let fbEventError =
        document.getElementById(
          "fbEventError"
        );

      let fbRatingError =
        document.getElementById(
          "fbRatingError"
        );

      let fbCommentsError =
        document.getElementById(
          "fbCommentsError"
        );

      let fbSuccess =
        document.getElementById(
          "fbSuccess"
        );

      fbRegError.innerText = "";
      fbEventError.innerText = "";
      fbRatingError.innerText = "";
      fbCommentsError.innerText = "";
      fbSuccess.innerText = "";

      let isValid = true;

      if (fbReg === "") {
        fbRegError.innerText =
          "Enter register number";

        isValid = false;
      }

      if (fbEvent === "") {
        fbEventError.innerText =
          "Select event";

        isValid = false;
      }

      if (fbRating === "") {
        fbRatingError.innerText =
          "Select rating";

        isValid = false;
      }

      if (fbComments === "") {
        fbCommentsError.innerText =
          "Enter comments";

        isValid = false;
      }

      if (!isValid) return;

      let feedback = {
        fbName,
        fbReg,
        fbEvent,
        fbRating: Number(fbRating),
        fbComments
      };

      feedbacks.push(feedback);

      fbSuccess.innerText =
        "Feedback submitted successfully!";

      feedbackForm.reset();

      loadFeedbackSummary();
    }
  );
}

function loadFeedbackSummary() {

  let feedbackList =
    document.getElementById("feedbackList");

  let avgRating =
    document.getElementById("avgRating");

  if (!feedbackList || !avgRating)
    return;

  feedbackList.innerHTML = "";

  let eventRatings = {};

  feedbacks.forEach(feedback => {

    if (!eventRatings[feedback.fbEvent]) {

      eventRatings[feedback.fbEvent] = {
        total: 0,
        count: 0
      };
    }

    eventRatings[feedback.fbEvent]
      .total += feedback.fbRating;

    eventRatings[feedback.fbEvent]
      .count++;

    let card = `
      <div class="feedbackCard">
        <h3>${feedback.fbName}</h3>
        <p><b>Event:</b> ${feedback.fbEvent}</p>
        <p><b>Rating:</b> ${feedback.fbRating}/5</p>
        <p><b>Comments:</b> ${feedback.fbComments}</p>
      </div>
    `;

    feedbackList.innerHTML += card;
  });

  let ratingsHTML = "";

  for (let eventName in eventRatings) {

    let average = (
      eventRatings[eventName].total /
      eventRatings[eventName].count
    ).toFixed(1);

    ratingsHTML += `
      <p>
        <b>${eventName}</b> :
        ${average}/5
      </p>
    `;
  }

  avgRating.innerHTML = ratingsHTML;
}

document.addEventListener(
  "DOMContentLoaded",
  function () {

    if (
      document.getElementById(
        "currentDateTime"
      )
    ) {
      updateDateTime();

      setInterval(
        updateDateTime,
        1000
      );

      updateCountdown();

      setInterval(
        updateCountdown,
        1000
      );

      updateDashboard();
    }

    if (
      document.getElementById(
        "eventsTableBody"
      )
    ) {
      loadEventsTable();

      loadEventDropdown();

      handleRegistrationForm();

      document
        .getElementById(
          "participationType"
        )
        .addEventListener(
          "change",
          showHideTeamFields
        );
    }

    if (
      document.getElementById(
        "feedbackForm"
      )
    ) {
      handleFeedbackForm();
    }
  }
);