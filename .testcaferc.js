module.exports=
{
    skipJsErrors : true,
    disableNativeAutomation : "true",
    disablePageReloads : true,
    speed : 0.8,
    hooks:{
        test:{
            before:
            async (t)=>{
                await t.maximizeWindow()
            }
        }
    }
}