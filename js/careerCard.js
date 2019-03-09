var careerCard = [
    {title:"Publication Research Analyst (PRA)",qual:"Any Degree with real time experience in publication industry",exper:"3-5 Years",posted:"3/3/2019",vacan:"3",randres:"Creates requisite Author, Editor and reviewers pool/ base for group of STM (Science, technology and Medicine) Journals * Liaisons through e-mail with the authors, reviewers, editors of allocated group ofjournals * Ensures on meeting the requisite quota of registration/nomination of authors, reviewers/ editors for STM journals respecting the set- time lines at one hand and placing writers/ editors for books and technical/ market reports on the other hand * Gives weekly<br>report to the Publications Coordinator on the status/ progress of the job"},
    {title:"Website Developer (ASP)",qual:"Any Degree Knowledge about HTML, ASP, CSS ,HTML and MySQL",exper:"2-3 Years experience",posted:"3/3/2019",vacan:"2",randres:"Website Design, Website Development and Maintenance.   "},
    {title:"Office Assistant",qual:"Any Degree",exper:"1-5 years",posted:"3/3/2019",vacan:"5",randres:"Email based promotion of journals Printing co-ordination and Distribution of journals Day to Day office activities   "},
    {title:"PHP Developer",qual:"Any Degree Knowledge of PHP, CSS, HTML and MySQL",exper:"2-3 Years experience",posted:"3/3/2019",vacan:"2",randres:"Experience in Website development using php"},
    {title:"Admin Manager",qual:"Any Degree with MBA",exper:"5-10 years",posted:"3/3/2019",vacan:"1",randres:"Office Administration, Accounts Maintenance, Overall responsibility of running organisation and HRD"},
    {title:"Copy Editor",qual:"Any Degree",exper:"2-5 Years",posted:"3/3/2019",vacan:"3",randres:"OWord Formatting as per journal requirements, Conversion of HTML and Conversion of epub"},
    {title:"Office Peon",qual:"SSLC or +2",exper:"Fresher",posted:"3/3/2019",vacan:"2",randres:"Office work and Driving license is must"},
    {title:"Technical Editor",qual:"Master or PhD degree required * Proficient command of English in reading and writing * Major in Science, Engineering, Medicine, Physics, Geology, and other related fields * Previous experience in scientific paper writing or reviewing is desirable * Ability to work independently",exper:"3-5 Years",posted:"3/3/2019",vacan:"3",randres:"Organize and manage peer-review process, Request revisions from authors and Perform other duties as assigned"},
]


document.getElementById('cardBlock').innerHTML = careerCard.map(cardData =>
    `<div class="card" style="border-radius: 8px;background-color: #fff;padding: 12px;box-shadow: 0 0 4px 1px #bfbfbf; margin-bottom: 8px;">
    <div class="card-body">
        <h4 class="card-title" style="font-weight: 900;color:#f89c1c">${cardData.title}</h4>
        <h6 class="text-muted card-subtitle mb-2"
            style="color: rgb(0,0,0);filter: blur(0px) brightness(50%);font-style: italic;">
            Experience : ${cardData.exper}<br></h6>
        
            <br>
            <h6 class="text-muted card-subtitle mb-2"
            style="color: rgb(0,0,0);filter: blur(0px) brightness(50%);font-style: italic;">Qualification &nbsp;: ${cardData.qual}<br></h6>
            <br/>
        <p class="card-text"><strong>Roles and Responsibilities : </strong>* ${cardData.randres}</p>
        <br/>
        <h6 class="text-muted card-subtitle mb-2"
            style="color: rgb(0,0,0);filter: blur(0px) brightness(50%);font-style: italic;">No. of
            Vacancies &nbsp;: ${cardData.vacan}<br></h6>
            <br/>
        <h6 class="text-muted card-subtitle mb-2"
            style="color:#23245a;filter: blur(0px) brightness(50%);font-style: italic; font-weight: 900">
            <em>Posted Date</em>&nbsp; : ${cardData.posted}<br></h6>
    </div>
</div>
    `
).join('')