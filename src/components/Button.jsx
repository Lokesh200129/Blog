function Button ({
    childern, 
    type="button", 
    bgColour='bg-blue-500', 
    textColour="text-white",
    className="",
     ...props 
    }){
    return (
        <button className={`${className} ${textColour} ${bgColour}`} {...props}>{childern}</button>
    )
}