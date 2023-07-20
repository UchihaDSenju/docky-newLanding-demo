

function FeatureCard(props : {
    index ?: number,
    icon ?: string,
    desc : string
}) {
  return (
    <div className="flex bg-gray-200  rounded-[84px] h-[100px] ">
        <div className="bg-white rounded-[84px] w-[100px] h-[100px] flex items-center justify-center"><img src={props.icon} alt="" /></div>
        <div className="flex items-center w-[65%] justify-center font-bold text-xl">{props.desc}</div>
    </div>
  )
}

export default FeatureCard