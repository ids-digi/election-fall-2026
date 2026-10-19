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

    $("#tmp2").sheetrock({
        url: "https://docs.google.com/spreadsheets/d/1ml0AbpRBogfqZIRbWvD4pNSxHpvfzA7cAXjBy1VsCtQ/edit?gid=0#gid=0",
        callback: (error, options, response) => {
            const rows = response.rows
            const partyTranslation = { "D": "dem", "R": "gop", "L": "lp", "I": "ind" }
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
                                        <img class="candidate-${partyTranslation[rowData[3]] ?? "ind"}" src="https://s3.amazonaws.com/snwceomedia/ids/c20bec3e-04fa-40d4-9890-f4e6b0730624.original.png" alt="candidate pfp">
                                    </div>
                                    <h4 class="candidate-name">${rowData[2]}</h4>
                                </div>` : ""}
                            ${rowData[4] != "" ?
                                `<div class="candidate">
                                    <div class="candidate-img">
                                        <img class="candidate-${partyTranslation[rowData[5]] ?? "ind"}" src="https://s3.amazonaws.com/snwceomedia/ids/c20bec3e-04fa-40d4-9890-f4e6b0730624.original.png" alt="candidate pfp">
                                    </div>
                                    <h4 class="candidate-name">${rowData[4]}</h4>
                                </div>` : ""}
                            ${rowData[6] != "" ?
                                `<div class="candidate">
                                    <div class="candidate-img">
                                        <img class="candidate-${partyTranslation[rowData[7]] ?? "ind"}" src="https://s3.amazonaws.com/snwceomedia/ids/c20bec3e-04fa-40d4-9890-f4e6b0730624.original.png" alt="candidate pfp">
                                    </div>
                                    <h4 class="candidate-name">${rowData[6]}</h4>
                                </div>` : ""}
                            ${rowData[8] != "" ?
                                `<div class="candidate">
                                    <div class="candidate-img">
                                        <img class="candidate-${partyTranslation[rowData[9]] ?? "ind"}" src="https://s3.amazonaws.com/snwceomedia/ids/c20bec3e-04fa-40d4-9890-f4e6b0730624.original.png" alt="candidate pfp">
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