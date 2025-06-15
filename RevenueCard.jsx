export function RevenueCard({
    title,
    orderCount,
    amount,
    className=""
}){
    console.log("Applied className:", className);
    return(
        <div className={`${className}  rounded shadow-md  p-4 bg-white `} >
            <div className="text-grey-700">
                {title }
                ?
            </div>
            <div className='flex justify-between p-2'>
                <div className=''>
                    ₹ {amount}
                </div>
                <div>
                    {orderCount ? <div>
                        {orderCount} Orders {">"}
                    </div> : null}
                </div>
            </div>
        </div>
    )
}