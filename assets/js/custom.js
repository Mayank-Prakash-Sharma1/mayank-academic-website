

    document.getElementById("cp_btn").addEventListener("click", copy_password);

function copy_password() {

    var copyText = document.getElementById("pwd_spn");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}


function CopyToClipboard(containerid) {
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select().createTextRange();
      document.execCommand("copy");
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(containerid));
      window.getSelection().addRange(range);
      document.execCommand("copy");
      alert("Text has been copied, now paste in the text-area")
    }
  }



  function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }


// rnd to disable disqus ads ....not checked yet if this works
  document.addEventListener('DOMContentLoaded', function () {
    let disqus = document.getElementById('disqus_thread');

    let remove_ads = setInterval(() => {
        let iframes = document.getElementsByTagName('iframe');

        for (var iframe in iframes) {
            if (typeof iframes[iframe].src === 'undefined') {
                continue;
            }

            if (iframes[iframe].src.match(/(ads-iframe)|(disqusads)/gi)) {
                iframes[iframe].style.display = 'none';
                disqus.style.width = '100%';
            }
        }
    }, 500);

    setTimeout(function () {
        clearInterval(remove_ads);
    }, 5000);
});
