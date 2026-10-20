$(document).ready(function () {
    $("#tmp1").sheetrock({
        url: "https://docs.google.com/spreadsheets/d/1or2mAVHAwpzCLrSwC0xghyx60CBok5qVCkHsfto0quM/edit?gid=0#gid=0",
        callback: (error, options, response) => {
            let rows = response.rows
            for (let i = rows.length - 1; i > 0; i--) {
                const rowData = rows[i].cellsArray
                let dateParts = rowData[0].split("/")
                let date = new Date(dateParts[2].padStart(4, "20"), dateParts[0] - 1, dateParts[1])
                $(rowData[2] == "Indiana" ? ".stories.state" : ".stories.local").append(
                    `<a href="${rowData[5]}" target="_blank" class="story-wrapper">
                        <div class="coverage">
                            <img src="${rowData[3]}">
                            <div class="story-info">
                                <h4 class="story-headline">${rowData[1]}</h4>
                                <div class="story-footer">
                                <p class="story-author">${rowData[4]}</p>
                                    <p class="story-date">${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}</p>
                                </div>
                            </div>
                        </div>
                    </a>`
                );
            }
            $("#tmp1").empty()
        },
        reset: true
    })
});