/**
 * Created by lee on 1/6/16.
 */

"use strict";



//create &delete a new text area
(function () {
    setInterval(function () {
        var links = document.getElementsByClassName("input-group");
        var index = links.length - 1;
        var last_link = links[index];
        //input entered & needs another text box
        if (last_link.children[1].value != '') {
            var parent = document.getElementById("link-group");
            var inputGroup = document.createElement("div");
            inputGroup.setAttribute("class", "input-group");
            var span = document.createElement('span');
            span.setAttribute("class", "input-group-addon");
            span.innerHTML = links.length + 1;
            var input = document.createElement('input');
            input.setAttribute("rows", 7);
            input.setAttribute("name", "links");
            input.setAttribute("placeholder", "example.com");
            input.setAttribute("class", "form-control content-input");
            input.setAttribute("type", text);
            inputGroup.appendChild(span);
            inputGroup.appendChild(input);
            parent.appendChild(inputGroup);
        }

        //check every text box except the last box. if it's empty, delete.
        //if a text box is remove, move the cursor focus to the previous text box
        for (var i = 0; i < links.length - 1; i++) {
            var curr = links[i];
            if (curr.children[1].value === '') {
                curr.remove();
                // renumber inputs
                for (var j = i; j < links.length; j++) {
                    links[j].children[0].innerHTML = j + 1;
                }
                //if the first box was removed, place the cursor at the new first box
                if (i === 0) {
                    console.log(links.length);
                    links[0].children[1].select();
                    links[0].children[1].selectionStart = links[0].children[1].value.length;
                }
                //place the cursor at the previous box
                else {
                    links[i - 1].children[1].select();
                    links[i - 1].children[1].selectionStart = links[i - 1].children[1].value.length;
                }
            }
        }
    }, 100);
})();

(function deleteButton() {
    var index = document.getElementsByName("link").length - 1;
    var last_link = document.getElementsByName("link")[index];
    last_link.remove();
})();