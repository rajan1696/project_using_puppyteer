//https://flaviocopes.com/puppeteer/

let puppyteer=require("puppeteer");

let browerlaunch=puppyteer.launch({

    headless:false,// headless is used for to see the brower if we used headless equal to true than your brower is not visible

    defaultViewport:null,//Set the defaultViewport option to null as above to disable the 800x600 resolution. It takes the max resolution then.


    args: ["--start-maximized", "--disable-notifications"]
});

let page;
browerlaunch.then(function(browerinstace)
{
    let newpage=browerinstace.newPage();//open new tap

    return newpage;
}).then(function(url)
{
    page=url;

    let urlofGoogle=url.goto("https://www.google.com/");//search url 

    return urlofGoogle;
}).then(function()
{
    let newpage=page.type("input[title='Search']","you tube");//keyboard data entry

    return newpage;
}).then(function(){

    let enter=page.keyboard.press('Enter',{delay:100});//press specific key like enter 

    return enter;
}).then(function(){

    let waitforpage=page.waitForSelector(".LC20lb.DKV0Md",{visible : true});////wait for element to be visible on the page-> whenver you go to a new page

    return waitforpage;
}).then(function(){

    let clickonYouTube=page.click(".LC20lb.DKV0Md");//mouse function(click)

    return clickonYouTube;
}).then(function(){

    let waitforsign=page.waitForSelector("#button.style-scope.ytd-button-renderer.style-suggestive.size-small",{visible:false});

    return waitforsign;
}).then(function(){

    let clickonsign=page.click("#button.style-scope.ytd-button-renderer.style-suggestive.size-small");

    return clickonsign;
}).then(function(){
     let emailid=page.waitForSelector("input[type='email']",{visible:true});//wait for login

     return emailid;
}).then(function()
{//first create sign up on you tube than you enter the email id
    let signin=page.type("input[type='email']","r**********j15@gmail.com",{delay:100});//keyboard data entry (enter your email id)

    return signin;
}).then(function(){

    let enter=page.keyboard.press('Enter',{delay:100});//press specific key like enter etc

    return enter;
}).then(function(){
    let waitforpassword=page.waitForSelector("input[type='password']",{visible:true});//wait for password page

    return waitforpassword;
}).then(function()
{
   let enterpassword=page.type("input[type='password']","r******6",{delay:100});//enter password

   return enterpassword;
}).then(function(){

   let enter=page.keyboard.press('Enter',{delay:100});//press specific key like enter etc

   return enter;
}).then(function(){

    let waitforsearch=page.waitForSelector(".ytd-searchbox-spt input[name='search_query']",{visible:true});

    return waitforsearch;
}).then(function()
{
    let searchsong=page.type(".ytd-searchbox-spt input[name='search_query']","brown munde song",{delay:100});//search song on you tube

    return searchsong;
}).then(function(){

    let pressenterr=page.keyboard.press('Enter',{delay:100});//press specific key like enter etc

    return pressenterr;
}).then(function(){

    let waitforpage1=page.waitForSelector(".style-scope.ytd-video-renderer");//wait for song

    return waitforpage1;
}).then(function(){

    let clickonsong=page.click(".style-scope.ytd-video-renderer");//click on song

    return clickonsong;
}).then(function(){

    let waitforcomment=page.waitForSelector("#contenteditable-root.style-scope.yt-formatted-string",{visible:true});

    return waitforcomment;
}).then(function(){

    let clickoncommentbox=page.click("#contenteditable-root.style-scope.yt-formatted-string");

    return clickoncommentbox;
}).then(function()
{
   let typecomment=page.type("#contenteditable-root.style-scope.yt-formatted-string","I like this song so much because its my fav song",{delay:50});//write comment here

   return typecomment;
}).then(function () {
    // page element -> cheerio 
    let allLisPromise = page.waitForSelector("#button.style-scope.ytd-button-renderer.style-primary.size-default",{visible:true});
    return allLisPromise;
}).then(function () {
    let clickoncommentbox=page.click("#button.style-scope.ytd-button-renderer.style-primary.size-default");//if you write comment than click on "comment"

    return clickoncommentbox;
})//#contenteditable-root.style-scope.yt-formatted-string
//#button.style-scope.ytd-button-renderer.style-primary.size-default
//#button.style-scope.ytd-button-renderer.style-primary.size-default