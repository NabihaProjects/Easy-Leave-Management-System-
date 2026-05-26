let users = {
    "24BCA7737": {
        name: "AARYAN KADAM",

        timetable: {
            "Tuesday": [
                { subject: "ECE", time: "09:00-10:00" },
                { subject: "SE", time: "10:00-11:00" },
                { subject: "DBMS", time: "11:00-12:00" },
                { subject: "STS", time: "12:00-01:00" },
                { subject: "SE-LAB", time: "02:00-03:30" }
            ],

            "Wednesday": [
                { subject: "STS", time: "09:00-10:00" },
                { subject: "ML", time: "10:00-11:00" },
                { subject: "MAT", time: "11:00-12:00" },
                { subject: "SE", time: "12:00-01:00" },
                { subject: "ML-LAB", time: "06:00-07:30" }
            ],

            "Thursday": [
                { subject: "DBMS", time: "09:00-10:00" },
                { subject: "STS", time: "10:00-11:00" },
                { subject: "ECE", time: "11:00-12:00" },
                { subject: "MGT", time: "03:00-04:00" },
                { subject: "MAT-LAB", time: "04:00-05:30" }
            ],

            "Friday": [
                { subject: "SE", time: "09:00-10:00" },
                { subject: "ECE", time: "10:00-11:00" },
                { subject: "ML", time: "11:00-12:00" },
                { subject: "MAT", time: "12:00-01:00" },
                { subject: "MGT", time: "02:00-03:00" }
            ],

            "Saturday": [
                { subject: "MAT", time: "09:00-10:00" },
                { subject: "DBMS", time: "10:00-11:00" },
                { subject: "ML", time: "11:00-12:00" },
                { subject: "ECE", time: "12:00-01:00" },
                { subject: "DBMS-LAB", time: "02:00-03:30" }
            ]
        },

        subjects: {
            "DBMS": { total: 34, attended: 31 },
            "MAT": { total: 33, attended: 31 },
            "SE": { total: 32, attended: 29 },
            "ML": { total: 33, attended: 30 },
            "STS": { total: 32, attended: 28 },
            "ECE": { total: 45, attended: 37 },
            "ML-LAB": { total: 10, attended: 8 },
            "SE-LAB": { total: 10, attended: 9 },
            "DBMS-LAB": { total: 12, attended: 10 },
            "MAT-LAB": { total: 11, attended: 9 },
            "MGT": { total: 22, attended: 18 }
        }
    },

    "24BCA7705": {
        name: "PRACHEETA MOHANTY",

        timetable: {
            "Tuesday": [
                { subject: "ECE", time: "09:00-10:00" },
                { subject: "SE", time: "10:00-11:00" },
                { subject: "MAT", time: "12:00-01:00" },
                { subject: "SE-LAB", time: "02:00-03:30" },
                { subject: "MAT-LAB", time: "04:00-05:30" }
            ],

            "Wednesday": [
                { subject: "MAT", time: "09:00-10:00" },
                { subject: "ML", time: "11:00-12:00" },
                { subject: "SE", time: "12:00-01:00" },
                { subject: "STS", time: "06:00-07:00" }
            ],

            "Thursday": [
                { subject: "DBMS", time: "09:00-10:00" },
                { subject: "MAT", time: "10:00-11:00" },
                { subject: "ECE", time: "11:00-12:00" },
                { subject: "STS", time: "03:00-04:00" },
                { subject: "DBMS-LAB", time: "04:00-05:30" }
            ],

            "Friday": [
                { subject: "DBMS", time: "08:00-09:00" },
                { subject: "SE", time: "09:00-10:00" },
                { subject: "ECE", time: "10:00-11:00" },
                { subject: "ML", time: "12:00-01:00" },
                { subject: "STS", time: "02:00-03:00" },
                { subject: "ML-LAB", time: "06:00-07:30" }
            ],

            "Saturday": [
                { subject: "ML", time: "09:00-10:00" },
                { subject: "DBMS", time: "10:00-11:00" },
                { subject: "ECE", time: "12:00-01:00" }
            ]
        },

        subjects: {
            "DBMS": { total: 34, attended: 31 },
            "MAT": { total: 33, attended: 31 },
            "SE": { total: 32, attended: 29 },
            "ML": { total: 33, attended: 30 },
            "STS": { total: 32, attended: 28 },
            "ECE": { total: 45, attended: 37 },
            "ML-LAB": { total: 10, attended: 8 },
            "SE-LAB": { total: 10, attended: 9 },
            "DBMS-LAB": { total: 12, attended: 10 },
            "MAT-LAB": { total: 11, attended: 9 },
            "MGT": { total: 22, attended: 18 }
        }
    }
};

