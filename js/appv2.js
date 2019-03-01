// define the book class 

 class Book {
    constructor(title,author,year){
        this.title=title; 
        this.author=author; 
        this.year=year;     
    }

    old () {
        var old, currentYear; 
        
        currentYear =   new Date().getFullYear() ;
        old = currentYear - (this.year) ;  
        return `published ${old} years ago` ;
    }

    add () {
        let item = document.createElement('div');
        let bookItem = `<h2> <strong>${this.title}</strong> <small class="old">${this.old()}</small></h2> 
                              <p class="lead"> Author : ${this.author}</p>
                              <span>This book was published in ${this.year}</span> 
                               
                        ` ;

        let deleteButton = `<button class="btn btn-lg btn-danger remove" onclick='removeClickHandler(this)' >Delete</button>`; 
        item.innerHTML+=(bookItem);
        item.innerHTML+=(deleteButton);
        document.getElementById('bookList');
        bookList.appendChild(item); 
        
        let finalList=[];
        
        
        return finalList[count]=this ; 
    }

    


};




   let add = document.getElementById('input-list'), 
        bookList=document.getElementById('bookList'),
        count=0; 
 


    add.addEventListener('save', onsubmit = (e) => {
       
        let title = document.getElementById('title').value.toUpperCase(), 
            author = document.getElementById('author').value,
            year = document.getElementById('year').value;

        if (title !== '' & author !=='' & year !== "" ){

         let book = new Book(title,author,year);
            book.add();     
            
            count+=1;

            totalList(); 
            
            

        } else { 
            const warn = document.createElement('h2');
            warn.classList.add('error');
            warn.innerHTML=(`Error "Please enter all the inputs !!" `);
            bookList.appendChild(warn);     
            setTimeout(alert=()=> {
                warn.remove(); 
            }, 1500);
        };

        
        e.preventDefault();
        return false;
    });

    
    function removeClickHandler(e){
        e.parentElement.remove(), 
        count-= 1 ;
        totalList();
    };
    
    const   totalList = () =>{
    numverOFAddedBooks=document.getElementById('numberOFBooks'); 
    numverOFAddedBooks.innerHTML=(`<h2> ${count} have been added to the list </h2>`);
    }; 
           
    /*
     if (title=='' && author=='' && year ==''){
            msg = `<h2>please enter data to continue</h2>`, 
            alert.innerHTML=(msg),
            alert.classList.toggle("err");
            
           

            } else {
            msg = `<h2>Book Downloaded</h2>`, 
            alert.innerHTML=(msg),
            alert.classList.toggle("done");
            }

    */
