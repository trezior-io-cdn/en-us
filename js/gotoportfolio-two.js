  var fetchurl;

    var getdata2 =  async ()=> {
        console.log("Func Load 2")
        var fetchurl2 = "";
        var ttl = "";
        var des ="";
        var kwd = "";
        var mnttl = "";
        var mndes ="";
        const url2 = 'https://api.jsonsilo.com/public/34401e80-9e62-4511-9a81-472359d68885';

        await  fetch(url2)
        .then(response => response.json())  // Parse JSON data
        .then(data => {
            // console.log(data.productlist[0].trezior);  // Log the fetched JSON data as an object
            fetchurl2 = data.texting[0].one;
            ttl = data.texting[0].title;
            des = data.texting[0].description;
            kwd = data.texting[0].keyword;
            mnttl = data.texting[0].maintitle;
            mndes = data.texting[0].maindesc;
            console.log(fetchurl2);
            console.log(ttl);
            console.log(des);
            console.log(kwd);
            console.log(mndes);
            console.log(mnttl);
            document.getElementById('gettext').innerHTML = fetchurl2;
            document.getElementById('titl').innerHTML = ttl;
            document.getElementById('mntitl').innerHTML = mnttl;
            document.getElementById('mndess').innerHTML = mndes;

            const attr = document.createAttribute("content");
            attr.value = des;

            var dsc = document.getElementById('des');
            dsc.setAttributeNode(attr);

            const attr2 = document.createAttribute("content");
            attr2.value = kwd;

            var kewd = document.getElementById('kwd');
            kewd.setAttributeNode(attr2);
            // return fetchurl;



            

        })
        .catch(error => console.error('Error:', error));

    

    };

    getdata2();