function login() {

    let id = document.getElementById("studentId").value;
    let pass = document.getElementById("password").value;

    let pattern = /^[0-9]{2}[A-Za-z]{3,4}[0-9]{4,5}$/;

    if (!pattern.test(id)) {
        alert("Invalid ID format");
        return;
    }

    if (users[id]) {
        localStorage.setItem("currentUser", id);
        window.location.href = "dashboard.html";
    } else {
        alert("User not found");
    }
}

function goToApply() {
    window.location.href = "apply-leave.html";
}

function goToStatus() {
    window.location.href = "status.html";
}

function goToProof() {
    window.location.href = "proof.html";
}

// Sample attendance data
let currentAttendance = 78;
let totalClasses = 100;

// Holidays (important feature)
let holidays = ["2026-04-14", "2026-05-01"];

function calculateImpact() {

    let leaveType = document.getElementById("leaveType").value;

    if (leaveType === "weekend") {
        document.getElementById("result").innerText =
            "No attendance impact for weekend outing.";
        return;
    }

    let currentUser = localStorage.getItem("currentUser");
    let student = users[currentUser];

    let start = new Date(document.getElementById("startDate").value);
    let end = new Date(document.getElementById("endDate").value);

    if (isNaN(start) || isNaN(end)) {
        alert("Invalid date");
        return;
    }

    if (!start || !end) {
        alert("Please select dates");
        return;
    }

    let subjects = JSON.parse(JSON.stringify(student.subjects));

    let missed = {}; // IMPORTANT: OUTSIDE loop

    let loopEnd = new Date(end);

    let startTimeInput = document.getElementById("startTime").value;
    let endTimeInput = document.getElementById("endTime").value;

    console.log("Start:", startTimeInput);
    console.log("End:", endTimeInput);

    let leaveStart = timeToMinutes(startTimeInput);
    let leaveEnd = timeToMinutes(endTimeInput);

    // 🔥 handle same time → full day BUT only first day
    if (leaveStart === leaveEnd) {
        leaveEnd = leaveStart + 1440;
        loopEnd = new Date(start); // restrict to single day
    }

    for (let d = new Date(start); d <= loopEnd; d.setDate(d.getDate() + 1)) { 

        let dateStr = d.toISOString().split("T")[0];

        if (holidays.includes(dateStr)) continue;

        let day = d.toLocaleDateString('en-US', { weekday: 'long' });

        // normalize
        day = day.trim();

        if (!student.timetable[day]) continue;

        let classes = student.timetable[day];

        if (!classes) continue;

        classes.forEach(cls => {

            let subject = cls.subject;

            if (!student.subjects[subject]) return;

            let [startT, endT] = cls.time.split("-");

            let classStart = timeToMinutes(startT);
            let classEnd = timeToMinutes(endT);

            // 🔥 IMPORTANT FIX
            if (classEnd > leaveStart && classStart < leaveEnd) {

                let units = subject.toUpperCase().includes("LAB") ? 2 : 1;

                if (!missed[subject]) {
                    missed[subject] = 0;
                }

                missed[subject] += units;
            }
        });
    }

    let result = "";

    for (let sub in subjects) {

        let data = subjects[sub];

        let missedUnits = missed[sub] || 0;

        let newTotal = data.total + missedUnits;
        let newAttended = data.attended;0

        let percent = (newAttended / newTotal) * 100;

        if (percent < 75) {
            result += sub + ": " + percent.toFixed(2) + "% ⚠\n";
        } else {
            result += sub + ": " + percent.toFixed(2) + "%\n";
        }
    }

    document.getElementById("result").innerText = result;
}

function submitLeave() {

    let leaveType = document.getElementById("leaveType").value;

    let now = new Date().getTime();

    let leaveData;

    if (leaveType === "weekend") {
        leaveData = {
            type: leaveType,
            mentorStatus: "Not Required",
            wardenStatus: "Pending",
            appliedTime: now
        };
    } else {
        leaveData = {
            type: leaveType,
            mentorStatus: "Pending",
            wardenStatus: "Pending",
            appliedTime: now
        };
    }

    localStorage.setItem("leaveData", JSON.stringify(leaveData));

    alert("Leave Submitted!");

    window.location.href = "dashboard.html";
}

