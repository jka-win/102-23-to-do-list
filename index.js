
document.getElementById("input-text").onkeyup = e => {
    if (e.key === "Enter") {
        document.getElementById("input-button").click();
    }
};

document.getElementById("input-button").onclick = e => {
    let text = document.getElementById("input-text").value.trim();
    document.getElementById("input-text").value = "";
    if (text.length > 0) {
        let li = document.createElement("li");
        li.textContent = text;
        document.getElementById("to-do-list").appendChild(li);
        li.onclick = e => {
            e.target.classList.add("deleting");
            setTimeout(() => document.getElementById("to-do-list").removeChild(e.target), 1000);
        };
    }
};
