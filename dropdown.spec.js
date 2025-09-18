const {test,expect} =require("@playwright/test");

test("Select Values From Dropdown",async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    /*
    label: select by visible text
    value: select by value
    index: select by index
    */
    await page.locator("#state").selectOption({label:"Goa"})

    //await page.waitForTimeout(1000)

    await page.locator("#state").selectOption({value:"Himachal Pradesh"})

   // await page.waitForTimeout(1000)

    await page.locator("#state").selectOption({index:3})

    //await page.waitForTimeout(3000)

    /*const value=await page.locator("#state").textContent()

    console.log("All dropdown values "+value)

    await expect(value.includes("Kerala")).toBeTruthy()

    */

    let state=await page.$("#state")

    let allElements=await state.$$("option")

    let ddStatus=false

    for(let i=0;i<allElements.length;i++)
    {
        let element=allElements[i]

        let value=await element.textContent()
        
        console.log("Value from dropdown using for loop "+value)

        if(value.includes("Rajasthan"))
        {
            ddStatus=true
            break
        }    
    }

    await expect(ddStatus).toBeTruthy()
    
    await page.locator("#hobbies").selectOption(["Playing","Swimming"])

    await page.waitForTimeout(3000)

});