window.onload = function () {

    let currentUser = localStorage.getItem("currentUser");

    if (!currentUser) return;

    let student = users[currentUser];

    // 🔥 ADD THIS LINE HERE
    applyProofCorrection();

    // Set user info
    document.getElementById("userName").innerText = student.name;
    document.getElementById("userId").innerText = currentUser;

    // Show attendance
    let attendanceDiv = document.getElementById("attendanceList");

    for (let sub in student.subjects) {
        let data = student.subjects[sub];
        let percent = (data.attended / data.total) * 100;

        let p = document.createElement("div");
        p.classList.add("att-card");
        p.style.marginBottom = "10px";

        if (percent < 75) {
            p.classList.add("att-low");
        }

        p.innerHTML = `
            <strong>${sub}</strong>
            <div style="margin-top:5px; font-size:12px;">
                ${percent.toFixed(2)}%
            </div>

            <div style="
                width:100%;
                height:8px;
                background:#ddd;
                border-radius:5px;
                margin-top:6px;
            ">
                <div style="
                    width:${percent}%;
                    height:100%;
                    background:${percent < 75 ? '#e74c3c' : '#2ecc71'};
                    border-radius:5px;
                "></div>
            </div>
        `;

        attendanceDiv.appendChild(p);
    }
};

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

function toggleLeaveType() {

    let type = document.getElementById("leaveType").value;

    if (type === "general") {
        document.getElementById("generalFields").style.display = "block";
        document.getElementById("weekendFields").style.display = "none";
        document.getElementById("impactBtn").style.display = "block";
    } else {
        document.getElementById("generalFields").style.display = "none";
        document.getElementById("weekendFields").style.display = "block";
        document.getElementById("impactBtn").style.display = "none";

        setWeekendDateLimits(); // 🔥 IMPORTANT
    }
}

function setWeekendDateLimits() {

    let today = new Date();

    let nextSunday = new Date(today);
    let day = today.getDay();

    // Days until next Sunday
    let daysToSunday = (7 - day) % 7;
    if (daysToSunday === 0) daysToSunday = 7;

    nextSunday.setDate(today.getDate() + daysToSunday);

    let nextMonday = new Date(nextSunday);
    nextMonday.setDate(nextSunday.getDate() + 1);

    let sundayStr = nextSunday.toISOString().split("T")[0];
    let mondayStr = nextMonday.toISOString().split("T")[0];

    let input = document.getElementById("weekendDate");

    input.min = sundayStr;
    input.max = mondayStr;

    input.value = sundayStr; // default
}

function loadStatus() {

    let leaveData = JSON.parse(localStorage.getItem("leaveData"));

    if (!leaveData) return;

    let now = new Date().getTime();
    let hoursPassed = (now - leaveData.appliedTime) / (1000 * 60 * 60);

    // 🔥 MENTOR BYPASS LOGIC
    if (leaveData.type === "general" && leaveData.mentorStatus === "Pending") {

        if (hoursPassed >= 48) {
            leaveData.mentorStatus = "Bypassed (No Response)";
            leaveData.wardenStatus = "Pending";
        }
    }

    // DISPLAY
    document.getElementById("leaveType").innerText =
        "Type: " + leaveData.type;

    if (leaveData.type === "weekend") {
    document.getElementById("mentorStatus").innerText =
        "Mentor: Not Required";
    } else {
        document.getElementById("mentorStatus").innerText =
            "Mentor: " + leaveData.mentorStatus;
    }

    document.getElementById("wardenStatus").innerText =
        "Warden: " + leaveData.wardenStatus;

    // FINAL STATUS
    let final = "Pending";

    // 🔥 Mentor rejection = FINAL
    if (leaveData.mentorStatus === "Rejected") {
        final = "Rejected";
    }

    // Only if mentor passed
    else if (leaveData.wardenStatus === "Approved") {
        final = "Approved";
    }
    else if (leaveData.wardenStatus === "Rejected") {
        final = "Rejected";
    }

    document.getElementById("finalStatus").innerText =
        "Final Status: " + final;

    localStorage.setItem("leaveData", JSON.stringify(leaveData));

    if (leaveData.type === "weekend") {
        document.getElementById("mentorButtons").style.display = "none";
    }
}

