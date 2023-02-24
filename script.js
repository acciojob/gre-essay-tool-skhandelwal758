//your code here
let textbox = document.getElementById("evaluatedText");
textbox.addEventListener('input', function(){
    var text = this.value;
	text = text.trim();
    // console.log(text);
    let words = text.split(" ");
    let len = words.length;
    document.getElementById("wordCount").innerText = len;
    console.log()
})
