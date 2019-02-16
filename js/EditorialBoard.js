var EditorialDetails = [{ name: "Dr.P Sukumar", ug: "Engineering-EEE", pg: "ME-VLSI Design", phd: "Anna University Chennai", specialization: "Image and Signal Processing,VLSI Design and Embedded Systems", experienceTeachingResearch: "11 Years at UG and PG Levels,More than 8 years in Research", achievements: "35 papers in National and International Conferences and Journals,155 Google Scholar Citations,Supervisor of Anna University Chennai", member: "Current Medical Imaging Reviews,International Journal of Critical InfraStructures(IJCIS),Reviewer in Life Sciences Journals", address: "No.29,Old Railway Station Road,Opposite Anjaneyar Temple,Erode-6388001", email: "sukumarwin@gmail.com", contact: "+91-9842119035,+91-6381782610" },
{ name: "Dr.A.Mummoorthy", ug: "Engineering-CSE", pg: "ME-CSE", phd: "Anna University Chennai", specialization: "Computer Science and Engineering", experienceTeachingResearch: "11 Years  and 1 Month", achievements: "3 patent filed,35 Papers in National and international Conferences and Journals ", member: "Reviewer  in various Journals", address: "Malamma Reddy College of Engineering and technology,maisammaguda,Dhulapally(via Kompally) Secunderabad-500100,Telangana State India", email: "amummoorthy@gmail.com", contact: "+91-9894764884,+91-9080008416" },
{ name: "T.Kowsalya", ug: "Engineering-ECE", pg: "ME-Communication on Systems", phd: "Pursuing in Anna University Chennai", specialization: "Information and communication and Engineering", experienceTeachingResearch: "20 Years and 7 Months", achievements: "7 papers in National and International Journals", member: "Nil", address: "No.38,Guberalakshmi Nagar Jude Road,Kannankuruchi(PO) Salem-8", email: "kowsalyadoss@yahoo.co.in", contact: "+91-9842060370" },
{ name: "Dr.M Shyalama Devi", ug: "Engineering-CSE", pg: "ME-CSE", phd: "Anna University Chennai", specialization: "Information and communication and Engineering", experienceTeachingResearch: "12 Years and 10 months ", achievements: "27 papers in National and International Conferences  and Journals, 10 Books Published", member: "BOS Member", address: "No.10/6 Flat S1, Janya's Arshia Jai Nagar 22nd Street,Arumbakkam,Chennai-600106", email: "Nil", contact: "+91-9962028328" },
{ name: "Dr.P.BALAMURUGAN", ug: "Engineering-CSE", pg: "ME-CSE", phd: "Nil", specialization: "Wireless Sensor Networks", experienceTeachingResearch: "13 Years and 3 months", achievements: "2 Patents filed,70 Papers in National and International Conferencess and Journals and 10 Books Published ", member: "Reviewer in various Journals", address: " Avadi,Chennai-600062", email: "pookumbala@gmail.com", contact: "+91-9600761623" },
{ name: "Dr.Pauline Mariasundram", ug: "Engineering-EI", pg: "ME-CS", phd: "Anna University Chennai", specialization: "Cryptography and Network Security,System Software,Software Engineering", experienceTeachingResearch: "24 Years", achievements: "18 papers in National and International Conferences and Journals", member: "Reviewer for Internal journal and Conferences", address: "No.257,Ferns City,Doddanakundi,Outer Ring Road,Marathahalli,Bangalore-560037", email: "pmaraiasundaram@yahoo.co.in", contact: "+91-9945254d142" },
{ name: "Dr.R.Suguna", ug: "Engineering", pg: "M-Tech-CSE", phd: "Anna University Chennai", specialization: "Image and Video processing and Analysis", experienceTeachingResearch: "29 Years ", achievements: "42 papers in National and International Conferencess and Journals,1 Book Published", member: "Reviewer for Internal journal and Conferences", address: "No.6-A Awesome Orchards 243,Red Hills Road Kallikuppam,Ambattur,Chennai-600053", email: "Nil", contact: "Nil" }
]

document.getElementById('profileDetail').innerHTML = EditorialDetails.map(user =>
    `<div class="col-sm-6 col-md-6 col-lg-6">
        <div class="card customColumn">
        <div class="card-body">
        <div id="userName">
        <div id="nameAnddesiCont"><span><strong>${user.name} &nbsp;</strong></span><span style="font-size: 12px;">(PHD: &nbsp;${user.phd})</span>
            <hr style="background-color: white;margin: 2px;"/>
        <span>UG: ${user.ug} / PG: ${user.pg}</span></div>
    </div>
    <div id="userDetail">
        <ul id="userList">
            <li>${user.specialization}</li>
            <li>${user.experienceTeachingResearch}</li>
            <li>${user.achievements}</li>
            <li>${user.member}</li>
            <li>${user.address}</li>
        </ul>
    </div>
    <div id="usermailNu">
        <span>${user.email} / ${user.contact}</span>
    </div>
        </div>
        </div>
    </div>
    `
).join('')


// <div class="col-md-6 col-xl-6 colmncustomStyle">
            // <div id="userName">
            //     <div id="nameAnddesiCont"><span><strong>${user.name} &nbsp;</strong></span><span style="font-size: 12px;">(PHD: &nbsp;${user.phd})</span>
            //         <hr style="background-color: white;margin: 2px;"/>
            //     <span>UG: ${user.ug} / PG: ${user.pg}</span></div>
            // </div>
            // <div id="userDetail">
            //     <ul id="userList">
            //         <li>${user.specialization}</li>
            //         <li>${user.experienceTeachingResearch}</li>
            //         <li>${user.achievements}</li>
            //         <li>${user.member}</li>
            //         <li>${user.address}</li>
            //     </ul>
            // </div>
            // <div id="usermailNu">
            //     <span>${user.email} / ${user.contact}</span>
            // </div>
// </div>