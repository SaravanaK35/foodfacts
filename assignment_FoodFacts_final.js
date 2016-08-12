var a=require('fs');
var input=a.createReadStream('./FoodFacts/FoodFacts.csv');
var rl=require('readline').createInterface({
  input: input
});
var zz=0;
var temp=0;
var temp1=0;
var t_sugar=[];
var t_salt=[];

var max_of_array_fr=[];
var splitColumnsArray=[];
var sugarArray=[];
var saltArray=[];
//var sugar_salt=[];
var final_sugar_salt=[];
var Netherlands_sugar_array=[];
var Netherlands_salt_array=[];
var Canada_sugar_array=[];
var Canada_salt_array=[];
var United_Kingdom_sugar_array=[];
var United_Kingdom_salt_array=[];
var United_States_sugar_array=[];
var United_States_salt_array=[];
var Australia_sugar_array=[];
var Australia_salt_array=[];
var France_sugar_array=[];
var France_salt_array=[];
var Germany_sugar_array=[];
var Germany_salt_array=[];
var Spain_sugar_array=[];
var Spain_salt_array=[];
var South_Africa_sugar_array=[];
var South_Africa_salt_array=[];
//var count_sugar_array=[];
//var count_salt_array=[];
var Nd_array_sugar=[];
var Nd_array_salt=[]
var Ca_array_sugar=[];
var Ca_array_salt=[];
var Uk_array_sugar=[];
var Uk_array_salt=[];
var Us_array_sugar=[];
var Us_array_salt=[];
var As_array_sugar=[];
var As_array_salt=[];
var Fr_array_sugar=[];
var Fr_array_salt=[];
var Ge_array_sugar=[];
var Ge_array_salt=[];
var Sp_array_sugar=[];
var Sp_array_salt=[];
var Sa_array_sugar=[];
var Sa_array_salt=[];
//finalarray
var UK_final_sugar_salt=[];
var FR_final_sugar_salt=[];
var ND_final_sugar_salt=[];
var US_final_sugar_salt=[];
var CA_final_sugar_salt=[];
var AS_final_sugar_salt=[];
var GE_final_sugar_salt=[];
var SP_final_sugar_salt=[];
var SA_final_sugar_salt=[];
var GE_the_final=[];
var FR_the_final=[];
var UK_the_final=[];
var ND_the_final=[];
var US_the_final=[];
var CA_the_final=[];
var AS_the_final=[];
var SA_the_final=[];
var SP_the_final=[];
//1st final array
var the_final_most=[];

//2nd
var in_country=0
var in_fat=0;
var in_protein=0;
var in_carbohydrate=0;
var northEurope=["United Kingdom", "Denmark", "Sweden" ,"Norway"];
var centralEurope=["France", "Belgium", "Germany", "Switzerland","Netherlands"];
var southEurope=["Portugal", "Greece", "Italy", "Spain", "Croatia","Albania"];
var regions=["North Europe","Central Europe","South Europe"];
var europe=[];
var splitted_data=[];

