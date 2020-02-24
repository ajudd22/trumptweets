document.getElementById('submitButton').addEventListener("click", function(){
  var x= document.getElementById('selectInput');
  var selection = x.options[x.selectedIndex].value;
  console.log(selection);


  var conn = new XMLHttpRequest();
  var tweets = document.getElementsByClassName('tweet-text');
  for (let i = 0; i < tweets.length; i++){

    let url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
    url += "?key=trnsl.1.1.20200224T024712Z.06ebb15e51ff7540.8a0951a92610cd24f9c1791ce8992e2edbf2ee21";

    console.log(tweets[i]);
    var str = tweets[i].innerText;
    url += "&text="+str;
    url += "&lang="+selection;
    url += "&[format=HTML]";
    url += "&[options=1]";
    conn.open("POST", url, false);
    conn.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(conn);
      var obj = JSON.parse(conn.response);
      console.log(obj.text);
      document.getElementsByClassName('tweet-text')[i].innerText = obj.text;
      }
    };
    conn.send()
    }

})
function changetext(response, tweet){
}
