  var fetchurl;

    var getdata =  async ()=> {
        console.log("Func Load")
        var fetchurl = "";
        const url = 'https://api.jsonsilo.com/public/846442d1-057f-46dd-ae56-30366a13e402';

        await  fetch(url)
        .then(response => response.json())  // Parse JSON data
        .then(data => {
            // console.log(data.productlist[0].trezior);  // Log the fetched JSON data as an object
            fetchurl = data.portfolio[0].one;
            // console.log(fetchurl);

            // return fetchurl;

            window.location.replace(fetchurl);



            

        })
        .catch(error => console.error('Error:', error));

    

    };

