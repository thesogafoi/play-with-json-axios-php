
function performGetRequest1(){
    document.getElementById('getResult1').innerHTML = '';
    axios.get('http://localhost/training-web/New%20folder%20(2)/data.json').then(response =>{
        document.getElementById('getResult1').innerHTML = generateSuccessHTMLOutput(response);
    }).catch(function (error) {
        console.log(error);
      });
}



function generateSuccessHTMLOutput(response) {
    return  '<h4>Result</h4>' + 
            '<h5>Status:</h5> ' + 
            '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
            '<h5>Headers:</h5>' + 
            '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
            '<h5>Data:</h5>' + 
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
  }
  function searchedOutPutData(element){
    return  '<h4>Result</h4>' + 
    '<h5>Status:</h5> ' + 
    '<pre>Title: ' + element.title + '</pre>' ;
  }

  function clearOutput (){
    
    document.getElementById('getResult2').innerHTML = '';
    document.getElementById('postResult').innerHTML = '';
  }
  
  function performGetRequest2() {
      document.getElementById('getResult2').innerHTML = '';
      var dataSearched = '';
      var id    =  document.getElementById('todoId').value;
      axios.get('http://localhost/training-web/New%20folder%20(2)/data.json' , {
      }).then(response=>{
        dataSearched = response.data;
         console.log(dataSearched);
         return searchedTitle();
         function searchedTitle(){
            dataSearched.forEach(element => {
                if(element['title'].toLowerCase().indexOf(id.toLowerCase()) > -1 ){
                      return document.getElementById('getResult2').innerHTML += searchedOutPutData(element);
                    console.log(element.title);
                 }
             });
          }
          
      }).catch(error=>{
          console.log(error);
      });
  }


  document.getElementById('todoInputForm').addEventListener('submit' , performPostRequest );


  function performPostRequest (e){
    e.preventDefault();
      titleInput = document.getElementById('todoTitle').value;
      resultElement = document.getElementById("postResult");
    var params = new URLSearchParams();
    params.append('title', titleInput);
      axios.post('something.php' , params).then(response=>{
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
        console.log(response.config.data);
      }).catch(error=>{
        console.log(error);
        resultElement.innerHTML = 'We have ERror';
      });
     
  }

 


