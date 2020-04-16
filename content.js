const interval = setInterval(() => {
    const header = document.querySelector("._3auIg");
    if(header){
        clearInterval(interval)

        const drop = document.createElement("select")
        drop.appendChild(new Option("1x", "1"));
        drop.appendChild(new Option("1.25x", "1.25"));
        drop.appendChild(new Option("1.5x", "1.5"));
        drop.appendChild(new Option("1.75x", "1.75"));
        drop.appendChild(new Option("2x", "2"));
        drop.classList.add("select")
        drop.setAttribute("id", "select")

        var interval3 = "";
        drop.addEventListener("change", () => {
            var e = document.getElementById("select")
            var value = e.options[e.selectedIndex].value;
            clearInterval(interval3);

            interval3 = setInterval(() => {
                const audios = document.querySelectorAll("audio");
                audios.forEach((audio) => {
                    audio.playbackRate = value;
                })

            }, 500);
        })
        header.appendChild(drop)
    }
}, 1000);