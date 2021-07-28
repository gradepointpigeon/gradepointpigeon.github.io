var pClickCount = 0;

function incrementCounter() {
    if (pClickCount < 4) {
        pClickCount += 1;
    } else {
        sneakyPrompt();
    }
}

function sneakyPrompt() {
    var input = prompt("You have awakened the Sneaky Pigeon. What secrets do you seek?");
    if (input != null) {
        // options: tiktok, onlyfans
        if (input.search(/(tiktok|tik tok)/i) != -1 && document.getElementById("tiktok").classList.contains("hidden")) {
            document.getElementById("tiktok").classList.remove("hidden");
            alert("Very well. You have revealed our TikTok link :)");
            document.getElementById("sneakDivider").classList.remove("hidden");
            document.getElementById("tiktok").classList.remove("hidden");
        } else if (input.search(/(onlyfans)/i) != -1 && document.getElementById("tiktok").classList.contains("hidden")) {
            document.getElementById("tiktok").classList.remove("hidden");
            alert(":flushed: No OF, but here is our TikTok link :)");
            document.getElementById("sneakDivider").classList.remove("hidden");
            document.getElementById("tiktok").classList.remove("hidden");
        } else {
            alert("We do not find any such secrets. Try again?"); 
        }
    }
}