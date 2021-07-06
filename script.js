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


    //clears all local storage data
    $("#clearBtn").on("click", function(){
        localStorage.clear();
        location.reload();
    })

    // Collecting saved data from local storage
    $("#9 .textArea").val(localStorage.getItem("9"));
    $("#10 .textArea").val(localStorage.getItem("10"));
    $("#11 .textArea").val(localStorage.getItem("11"));
    $("#12 .textArea").val(localStorage.getItem("12"));
    $("#13 .textArea").val(localStorage.getItem("13"));
    $("#14 .textArea").val(localStorage.getItem("14"));
    $("#15 .textArea").val(localStorage.getItem("15"));
    $("#16 .textArea").val(localStorage.getItem("16"));
    $("#17 .textArea").val(localStorage.getItem("17"));


    


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

