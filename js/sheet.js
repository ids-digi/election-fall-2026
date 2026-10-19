$(document).ready(function () {
    $("#tmp1").sheetrock({
        url: "https://docs.google.com/spreadsheets/d/1or2mAVHAwpzCLrSwC0xghyx60CBok5qVCkHsfto0quM/edit?gid=0#gid=0",
        callback: (error, options, response) => {
            const rows = response.rows
            for (let i = 1; i < rows.length; i++) {
                const rowData = rows[i].cellsArray
                $(rowData[2] == "Indiana" ? ".stories.state" : ".stories.local").append(
                    `<div class="coverage">
                        <img src="${rowData[3]}">
                        <a style="border-bottom: none;" class="story-headline" href="${rowData[5]}">${rowData[1]}</a>
                        <p class="story-author"><a href="https://idsnews.com/staff/${rowData[4].split(" ").join("-")}">${rowData[4]}</a></p>
                    </div>`
                );
            }
            $("#tmp1").empty()
        },
        reset: true
    })

});