
(function () {
    document.querySelector('.getFilms').addEventListener('click', ev => {

        fetch('localhost:5050/movies')
            .then(response => {
                console.log(response);
            })
            // .then( data => {
    
            //         let results = data.results;
            //         console.log(data)
    
            //         results.forEach(film => {
            //             let filmNode = document.createElement('div')
    
            //             filmNode.innerHTML =
            //                 `<small>${film.original_title}</small>
            //                 <h1>${ film.title }</h1>
            //                 <div>
            //                     <img src="https://image.tmdb.org/t/p/w200${film.poster_path}">
            //                     <p>${film.overview}</p>
            //                 </div>
            //                 <hr>`
    
            //             document.querySelector('.films').append(filmNode);
            //         })
            //     })
    })
})()