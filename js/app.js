/* define the book class 

 class Book {
    constructor(title,author,year){
        this.title=title; 
        this.author=author; 
        this.year=year; 
        this.id=id;
    }

    old () {
        var old, currentYear; 
        
        currentYear =   new Date().getFullYear() ;
        old = currentYear - (this.year) ; 
        console.log (`this book was published ${old} years ago`) ;
    }

    delete (book) {
        books = books.filter (b => {
            return b.name != book.name 
        })
    }
}; 




    var add = document.getElementById('input-list'),
        id=0;
 


    add.addEventListener('save', onsubmit = (e) => {
       
        var title = document.getElementById('title').value, 
            author = document.getElementById('author').value,
            year = document.getElementById('year').value; 
            count=0, 
            id+=1,
            books=[],          
            books[count] = new Book(title,author,year),
            text = (`the book is ${books[count].title} is written by ${books[count].author} in ${books[count].year}`);
            document.getElementById(`${id}`).innerHTML=text;
            console.log(author); 
            console.log(title);
            console.log(year) ;
            count+=1;
            
            e.preventDefault();
            return false;
        
          

        
        
    });

    */ 


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
        let bookItem = `<h2> <strong>${this.title}</strong> <small>${this.old()}</small></h2> 
                              <p class="lead"> Author : ${this.author}</p>
                              <span>This book was published in ${this.year}</span> 
                               
                        ` ;

        let deleteButton = `<button class="btn btn-lg btn-danger" id="delete">Delete</button>`; 
        item.innerHTML+=(bookItem);
        item.innerHTML+=(deleteButton);
        document.getElementById('bookList');
        bookList.appendChild(item); 
        return this ; 
    }
    
}; 




