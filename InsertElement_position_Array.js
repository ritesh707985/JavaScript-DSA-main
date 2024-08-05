let data=[90,64,98,43]
        let newEl= 20
        let position = 2
        console.log(data)
        for (let i = data.length -1; i >=0; i--) {
            const element = data[i];
        //     console.log(`${element} <br>`)
        //    console.log('--')
            if(i>=position){
                data[i+1]=data[i]
                if(i==position){
                    data[i]=newEl
                }

            }

        }
        console.log(data)
