const puppeteer=require("puppeteer");
const { createClient } =require("@supabase/supabase-js");

const supabase = createClient('https://tnwujkrubiwxbffuqmyw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRud3Vqa3J1Yml3eGJmZnVxbXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1MjE2MzksImV4cCI6MjAxMDA5NzYzOX0.Fs1ufvT5hWNGJERridQkJqui2CURmUrLbXW5c_43Wgo');
const tableName = 'movie';
const tableNameSeries = 'series';


    (async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto("https://play.google.com/store/movies?hl=en_IN&gl=US");
       
        
        const grabdata = await page.evaluate(() => {
         
            const img = document.querySelectorAll(".TjRVLb img");
            const title = document.querySelectorAll( ".Epkrse");
            const rating= document.querySelectorAll(".LrNMN");
            const data=[];
            img.forEach((element,index)=>{
            data.push({
                img:element.src,
                title:title[index].textContent,
                rating:rating[index].textContent

            });
            });
            return data;

           
    
        
        });
        const { data, error } = await supabase
  .from(tableName)
  .insert(grabdata);
        console.log(grabdata);

        if (error) {
            console.error('Error inserting data:', error);
          } else {
            console.log('Data inserted successfully:', data);
          }
          await browser.close();
})();




(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://play.google.com/store/movies/category/TV?hl=en_IN&gl=US");
   
    
    const grabdataseries = await page.evaluate(() => {
     
        const img = document.querySelectorAll(".TjRVLb img");
        const title = document.querySelectorAll( ".Epkrse ");
        const rating= document.querySelectorAll(".LrNMN");
        const data=[];
        img.forEach((element,index)=>{
        data.push({
            img:element.src,
            title:title[index].textContent,
            rating:rating[index].textContent

        });
        });
        return data;

       

    
    });
    const { data, error } = await supabase
.from(tableNameSeries)
.insert(grabdataseries);
    console.log(grabdataseries);

    if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully:', data);
      }
      await browser.close();
})();