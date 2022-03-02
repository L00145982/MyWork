var leadersArray = ['Gothem Batman', 'North Korea Kim Jong Un', 'USA LegoTrump', 'England Theresa May', 'France Emmanuel Macron', 'America JFK'];
var leadersAImg = ['Leaders/batman.jpg', 'Leaders/kimjongun.jpg', 'Leaders/legoTrump.jpg', 'Leaders/may.jpg', 'Leaders/marcon.jpg', 'Leaders/jfk.jpg'];
var posOfAdd = 0;
var posOfImg = 0;

$(document).ready(function () {
    $('#btnRemove').on('click', function () {
        $('#itemList li').first().remove();
        if ($('#itemList li').length == 0) {
            alert("Nothing to Remove");
            $('#btnRemove').attr("disabled",true);
        }
        $('#LeaderImages li').first().remove();
    });


    $('#reset').on('click', function () {
        location.reload();
    });

    $('#btnSwap').on('click', function () {
        //Swaps The Names List     
        $('#itemList li:first-child').after($('#itemList li:last-child')); // I've tried the replace with command but that removed the li from the list
        $('#itemlist li:last-child').first(); //insertbefore made no changes to the code
        $('#LeaderImages li:first-child').after($('#LeaderImages li:last-child'));
        $('#LeaderImages li:last-child').first();

    });




    $("#btnAdd").click(function () {
        if(posOfAdd > 5)
        {
            alert("No more leaders to Add / Reached an end of the List");
            $('#btnAdd').attr("disabled",true);
        }

        else
        {
            console.log(`${leadersAImg[posOfImg]}`);
            $("#itemList").append(" <li>" + leadersArray[posOfAdd++] + "</li>"); // I incremented within this line of code so the first leader to add would not be skipped
            $("#LeaderImages").append("<li class='imgInline'><img src='./" + leadersAImg[posOfImg++] + "' class ='Images' height='200'></li>"); // I incremented within this line of code so the first leader to add would not be skipped
        }

    });
});

// JavaScript for the swap
// var ListItems = document.getElementById("itemList"); // <-- These Lines of code is used to swap the first item of the leaders list with the last.
// var olFirst = ListItems.firstElementChild;
// var olLast = ListItems.lastElementChild;
// ListItems.replaceChild(ListItems.firstElementChild , ListItems.lastElementChild);
// ListItems.insertBefore(olLast, ListItems.firstElementChild);

// var ListImages = document.getElementById("LeaderImages"); //<- These lines of code is used to Swap the First Image and The last image in the ul.
// var ulFirst = ListImages.firstElementChild;
// var ulLast = ListImages.lastElementChild;
// ListImages.replaceChild(ListImages.firstElementChild , ListImages.lastElementChild);
// ListImages.insertBefore(ulLast, ListImages.firstElementChild);

