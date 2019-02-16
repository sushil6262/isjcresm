
//array of object
var userDetail = [
    { name: "Dr. S. Mohan Kumar", designation: "Editor-in-Chief", place: "kolkata", avatar: "/images/userImage/", country: "India" },
    { name: "Prof. Ilango Velchamy", designation: "Professor & Chairman, Reviewer Board", place: "bangalore", avatar: "/images/userImage/illango.png", country: "India" },
    { name: "Dr.R.MURUGADOSS", designation: "Editor-in-Chief", place: "kolkata", avatar: "/images/userImage/Dr.R.MURUGADOSS.jpg", country: "India" },
    { name: "Dr.S.Vijayakumar", designation: "Editor-in-Chief", place: "bangalore", avatar: "/images/userImage/Dr.S.Vijayakumar.png", country: "India" },
    { name: "Dr. P. BALAMURUGAN", designation: "Professor, CSE Department", place: "delhi", avatar: "/images/userImage/Dr. P. BALAMURUGAN.jpg", country: "India" },
    { name: "Dr. R. Suguna", designation: "Editor-in-Chief", place: "assam,", avatar: "/images/userImage/Dr. R. Suguna.png", country: "India" },
]
//dynamic call to create user profile
document.getElementById('profileDetail').innerHTML = userDetail.map(user =>
    `<div class="col-sm-6 col-md-6 col-lg-3">
        <div class="card customColumn">
        <div class="card-body">
            <div class="imgeStyle" style="background-image:url(${user.avatar});"></div>
            <hr class="line">
            <p class="text-center card-title"><strong>${user.name}</strong></p>
            <h6 class="text-center text-muted card-subtitle mb-2">${user.designation}</h6>
            <p class="text-center">${user.place} ${user.country}</p>
            <button type="button" class="btn btn-primary btnCenter">Info</button>
        </div>
        </div>
    </div>
    `
).join('')





