var testlast = document.lastModified
var month = testlast.substr(0,2);
var monthText = ""
var year = testlast.substr(6, 4);
console.log("month: " + month);
console.log("year: " + year);
switch(month) {
	case "01":
		monthText = "January";
		break;
        case "02":
                monthText = "February";
                break;
        case "03":
                monthText = "March";
                break;
        case "04":
                monthText = "April";
                break;
        case "05":
                monthText = "May";
                break;
        case "06":
                monthText = "June";
                break;
        case "07":
                monthText = "July";
                break;
        case "08":
                monthText = "August";
                break;
        case "09":
                monthText = "September";
                break;
        case "10":
                monthText = "October";
                break;
        case "11":
                monthText = "November";
                break;
        case "12":
                monthText = "December";
                break;
	default:
		monthText = "";
}
document.getElementById("updated").innerText = "Updated " + monthText + " " + year + ".";