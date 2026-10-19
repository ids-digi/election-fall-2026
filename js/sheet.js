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

    $("#tmp2").sheetrock({
        url: "https://docs.google.com/spreadsheets/d/1ml0AbpRBogfqZIRbWvD4pNSxHpvfzA7cAXjBy1VsCtQ/edit?gid=0#gid=0",
        callback: (error, options, response) => {
            const rows = response.rows
            for (let i = 1; i < rows.length; i++) {
                const rowData = rows[i].cellsArray
                console.log(rowData)
                $(".races").append(
                    `<div class="race">
                        <h4 class="race-name">${rowData[0]}</h4>
                        <div class="candidates">
                            ${rowData[2] != "" ?
                                `<div class="candidate">
                                    <div class="candidate-img">
                                        <img class="candidate-ind" src="https://s3.amazonaws.com/snwceomedia/ids/c20bec3e-04fa-40d4-9890-f4e6b0730624.original.png" alt="candidate pfp">
                                    </div>
                                    <h4 class="candidate-name">${rowData[2]}</h4>
                                </div>` : ""}
                            ${rowData[4] != "" ?
                                `<div class="candidate">
                                    <div class="candidate-img">
                                        <img class="candidate-ind" src="https://s3.amazonaws.com/snwceomedia/ids/c20bec3e-04fa-40d4-9890-f4e6b0730624.original.png" alt="candidate pfp">
                                    </div>
                                    <h4 class="candidate-name">${rowData[4]}</h4>
                                </div>` : ""}
                            ${rowData[6] != "" ?
                                `<div class="candidate">
                                    <div class="candidate-img">
                                        <img class="candidate-ind" src="https://s3.amazonaws.com/snwceomedia/ids/c20bec3e-04fa-40d4-9890-f4e6b0730624.original.png" alt="candidate pfp">
                                    </div>
                                    <h4 class="candidate-name">${rowData[6]}</h4>
                                </div>` : ""}
                            ${rowData[8] != "" ?
                                `<div class="candidate">
                                    <div class="candidate-img">
                                        <img class="candidate-ind" src="https://s3.amazonaws.com/snwceomedia/ids/c20bec3e-04fa-40d4-9890-f4e6b0730624.original.png" alt="candidate pfp">
                                    </div>
                                    <h4 class="candidate-name">${rowData[8]}</h4>
                                </div>` : ""}
                        </div>
                    </div>`
                )
            }
            // console.log(response.rows)
        },
        reset: true
    })
});