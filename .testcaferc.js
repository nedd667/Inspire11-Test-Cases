module.exports=
{
    skipJsErrors : true,
    disableNativeAutomation : "true",
    disablePageReloads : true,
    speed : 0.6,
    hooks:{
        test:{
            before:
            async (t)=>{
                await t.maximizeWindow()
            }
        }
    }
}