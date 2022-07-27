var arrs = []
var a = 0

function ID() {
    var regexID  =  /(?:(?:https|http)(?::\/\/)(?:www|m|x)\.facebook.com\/(?:groups\/)?(?:profile\.php\?id=)?)((?:\w\d?\.?)+)/
    var id = document.getElementById('input').value
    arrs.push(id)
    document.getElementById('input').value = ''
    if(id.length == 0) {
        document.getElementsByTagName('span')[0].innerHTML = 'Please enter your link'
    }
    else if(!regexID.test(id)) {
        document.getElementsByTagName('span')[0].innerHTML = 'Please enter a valid link'
    }
    else {
        document.getElementsByTagName('span')[0].innerHTML = ''
        var result = id.match(regexID);
        var tagName = document.createElement('h4');
        a += 1
        var name = a.toString(10)
        tagName.id = name
        tagName.classList.add('item')
        tagName.onclick = function() {
            var check = confirm("Are you sure you want to leave?")
            if (check == true) {
                window.open(arrs[tagName.id - 1], "_blank")
                console.log(tagName.id - 1)
                return true;
            }
            else {
                return false;
            }
        }
        
        var down = document.createElement('br')
        var content = document.createTextNode(result[1]);
        tagName.appendChild(content)
        tagName.href = id
        var element = document.getElementsByClassName('result')[0]
        element.appendChild(tagName)
        element.appendChild(down)

    }

}

function exit() {
    location.reload()
}


