let data=[30,20,45,76,20,80]
        let position = 3
        console.log(data,'******')
        for (let i = position; i < data.length-1; i++) { 
                  
             data[i]=data[i+1];
            
        }

        console.log(data,'-----')
        // document.write('<br>')
        data.length=data.length-1
        console.log(data)