var i=0;
var countries=["Netherlands","Canada","United Kingdom","United States","Australia","France","Germany","Spain","South Africa"];
rl.on('line',function(line)
{

   splitted_data=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
   //splitColumnsArray= mline.split(",");
   //console.log(splitColumnsArray[0]);
   if(i===0)
   {
     splitColumnsArray= line.split(",");
     //console.log(splitColumnsArray);
     countriesArray=splitColumnsArray.indexOf("countries_en");
     sugarArray=splitColumnsArray.indexOf("sugars_100g");
     saltArray=splitColumnsArray.indexOf("salt_100g");


     in_country=splitted_data.indexOf("countries_en");
     in_fat=splitted_data.indexOf("fat_100g");
     in_protein=splitted_data.indexOf("proteins_100g");
     in_carbohydrate=splitted_data.indexOf("carbohydrates_100g");
    // console.log(countriesArray);
     //console.log(sugarArray);
    // console.log(saltArray);
     i++;
   }
   else
   {
    var lines=[];
    var infoInLine= line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    infoInLine.forEach(function(dataString){
      lines.push(dataString.replace(/['"]+/g, ''));
    });
    for(j=0;j<countries.length;j++)
    {
      if(lines[countriesArray]==countries[j])
      {
       var country_name=lines[countriesArray];
       var sugar_value = lines[sugarArray];
       var salt_value = lines[saltArray];
       if (sugar_value == '' || salt_value == ''){
         salt_value=0;
         sugar_value=0;
       }
       if(country_name== "Netherlands"){
         Netherlands_sugar_array.push(parseFloat(sugar_value));
         Netherlands_salt_array.push(parseFloat(salt_value));
         var total_NR_sugar_array = Netherlands_sugar_array.reduce(function(a,b){ return a + b; },0);
         var total_NR_salt_array = Netherlands_salt_array.reduce(function(a,b){ return a + b; },0);
         //sugar_salt.push({"country":country_name,"sugar":total_NR_sugar_array,"salt":total_NR_salt_array});
       }
       else if (country_name== "Canada") {
         Canada_sugar_array.push(parseFloat(sugar_value));
         Canada_salt_array.push(parseFloat(salt_value));
         var total_CA_sugar_array = Canada_sugar_array.reduce(function(a,b){ return a + b; },0);
         var total_CA_salt_array = Canada_salt_array.reduce(function(a,b){ return a + b; },0);
         //sugar_salt.push({"country":country_name,"sugar":total_CA_sugar_array,"salt":total_CA_salt_array});
       }
       else if (country_name== "United Kingdom") {
         United_Kingdom_sugar_array.push(parseFloat(sugar_value));
         United_Kingdom_salt_array.push(parseFloat(salt_value));
         var total_UK_sugar_array = United_Kingdom_sugar_array.reduce(function(a,b){ return a + b; },0);
         var total_UK_salt_array = United_Kingdom_salt_array.reduce(function(a,b){ return a + b; },0);
         //sugar_salt.push({"country":country_name,"sugar":total_UK_sugar_array,"salt":total_UK_salt_array});
       }
       else if (country_name== "United States") {
         United_States_sugar_array.push(parseFloat(sugar_value));
         United_States_salt_array.push(parseFloat(salt_value));
         var total_US_sugar_array = United_States_sugar_array.reduce(function(a,b){ return a + b; },0);
         var total_US_salt_array = United_States_salt_array.reduce(function(a,b){ return a + b; },0);
         //sugar_salt.push({"country":country_name,"sugar":total_US_sugar_array,"salt":total_US_salt_array});
       }
       else if (country_name== "Australia") {
         Australia_sugar_array.push(parseFloat(sugar_value));
         Australia_salt_array.push(parseFloat(salt_value));
         var total_AUS_sugar_array = Australia_sugar_array.reduce(function(a,b){ return a + b; },0);
         var total_AUS_salt_array = Australia_salt_array.reduce(function(a,b){ return a + b; },0);
         //sugar_salt.push({"country":country_name,"sugar":total_AUS_sugar_array,"salt":total_AUS_salt_array});
       }
       else if (country_name== "France") {
         France_sugar_array.push(parseFloat(sugar_value));
         France_salt_array.push(parseFloat(salt_value));
         var total_FR_sugar_array = France_sugar_array.reduce(function(a,b){ return a + b; },0);
         var total_FR_salt_array = France_salt_array.reduce(function(a,b){ return a + b; },0);
         //sugar_salt.push({"country":country_name,"sugar":total_FR_sugar_array,"salt":total_FR_salt_array});
       }
       else if (country_name== "Germany") {
         Germany_sugar_array.push(parseFloat(sugar_value));
         Germany_salt_array.push(parseFloat(salt_value));
         var total_GR_sugar_array = Germany_sugar_array.reduce(function(a,b){ return a + b; },0);
         var total_GR_salt_array = Germany_salt_array.reduce(function(a,b){ return a + b; },0);
         //sugar_salt.push({"country":country_name,"sugar":total_GR_sugar_array,"salt":total_GR_salt_array});
       }
       else if (country_name== "Spain") {
         Spain_sugar_array.push(parseFloat(sugar_value));
         Spain_salt_array.push(parseFloat(salt_value));
         var total_SP_sugar_array = Spain_sugar_array.reduce(function(a,b){ return a + b; },0);
         var total_SP_salt_array = Spain_salt_array.reduce(function(a,b){ return a + b; },0);
         //sugar_salt.push({"country":country_name,"sugar":total_SP_sugar_array,"salt":total_SP_salt_array});
       }
       else if (country_name== "South Africa") {
         South_Africa_sugar_array.push(parseFloat(sugar_value));
         South_Africa_salt_array.push(parseFloat(salt_value));
         var total_SA_salt_array = South_Africa_salt_array.reduce(function(a,b){ return a + b; },0);
         var total_SA_sugar_array = South_Africa_sugar_array.reduce(function(a,b){ return a + b; },0);
         //sugar_salt.push({"country":country_name,"sugar":total_SA_sugar_array,"salt":total_SA_salt_array});
       }

     }//if
    }//for
    if(country_name=="South Africa"){
    Sa_array_sugar.push(total_SA_sugar_array);
    //console.log(Fr_array);
    for(s=0;s<Sa_array_sugar.length;s++){
      if(Sa_array_sugar[s]== null){
        Sa_array_sugar.pop(Sa_array_sugar[s]);
      }
    }
    Sa_array_salt.push(total_SA_salt_array);
    for(s=0;s<Sa_array_salt.length;s++){
      if(Sa_array_salt[s]== null){
        Sa_array_salt.pop(Sa_array_salt[s]);
      }
    }
    var value1 = Math.max.apply(Math, Sa_array_sugar);
    var value2 = Math.max.apply(Math, Sa_array_salt);
    SA_final_sugar_salt.push({"country":country_name,"sugar":value1,"salt":value2});
    SA_the_final.push(SA_final_sugar_salt[SA_final_sugar_salt.length-1]);
    //console.log(SA_the_final);
    //console.log(SA_the_final[SA_the_final.length-1]);
  }//Southafrica_if
    if(country_name=="Spain"){
    Sp_array_sugar.push(total_SP_sugar_array);
    //console.log(Fr_array);
    for(s=0;s<Sp_array_sugar.length;s++){
      if(Sp_array_sugar[s]== null){
        Sp_array_sugar.pop(Sp_array_sugar[s]);
      }
    }
    Sp_array_salt.push(total_SP_salt_array);
    for(s=0;s<Sp_array_salt.length;s++){
      if(Sp_array_salt[s]== null){
        Sp_array_salt.pop(Sp_array_salt[s]);
      }
    }
    var value1 = Math.max.apply(Math, Sp_array_sugar);
    var value2 = Math.max.apply(Math, Sp_array_salt);
    SP_final_sugar_salt.push({"country":country_name,"sugar":value1,"salt":value2});
    SP_the_final.push(SP_final_sugar_salt[SP_final_sugar_salt.length-1]);
    //console.log(SP_the_final);
    //console.log(SP_the_final[SP_the_final.length-1]);
  }//Spain_if
    if(country_name=="Germany"){
    Ge_array_sugar.push(total_GR_sugar_array);
    //console.log(Fr_array);
    for(s=0;s<Ge_array_sugar.length;s++){
      if(Ge_array_sugar[s]== null){
        Ge_array_sugar.pop(Ge_array_sugar[s]);
      }
    }
    Ge_array_salt.push(total_GR_salt_array);
    for(s=0;s<Ge_array_salt.length;s++){
      if(Ge_array_salt[s]== null){
        Ge_array_salt.pop(Ge_array_salt[s]);
      }
    }
    var value1 = Math.max.apply(Math, Ge_array_sugar);
    var value2 = Math.max.apply(Math, Ge_array_salt);
    GE_final_sugar_salt.push({"country":country_name,"sugar":value1,"salt":value2});
    GE_the_final.push(GE_final_sugar_salt[GE_final_sugar_salt.length-1]);
    //console.log(GE_the_final);
    //console.log(GE_the_final[GE_the_final.length-1]);
  }//Germany_if
    if(country_name=="Australia"){
    As_array_sugar.push(total_AUS_sugar_array);
    //console.log(Fr_array);
    for(s=0;s<As_array_sugar.length;s++){
      if(As_array_sugar[s]== null){
        As_array_sugar.pop(As_array_sugar[s]);
      }
    }
    As_array_salt.push(total_AUS_salt_array);
    for(s=0;s<As_array_salt.length;s++){
      if(As_array_salt[s]== null){
        As_array_salt.pop(As_array_salt[s]);
      }
    }
    var value1 = Math.max.apply(Math, As_array_sugar);
    var value2 = Math.max.apply(Math, As_array_salt);
    AS_final_sugar_salt.push({"country":country_name,"sugar":value1,"salt":value2});
    AS_the_final.push(AS_final_sugar_salt[AS_final_sugar_salt.length-1]);
    //console.log(AS_the_final);
    //console.log(AS_the_final[AS_the_final.length-1]);
  }//australia_if
    if(country_name=="Canada"){
    Ca_array_sugar.push(total_CA_sugar_array);
    //console.log(Fr_array);
    for(s=0;s<Ca_array_sugar.length;s++){
      if(Ca_array_sugar[s]== null){
        Ca_array_sugar.pop(Ca_array_sugar[s]);
      }
    }
    Ca_array_salt.push(total_CA_salt_array);
    for(s=0;s<Ca_array_salt.length;s++){
      if(Ca_array_salt[s]== null){
        Ca_array_salt.pop(Ca_array_salt[s]);
      }
    }
    var value1 = Math.max.apply(Math, Ca_array_sugar);
    var value2 = Math.max.apply(Math, Ca_array_salt);
    CA_final_sugar_salt.push({"country":country_name,"sugar":value1,"salt":value2});
    CA_the_final.push(CA_final_sugar_salt[CA_final_sugar_salt.length-1]);
    //console.log(CA_the_final);
    //console.log(CA_the_final[CA_the_final.length-1]);
  }//canada_if
    if(country_name=="United States"){
    Us_array_sugar.push(total_US_sugar_array);
    //console.log(Fr_array);
    for(s=0;s<Us_array_sugar.length;s++){
      if(Us_array_sugar[s]== null){
        Us_array_sugar.pop(Us_array_sugar[s]);
      }
    }
    Us_array_salt.push(total_US_salt_array);
    for(s=0;s<Us_array_salt.length;s++){
      if(Us_array_salt[s]== null){
        Us_array_salt.pop(Us_array_salt[s]);
      }
    }
    var value1 = Math.max.apply(Math, Us_array_sugar);
    var value2 = Math.max.apply(Math, Us_array_salt);
    US_final_sugar_salt.push({"country":country_name,"sugar":value1,"salt":value2});
    US_the_final.push(US_final_sugar_salt[US_final_sugar_salt.length-1]);
    //console.log(US_the_final);
    //console.log(US_the_final[US_the_final.length-1]);
  }//United_States_if
  if(country_name=="France"){
  Fr_array_sugar.push(total_FR_sugar_array);
  //console.log(Fr_array);
  for(s=0;s<Fr_array_sugar.length;s++){
    if(Fr_array_sugar[s]== null){
      Fr_array_sugar.pop(Fr_array_sugar[s]);
    }
  }
  Fr_array_salt.push(total_FR_salt_array);
  for(s=0;s<Fr_array_salt.length;s++){
    if(Fr_array_salt[s]== null){
      Fr_array_salt.pop(Fr_array_salt[s]);
    }
  }
  var value1 = Math.max.apply(Math, Fr_array_sugar);
  var value2 = Math.max.apply(Math, Fr_array_salt);
  FR_final_sugar_salt.push({"country":country_name,"sugar":value1,"salt":value2});
  FR_the_final.push(FR_final_sugar_salt[FR_final_sugar_salt.length-1]);
  //console.log(FR_the_final);
  //console.log(FR_the_final[FR_the_final.length-1]);
  }//France_if
 if(country_name=="Netherlands") {
    Nd_array_sugar.push(total_NR_sugar_array);
    for(s=0;s<Nd_array_sugar.length;s++){
      if(Nd_array_sugar[s]== null){
        Nd_array_sugar.pop(Nd_array_sugar[s]);
      }
    }
    Nd_array_salt.push(total_NR_salt_array);
    for(s=0;s<Nd_array_salt.length;s++){
      if(Nd_array_salt[s]== null){
        Nd_array_salt.pop(Nd_array_salt[s]);
      }
    }
    var value1 = Math.max.apply(Math, Nd_array_sugar);
    var value2 = Math.max.apply(Math, Nd_array_salt);
    ND_final_sugar_salt.push({"country":country_name,"sugar":value1,"salt":value2});
    ND_the_final.push(ND_final_sugar_salt[ND_final_sugar_salt.length-1]);
    //console.log(final_sugar_salt[final_sugar_salt.length-1]);
  }//Netherlands_if
  if(country_name=="United Kingdom") {
     Uk_array_sugar.push(total_UK_sugar_array);
     for(s=0;s<Uk_array_sugar.length;s++){
       if(Uk_array_sugar[s]== null){
         Uk_array_sugar.pop(Uk_array_sugar[s]);
       }
     }
     Uk_array_salt.push(total_UK_salt_array);
     for(s=0;s<Uk_array_salt.length;s++){
       if(Uk_array_salt[s]== null){
         Uk_array_salt.pop(Uk_array_salt[s]);
       }
     }
     var value1 = Math.max.apply(Math, Uk_array_sugar);
     var value2 = Math.max.apply(Math, Uk_array_salt);
    UK_final_sugar_salt.push({"country":country_name,"sugar":value1,"salt":value2});
     UK_the_final.push(UK_final_sugar_salt[UK_final_sugar_salt.length-1]);
     //console.log(UK_the_final[UK_the_final.length-1]);
   }//United_kingdom_if





   for(var a=0;a<northEurope.length;a++)
   {
     if(northEurope[a]==splitted_data[in_country])
     {
       var value_region="North Europe"
       var value_country_2=splitted_data[in_country];
       var value_fat=splitted_data[in_fat];
       var value_protein=splitted_data[in_protein];
       var value_carbohydrates=splitted_data[in_carbohydrate];

       if(value_fat=="")
       {
         value_fat=0;
       }
       if(value_protein=="")
       {
         value_protein=0;
       }
       if(value_carbohydrates=="")
       {
         value_carbohydrates=0;
       }

       if(europe[regions.indexOf(value_region)]==null)
       {
         europe[regions.indexOf(value_region)] = {
           "region": value_region,
           "fat" : parseFloat(value_fat),
           "proteins" : parseFloat(value_protein),
           "carbohydrates": parseFloat(value_carbohydrates)
         };
       }
       else
       {
         europe[regions.indexOf(value_region)].fat=europe[regions.indexOf(value_region)].fat+parseFloat(value_fat);
         europe[regions.indexOf(value_region)].proteins=europe[regions.indexOf(value_region)].proteins+parseFloat(value_protein);
         europe[regions.indexOf(value_region)].carbohydrates=europe[regions.indexOf(value_region)].carbohydrates+parseFloat(value_carbohydrates);
       }
     }
   }

   for(var b=0;b<centralEurope.length;b++)
   {
     if(centralEurope[b]==splitted_data[in_country])
     {
       var value_region="Central Europe"
       var value_country_2=splitted_data[in_country];
       var value_fat=splitted_data[in_fat];
       var value_protein=splitted_data[in_protein];
       var value_carbohydrates=splitted_data[in_carbohydrate];

       if(value_fat=="")
       {
         value_fat=0;
       }
       if(value_protein=="")
       {
         value_protein=0;
       }
       if(value_carbohydrates=="")
       {
         value_carbohydrates=0;
       }
       if(europe[regions.indexOf(value_region)]==null)
       {
         europe[regions.indexOf(value_region)] = {
           "region": value_region,
           "fat" : parseFloat(value_fat),
           "proteins" : parseFloat(value_protein),
           "carbohydrates": parseFloat(value_carbohydrates)
         };
       }
       else
       {
         europe[regions.indexOf(value_region)].fat=europe[regions.indexOf(value_region)].fat+parseFloat(value_fat);
         europe[regions.indexOf(value_region)].proteins=europe[regions.indexOf(value_region)].proteins+parseFloat(value_protein);
         europe[regions.indexOf(value_region)].carbohydrates=europe[regions.indexOf(value_region)].carbohydrates+parseFloat(value_carbohydrates);
       }
     }
   }

   for(var c=0;c<southEurope.length;c++)
   {
     if(southEurope[c]==splitted_data[in_country])
     {
       var value_region="South Europe"
       var value_country_2=splitted_data[in_country];
       var value_fat=splitted_data[in_fat];
       var value_protein=splitted_data[in_protein];
       var value_carbohydrates=splitted_data[in_carbohydrate];

       if(value_fat=="")
       {
         value_fat=0;
       }
       if(value_protein=="")
       {
         value_protein=0;
       }
       if(value_carbohydrates=="")
       {
         value_carbohydrates=0;
       }
       if(europe[regions.indexOf(value_region)]==null)
       {
         europe[regions.indexOf(value_region)] = {
           "region": value_region,
           "fat" : parseFloat(value_fat),
           "proteins" : parseFloat(value_protein),
           "carbohydrates": parseFloat(value_carbohydrates)
         };
       }
       else
       {
         europe[regions.indexOf(value_region)].fat=europe[regions.indexOf(value_region)].fat+parseFloat(value_fat);
         europe[regions.indexOf(value_region)].proteins=europe[regions.indexOf(value_region)].proteins+parseFloat(value_protein);
         europe[regions.indexOf(value_region)].carbohydrates=europe[regions.indexOf(value_region)].carbohydrates+parseFloat(value_carbohydrates);
       }
     }
   }
   //console.log(lines_1);
//a.writeFile('FoodFacts/json_Fat_protein_carbohydrates.json',JSON.stringify(europe),'utf-8');
}//else


   //a.writeFile("FoodFacts/json_Sugar_salt1.json",JSON.stringify(ND_final_sugar_salt[ND_final_sugar_salt.length-1]),'utf-8');
 }).on('close',function(){
   the_final_most.push(UK_the_final[UK_the_final.length-1]);
   the_final_most.push(FR_the_final[FR_the_final.length-1]);
   the_final_most.push(US_the_final[US_the_final.length-1]);
   the_final_most.push(CA_the_final[CA_the_final.length-1]);
   the_final_most.push(AS_the_final[AS_the_final.length-1]);
   the_final_most.push(ND_the_final[ND_the_final.length-1]);
   the_final_most.push(GE_the_final[GE_the_final.length-1]);
   the_final_most.push(SP_the_final[SP_the_final.length-1]);
   the_final_most.push(SA_the_final[SA_the_final.length-1]);


    a.writeFile("FoodFacts/json_Sugar_salt_new_1.json",JSON.stringify(the_final_most),'utf-8');

    a.writeFile('FoodFacts/json_Fat_protein_carbohydrates_new_1.json',JSON.stringify(europe),'utf-8');

 });
