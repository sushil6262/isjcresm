//array of object
var boardMembers = [
    { name: "Dr. D. BRAHADEESWARAN", designation: "International Consultant, MIIT", Affiliation: "Department of Policy Planning & Educational Research, National Institute of Technical Teachers’   Training and Research (NITTTR)", avatar: "/images/Dr.Brahadeeshwaran_0.jfif",place:"Chennai",country: "India" },
    { name: "Dr.N.Asokan", designation: "Professor/Principal/Senior Education consultant", Affiliation: "Engineering Education Consultancy", avatar: "/images/",place:"Chennai",country: "India" },
    { name: "Dr. GANESH KUMAR. R.", designation: "Associate Professor", Affiliation: "Dept of CSE,CHRIST (Deemed to be University", avatar: "/images/GaneshKumar2_23.jpg",place:"Bangalore",country: "India" },
    { name: "A . Sundar Raj", designation: "Associate Professor", Affiliation: " E.G.S. Pillay Engineering College", avatar: "/images/Sundar_24.jpg",place:"Nagapattinam",country: "India" },
    { name: "Dr. P. Balamurugan", designation: "Professor", Affiliation: "Vel Tech Rangarajan Dr. Sagunthala R & D Institute of Science and Technology ", avatar: "/images/BALAMURUGAN_29.jpg",place:"Chennai",country: "India" },
    { name: "Dr Pauline Mariasundaram", designation: "Professor-HOD", Affiliation: "SEACET", avatar: "/images/Pauline_30.jpg",place:"Bangalore",country: "India" },
    { name: "Dr.G.A.Rathy", designation: "Associate Professor", Affiliation: "Electrical & Electronics and Communication Engineering,NITTTR", avatar: "/images/Rathy_36.jpg",place:"Chennai",country: "India" },
    { name: "Dr.T.R.GANESH BABU", designation: "Professor", Affiliation: "Muthayammal Engineering College", avatar: "/images/ganeshBabu.jpg",place:"Attur",country: "India" },
    { name: "Dr UMA V R", designation: "ASSOCIATE PROFESSOR", Affiliation: "Christ University", avatar: "/images/UMA_38.jpg",place:"Bangalore",country: "India" },
    { name: "Dr VARAPRASAD G.", designation: "Associate Professor", Affiliation: "BMS College of Engineering", avatar: "/images/Varaprasad.jpg",place:"Bangalore",country: "India" },
    { name: "Dr. V.Ilango", designation: "Professor and Head-COE", Affiliation: "CMRIT", avatar: "/images/illango.jpg",place:"Bangalore",country: "India" },
    { name: "Dr.Kumanan T", designation: "Principal and Professor", Affiliation: "MAHER University", avatar: "/images/Dr_Kumanan_41.jpg",place:"Chennai",country: "India" },
    { name: "Dr.S.Vijay Kumar", designation: "Vice Chairman - IEEE PSES", Affiliation: "Department of ECE, SITAMS - Autonomous", avatar: "/images/Dr_Vijayakumar_42.jpg",place:"Andra Pradesh",country: "India" },
    { name: "Dr.G.Arul Ilango", designation: "Professor", Affiliation: "ECE Department at Sree Vidyanikethan Engineering College", avatar: "/images/Dr.Arul_Ilango_43.jpg",place:"Tirupati",country: "India" },
    { name: "Dr.R.Murugadoss", designation: "Professor", Affiliation: "St Ann’s College of Engineering and Technology", avatar: "/images/Dr.Murugadoss_44.jpg",place:"Andra Pradesh",country: "India" },
    { name: "Dr.S Mohan Kumar", designation: "Associate Professor", Affiliation: "New Horizon College of Engineering", avatar: "/images/Mohan_45.jpg",place:"Bangalore",country: "India" },
    { name: "Shri Veda Balan", designation: "Senior Principal Member of Technical Staff, ILABS - Product Engg", Affiliation: "[24]7.ai", avatar: "/images/Vedabalan_R_46.jpg",place:"Bangalore",country: "India" },
    { name: "Dr. Vasudevan", designation: "Registrar", Affiliation: "Kalasalingam University", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Ms Anisha", designation: "Research Scholar", Affiliation: "New Horizon College of Engineering", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Mr. Darpan", designation: "Research Scholar", Affiliation: "New Horizon College of Engineering", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr Gopala Krishnan", designation: "Dean R&D,IE(I),Chairman Research Board", Affiliation: "New Horizon College of Engineering", avatar: "/images/GopalKrishnan.jpg",place:"Bangalore",country: "India" },
    { name: "Mr Sushil Sharma", designation: "Lead Technical Architect-Online Resources", Affiliation: "ISJCRESM", avatar: "",place:"Bangalore",country: "India" },
    { name: "Mr.Nadeem N", designation: "Lead Technical  Consultant-Publications & Branding", Affiliation: "ISJCRESM", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr.Nisha K.C.R", designation: "Professor", Affiliation: "New Horizon College of Engineering", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr. A Abdul Rasheed", designation: "Professor", Affiliation: "Department Of Compter Applications,CMRIT", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr. K Nithyanadan", designation: "Professor", Affiliation: "Department Of  Electrical and Electronics,CMRIT", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr.P Vijay Karthik", designation: "Professor  and Head", Affiliation: "Department of Information Science and Engineering,Sir M.Visvesvaraya institute of Technology", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr.M Aruna Devei", designation: "Professor  and Head", Affiliation: "Department of  Masters  of Computer Applications,Cambridge Institute of Technology", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr.S Gokula Krishnan", designation: "Professor", Affiliation: "Department of Management Studies,,CMRIT", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr.S.Senthil", designation: "Professor and Director", Affiliation: "School of Computer Science & Applications,REVA University", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr.M.Vinayaka Murthy", designation: "Professor", Affiliation: "School of Computer Science & Applications,REVA University", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr.M.Muthuvinayam", designation: "Professor", Affiliation: "Dept of Electrical and Electronics Engineering,MAHENDRA ENGINEERING COLLEGE", avatar: "/images/",place:"Tamil Nadu",country: "India" },
    { name: "Dr.Sharmila Sankar", designation: "Professor", Affiliation: "Dept of CSE,B.S. Abdur Rahman Crescent Institute of Science and Technology", avatar: "/images/",place:"Tamil Nadu",country: "India" },
    { name: "Dr.S.Balamurali", designation: "Director-Research and Development", Affiliation: "KALASALINGAM ACADEMY OF RESEARCH AND EDUCATION,", avatar: "/images/",place:"Tamil Nadu",country: "India" },
    { name: "Dr.B.V.Prabhu", designation: "Professor", Affiliation: "Department of Mechanical Engineering & Assoc. Dean,Industrial Practice Program.", avatar: "/images/",place:"Tamil Nadu",country: "India" },
    { name: "Dr.Srinivas K T", designation: "Director", Affiliation: "School of Economics and Commerce,CMR University ", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr.Shiv K.Tripathi", designation: "Dean", Affiliation: "School of Management,CMR University ", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr. Loganathan R", designation: "Professor and Head", Affiliation: "Department of Computer Sciencem,HKBK College of Engineering", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr. Sasi Kumar.M", designation: "Professor and Head", Affiliation: "Department of Computer Science,Brindavan College of Engineering", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr. R. Joshua Samuel Raj ", designation: "Principal", Affiliation: "Rajas Engineering College", avatar: "/images/",place:"Tamil Nadu",country: "India" },
    { name: "Dr.Venkatesh Kanyakumari", designation: "Professor", Affiliation: "Department Mathematics,Myanmar Institute of Information Technology", avatar: "/images/",place:"Mandalay",country: "Myanmar" },
    { name: "Dr. Ravichandran Krishnamoorthy ", designation: "Professor", Affiliation: "Department of Finance,Abudabi Campus,New York Institute of Technology", avatar: "/images/",place:"Abu Dhabi",country: "UAE" },
    { name: "Dr. K. Srinivasan", designation: "Professor ", Affiliation: "Business Studies Department,Higher College of Technology (HCT) ", avatar: "/images/",place:"Muscat",country: "Oman" },
    { name: "Dr. Milind Thomas", designation: "Post Doctorate Scientist", Affiliation: "Engineer at XLIM, University of Limoges", avatar: "/images/",place:"France",country: "France" },
    { name: "Dr.Anunathan R", designation: "Senior Project Manager", Affiliation: "LG Soft India Pvt Ltd", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr.P.Sukumar", designation: "Professor", Affiliation: "No.29, Old Railway Station Road,Opposite to  Anjaneyar  temple,Erode", avatar: "/images/",place:"Erode",country: "India" },
    { name: "Dr.A Mummoorthy", designation: "Associate Professor", Affiliation: "Department of Computer Science and Engg,Malla Reddy College of Engineering & Technology", avatar: "/images/",place:"Telangana",country: "India" },
    { name: "T Kowsalya", designation: "Professor", Affiliation: "38, Guberalakshmi Nagar Judge Road , Kannankuruchi ", avatar: "/images/",place:"Salem",country: "India" },
    { name: "Dr.M Shyamala", designation: "Professor", Affiliation: "Vel Tech Rangarajan Dr. Sagunthala R & D Institute of Science and Technology ", avatar: "/images/",place:"Chennai",country: "India" },
    { name: "Dr. R. Suguna", designation: "Professor", Affiliation: "6-A, Awesome Orchards,243, Red Hills Road Kallikuppam, Ambattur", avatar: "/images/",place:"Chennai",country: "India" },
    { name: "Dr.Balaji.R", designation: "Industry Expert,Senior Scientist", Affiliation: "Center for Development of Advanced Computing", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Mr.Ajay Aggarwal", designation: "Consultant", Affiliation: "Infosys Ltd", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Mr.Sushant  Mishra", designation: "Technical Architect", Affiliation: "Schneider Electric", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Mr.Murali Mahadevan", designation: "System Architect", Affiliation: "IBM-India Ltd", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr.Jitendranath Mungara", designation: "Professor and HOD", Affiliation: "New Horizon College of Engineering", avatar: "/images/",place:"Bangalore",country: "India" },
    { name: "Dr.Sujitha", designation: "Associate Professor", Affiliation: "New Horizon College of Engineering", avatar: "/images/",place:"Bangalore",country: "India" },
]
//dynamic call to create user profile
document.getElementById('profileDetail').innerHTML = boardMembers.map(board =>
    `<div class="col-sm-6 col-md-6 col-lg-3">
        <div class="card customColumn">
        <div class="card-body">
            <p class="text-center card-title"><strong>${board.name}</strong></p>
            <hr style="border-top:1px solid #23245a"/>
            <h6 class="text-center text-muted card-subtitle mb-2">${board.designation}</h6>
            <p class="text-center">${board.Affiliation}</p>
            <p class="text-center">${board.place}  ${board.country}</p>
        </div>
        </div>
    </div>
    `
).join('')