// define the book class 

 class Book {
    constructor(title,author,year){
        this.title=title; 
        this.author=author; 
        this.year=year; 
        
    }

    old () {
        let old, currentYear; 
        
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




   let add = document.getElementById('input-list'), 
        bookList=document.getElementById('bookList'),
        count=1; 
 


    add.addEventListener('save', onsubmit = (e) => {

       
        const   title = document.getElementById('title').value, 
                author = document.getElementById('author').value,
                year = document.getElementById('year').value;
            
        const count = new Book(title,author,year);
            count.add();
            console.log(author); 
            console.log(title);  
            console.log(year) ;
            console.log(count);
            
            count+=1;
            
            e.preventDefault();
            return false,
            finalList=[...count],
            console.log(finalList);

        
    });
