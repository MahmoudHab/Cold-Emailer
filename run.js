var firstName = document.getElementById('inpF').value;

document.getElementById('btn').addEventListener('mousedown', function(e){
    const firstName = document.getElementById('inpF').value.toLowerCase(),
             lastName = document.getElementById('inpL').value.toLowerCase(),
             middleIn = document.getElementById('inpM').value.toLowerCase(),
             companyURL = document.getElementById('inpC').value.toLowerCase(),
             nickname = document.getElementById('inpN').value.toLowerCase();


             const company = companyURL.split(".").shift();
             const list = [firstName + "@" + companyURL, lastName + "@" + companyURL, firstName + lastName + "@" + companyURL, firstName + "." + lastName + "@" + companyURL, firstName + "-" + lastName + "@" + companyURL, firstName + "_" + lastName + "@" + companyURL, firstName[0] + lastName + "@" + companyURL, firstName + lastName[0] + "@" + companyURL];
             if (inpF.value.length === 0 || inpL.value.length === 0 || inpC.value.length === 0){
                document.getElementById('result').value = " ";
             }
       
             else{
                if (inpM.value.length > 0){
                    list.push(firstName + middleIn + lastName + "@" + companyURL, firstName[0] + middleIn + lastName + "@" + companyURL, firstName + middleIn + lastName[0] + "@" + companyURL);
                    document.getElementById('result').value = list;
                }

                if (inpN.value.length > 0){
                    list.push(nickname + "@" + companyURL, nickname + lastName + "@" + companyURL, nickname + "." + lastName + "@" + companyURL, nickname + "-" + lastName + "@" + companyURL, nickname + "_" + lastName + "@" + companyURL, nickname + lastName[0] + "@" + companyURL);
                    document.getElementById('result').value = list;
                }

              if (inpN.value.length > 0 && inpN.value[0] !== inpF.value[0]){
                    list.push(nickname[0] + lastName + "@" + companyURL);
                }
                 
                if (inpN.value.length > 0 && inpM.value.length > 0){
                    list.push(nickname + middleIn + lastName + "@" + companyURL, nickname + middleIn + lastName[0] + "@" + companyURL)
                    if (inpN.value[0] !== inpF.value[0]){
                        list.push(nickname[0] + middleIn + lastName + "@" + companyURL);
                    }
                
                }

                document.getElementById('result').value = list;
            } 

 })
