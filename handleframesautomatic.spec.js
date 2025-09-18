const{test,expect} =require("@playwright/test");

test("Handle Frames",async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/nested_frames");
    //Switch to frame bottom
    const frameBottom=page.frame({name:"frame-bottom"});
    //Get the text in bottom frame
    const textBottom=await frameBottom.locator("body").textContent();
    
    console.log("Text in bottom frame is: "+textBottom);


    await page.waitForTimeout(5000);
});
