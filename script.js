window.onload = () => {
    var projects = document.getElementById("projects");

    fetch("./projects.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => 
            addData(data["projects"]))
        .catch((error) => 
                console.error("Unable to fetch data:", error));
}

function addData(data){
    console.log(data);
    var project;
    for (var i = 0; i < data.length; i++){
        project = data[i];
        preview = "";
        if(project["preview"] != null){
            preview = `<a href="${project["preview"]}" target="_blank" class="preview primary-color">Preview</a>`;
        }

        projects.innerHTML += `
            <div class="project">
                <img class="project-thumbnail" src="${project["thumbnail"]}" alt="project-thumbnail">
                <div class="project-detail">
                    <div class="project-title primary-color">${project["title"]}</div>
                    <div class="project-description secondary-color">${project["description"]}</div>
                    <div class="align-end">
                        ${preview}
                        <a href="${project["source-code"]}" target="_blank"><div class="source-code-button quarternary-color">Source Code</div></a>
                    </div>
                </div>
            </div>
        `;
    }
}