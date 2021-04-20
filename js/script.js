var users = [
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png',
        age: 21        
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar2.png',
        age: 25
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar3.png',
        age: 20
    },
    {
        name: 'Christopher',
        gender: 'M',
        hobby: 'sports',
        avatar: 'avatar4.png',
        age: 25
    },
    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'reading',
        avatar: 'avatar5.png',
        age: 22
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        avatar: 'avatar6.png',
        age: 20
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.png',
        age: 20
    },
];


window.addEventListener('load', function() {

    var results = document.getElementById('results');
    
    function search() {
        
        //get hobby
        let hobbyField = document.getElementById('hobby');
        let hobby = hobbyField.value;
        
        //get gender
        let genderField = document.getElementById('gender');
        let s = genderField.selectedIndex;
        let gender = genderField.options[s].value;

        //get age
        let minAge = document.getElementById('minAge').value;
        let maxAge = document.getElementById('maxAge').value;

        let resultsHtml = '';
        let usersLength = users.length;
            
        for(var i = 0; i < usersLength; i++) {
            let age = users[i].age;
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                // check age
                if(minAge == '' ||  age>=minAge && age<= maxAge || maxAge ==''){
                    // if(maxAge =='' || maxAge <=age){
                        //check hobby
                     if (hobby == '' || hobby == users[i].hobby) {
                        resultsHtml += '<div class="person-row">\
                            <img src="images/' + users[i].avatar + '" />\
                            <div class="person-info">\
                            <div class="person-info-name"><p>' + users[i].name + '</p></div>\
                            <div class="person-info-hobby"><p>Age: ' + users[i].age + '</p></div>\
                            <div class="person-info-hobby"><p>Hobby: '+ users[i].hobby + '</p></div></div>\
                                <button>+</button></div>';  
                        }
                    //}
                }
            }
        }
        
        results.innerHTML = resultsHtml;
    }
    
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
});