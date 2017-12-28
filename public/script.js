var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = handleStateChange;

var employeeList;
const TIME_INTERVAL = 60000;

window.onload = function () {

    xmlhttp.open("GET", "employees.json", true);
    xmlhttp.send(null);

    $('div[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'bottom',
    });

};

// Retrieve
function handleResponse(status, response) {

    var boxContainer = document.getElementById('boxesContainer');
    var boxCountContainer = document.getElementById('boxCount');

    setEmployees(response);

    createEmployeesGridUI(boxContainer, getEmployees());

    if (getEmployeeCount() === undefined) {
        setEmployeeCount(getEmployees().length);
    }

    addEmployees(boxCountContainer, boxContainer, getEmployees());

    updateBoxCountUI(boxCountContainer);

}

function createEmployeesGridUI(container, Employees) {

    Employees.forEach(function (employee) {
        container.innerHTML += createEmployeeCard(employee);
    });
}

function setEmployees(data) {
    var json = JSON.parse(data);

    json.Employees.map(function (emp) {

        emp.joining_date = toDate(emp.joining_date);
        emp.joining_date.setDate(emp.joining_date.getDate() + 1);

        return emp;
    })

    employeeList = json.Employees;
    console.log(employeeList);
}


function addEmployees(boxCountContainer, boxContainer, employeesList) {

    var reverseEmployeeList = employeesList.map(function (emp) {
        let modObj = {};
        for (attr in emp) {
            modObj[attr] = emp[attr];
            if (attr === 'joining_date') {
                modObj[attr] = new Date(emp[attr].setDate((emp[attr].getDate() + 1)));
            }
            if (attr === 'age') {
                modObj[attr] = (emp[attr] + "").split("").reverse().join("");
            }
        }

        return modObj;
    })

    for (let i = 0; i < reverseEmployeeList.length; i++) {
        (function () {
            setTimeout(function () {
                boxContainer.innerHTML += createEmployeeCard(reverseEmployeeList[i]);
                setEmployeeCount((employeesList.length + i + 1));
                updateBoxCountUI(boxCountContainer)
            }, TIME_INTERVAL * (i + 1));
        })(i);
    }

}


function handleStateChange() {
    switch (xmlhttp.readyState) {
        case 0: // UNINITIALIZED
        case 1: // LOADING
        case 2: // LOADED
        case 3: // INTERACTIVE
            break;
        case 4: // COMPLETED
            handleResponse(xmlhttp.status, xmlhttp.responseText);
            break;
        default:
            alert("error");
    }
}


function updateBoxCountUI(boxCountContainer) {
    boxCountContainer.innerHTML = getEmployeeCount();
}


function setEmployeeCount(count) {
    sessionStorage.empCount = count;
}


function getEmployeeCount() {
    return sessionStorage.empCount;
}


function getEmployees() {
    return employeeList;
}

function toDate(dateStr) {
    var parts = dateStr.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}

function getDisplayDate(date) {
    return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
}


function createEmployeeCard(employeeDetails) {
    return `
            <div class="col-sm-4" >        
                <div class="card" "> 
                    <div class="card-body" >
                        <h2 class="card-title" data-toggle="tooltip" title="${getDisplayDate(employeeDetails.joining_date)}">${employeeDetails.empName}</h2>
                        <h6 class="card-subtitle mb-2 text-muted">${employeeDetails.age}</h6>                        
                        <div class="card-text">
                            <p>${employeeDetails.designation}</p>      
                        </div>
                        <footer class="blockquote-footer">
                        ${getDisplayDate(employeeDetails.joining_date)}
                        </footer>
                    </div>
                </div>
            </div>`;
}