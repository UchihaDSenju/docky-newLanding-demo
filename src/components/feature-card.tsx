

function FeatureCard(props : {
    icon ?: string,
    desc : string
}) {
  return (
    <div className="flex bg-gray-500 w-[496px] rounded-[84px] h-[100px] ">
        <div className="bg-gray-300 rounded-[84px] w-[100px] h-[100px] flex items-center justify-center">c1{props.icon}</div>
        <div className="flex items-center w-1/2 justify-center">{props.desc}</div>
    </div>
  )
}

export default FeatureCard