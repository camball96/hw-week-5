//telling engine to load html & css first. 
$(document).ready(function () {
    $('#currentTime').text(moment().format('MMMM Do YYYY, h:mm a'));


    //Making a funct and declaring Consts for storing the users data in local storage
    $(".saveBtn").on("click", function () {
        console.log(this);
        const message = $(this).siblings(".textArea").val();
        const time = $(this).parent().attr("id");

        localStorage.setItem(time, message);
    })


    // Collecting saved data from local storage
    $("#9am .textArea").val(localStorage.getItem("9:00"));
    $("#10am .textArea").val(localStorage.getItem("10:00"));
    $("#11am .textArea").val(localStorage.getItem("11:00"));
    $("#12pm .textArea").val(localStorage.getItem("12:00"));
    $("#1pm .textArea").val(localStorage.getItem("13:00"));
    $("#2pm .textArea").val(localStorage.getItem("14:00"));
    $("#3pm .textArea").val(localStorage.getItem("15:00"));
    $("#4pm .textArea").val(localStorage.getItem("16:00"));
    $("#5pm .textArea").val(localStorage.getItem("17:00"));


    //clears all local storage data
        $("#clearBtn").on("click", function(){
            localStorage.clear();
            initPage()
        }) 


    // Function that changes text area background in correlation to current time.
    function timeMarking() {
        var currentH = moment().hour();
        console.log(currentH)
        

        $(".time-block").each(function () {
            var pageHour = parseInt($(this).attr("id"));
            
            if (pageHour < currentH) {
                $(this).addClass("past");
            }
            else if (pageHour > currentH) {
                $(this).addClass("future");
            }
            else {
                $(this).addClass("present")
            }
        })
    }
    timeMarking();
});