function simulateMentorApprove() {
    let leaveData = JSON.parse(localStorage.getItem("leaveData"));
    leaveData.mentorStatus = "Approved";
    leaveData.wardenStatus = "Pending";
    localStorage.setItem("leaveData", JSON.stringify(leaveData));
    loadStatus();
}

function simulateMentorReject() {
    let leaveData = JSON.parse(localStorage.getItem("leaveData"));
    leaveData.mentorStatus = "Rejected";
    localStorage.setItem("leaveData", JSON.stringify(leaveData));
    loadStatus();
}

function simulateWardenApprove() {

    let leaveData = JSON.parse(localStorage.getItem("leaveData"));

    // 🚫 Prevent if mentor not approved
    if (leaveData.type === "general" && leaveData.mentorStatus !== "Approved" && leaveData.mentorStatus !== "Bypassed (No Response)") {
        alert("Mentor approval required first");
        return;
    }

    leaveData.wardenStatus = "Approved";

    localStorage.setItem("leaveData", JSON.stringify(leaveData));
    loadStatus();
}

function simulateWardenReject() {

    let leaveData = JSON.parse(localStorage.getItem("leaveData"));

    if (leaveData.type === "general" && leaveData.mentorStatus !== "Approved" && leaveData.mentorStatus !== "Bypassed (No Response)") {
        alert("Mentor approval required first");
        return;
    }

    leaveData.wardenStatus = "Rejected";

    localStorage.setItem("leaveData", JSON.stringify(leaveData));
    loadStatus();
}

function goBack() {
    window.location.href = "dashboard.html";
}

function extendLeave() {
    window.location.href = "apply-leave.html";
}

if (window.location.pathname.includes("status.html")) {
    loadStatus();
}

function loadSubjects() {

    let currentUser = localStorage.getItem("currentUser");
    let student = users[currentUser];

    let container = document.getElementById("subjectList");

    container.innerHTML = "";

    for (let sub in student.subjects) {

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = sub;

        let label = document.createElement("label");
        label.innerText = sub;

        container.appendChild(checkbox);
        container.appendChild(label);
        container.appendChild(document.createElement("br"));
    }
}

if (window.location.pathname.includes("proof.html")) {
    loadSubjects();
}

function submitProof() {

    let date = document.getElementById("proofDate").value;

    let file = document.getElementById("proofFile").files[0];

    if (!date || !file) {
        alert("Please select date and upload proof");
        return;
    }

    let selectedSubjects = [];

    let checkboxes = document.querySelectorAll("#subjectList input:checked");

    checkboxes.forEach(cb => {
        selectedSubjects.push(cb.value);
    });

    if (selectedSubjects.length === 0) {
        alert("Select at least one subject");
        return;
    }

    let proofData = {
        date: date,
        subjects: selectedSubjects,
        fileName: file.name
    };

    localStorage.setItem("proofData", JSON.stringify(proofData));

    alert("Proof submitted successfully!");

    window.location.href = "dashboard.html";
}

function applyProofCorrection() {

    let proofData = JSON.parse(localStorage.getItem("proofData"));

    if (!proofData) return;

    let currentUser = localStorage.getItem("currentUser");
    let student = users[currentUser];

    proofData.subjects.forEach(sub => {

        if (student.subjects[sub]) {
            student.subjects[sub].attended += 1;
        }
    });

    // Clear proof after applying
    localStorage.removeItem("proofData");
}

function timeToMinutes(timeStr) {

    // Handles both "07:00" and "07:00 AM"

    if (timeStr.includes("AM") || timeStr.includes("PM")) {

        let [time, modifier] = timeStr.split(" ");
        let [hours, minutes] = time.split(":");

        hours = parseInt(hours);
        minutes = parseInt(minutes);

        if (modifier === "PM" && hours !== 12) hours += 12;
        if (modifier === "AM" && hours === 12) hours = 0;

        return hours * 60 + minutes;

    } else {
        // 24-hour format (input type="time")
        let [hours, minutes] = timeStr.split(":");
        return parseInt(hours) * 60 + parseInt(minutes);
    }
}