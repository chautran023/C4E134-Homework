// Create a button to edit and end editing task

const paragraph = document.getElementById("myUL");
const edit_button = document.getElementById("edit-button");
const end_button = document.getElementById("end-editing");

edit_button.addEventListener("click", function() {
  paragraph.contentEditable = true;
  paragraph.style.backgroundColor = "gray";
} );

end_button.addEventListener("click", function() {
  paragraph.contentEditable = false;
  paragraph.style.backgroundColor = "#ffe44d";

  // Make sure after editing the close button maintains
  var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
} )
function newElement() {
// Create a new list item when clicking on the "Add" button
    var li = document.createElement("li");
    var inputTask = document.getElementById("myInput").value;
    var inputDesc = document.getElementById("desc").value;
    var t = document.createTextNode(inputTask);
    var d = document.createTextNode(inputDesc);

    var para = document.createElement("p");
    /*const node = document.createTextNode("Details: ");
    para.style.fontWeight="bolder";
    
    para.appendChild(node);*/
    li.appendChild(t); 

    if (inputDesc != '') {
        li.appendChild(para); 
        li.appendChild(d);
    } 
   
    if (inputTask === '') {
      alert("You must input task!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    document.getElementById("desc").value = "";

// Create a "close" button and append it to each list item
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}

// Turn to "checked" status (line-through) when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle('checked');
  }
}, false);

// Sắp xếp các task theo tự từ A - Z, từ Z - A (dựa vào title của task)
function sortList(ul) {
    var ul = document.getElementById(ul);
  
    Array.from(ul.getElementsByTagName("LI"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ul.appendChild(li));
}
// Clear hết các task đã hoàn thành (completed)

const del_button = document.getElementById("delete-button");

del_button.addEventListener("click", function() {
    var x=document.getElementsByTagName("li");
    
    for(i=0;i<=x.length;i++){
        if (x[i].classList.contains("checked")== true){
            x[i].style.display = "none";
        }
    }
})

// In ra màn hình các tasks đã hoàn thành, và số lượng tương ứng
const show_button = document.getElementById("show-com-button");
show_button.addEventListener("click", function() {
    var x = document.getElementsByTagName("li");
    var arr=[];
    for(i=0;i<=x.length;i++){
        if (x[i].classList.contains("checked")== true){
        var y = x[i].innerHTML;
        y = y.replace("\u00D7","");
        y = y.replace("close","");
        arr.push(" <br/>" + y);
        document.getElementById("show").innerHTML = "Chúc mừng bạn đã hoàn thành " + arr.length + " tasks sau:" + arr;
      }
    }
})

// In ra màn hình các tasks chưa hoàn thành, và số lượng tương ứng
const show_unfin_button = document.getElementById("show-unfin-button");
show_unfin_button.addEventListener("click", function() {
    var x=document.getElementsByTagName("li");
    var arr=[];
    for(i=0;i<=x.length;i++){
        if (x[i].classList.contains("checked")== false){
          var y = x[i].innerHTML;
          y = y.replace("\u00D7","");
          y = y.replace("close","");
          arr.push(" <br/>" + y);
          document.getElementById("show").innerHTML = "Bạn chưa hoàn thành " + arr.length + " tasks sau:" + arr;
        }
    }
})

// In ra màn hình toàn bộ các tasks, và số lượng tương ứng
const show_all_button = document.getElementById("show-button");
show_all_button.addEventListener("click", function() {
    var x=document.getElementsByTagName("li");
    var arr=[];
    for(i=0;i<=x.length;i++){
      var y = x[i].innerHTML;
      y = y.replace("\u00D7","");
      y = y.replace("close","");
      arr.push(" <br/>" + y);
      document.getElementById("show").innerHTML = "Bạn có tất cả " + arr.length + " tasks sau:" + arr;
    }
})
