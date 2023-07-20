import FeatureCard from "./feature-card"
import { features } from "./jsonData/data"

function Features() {
  return (
    <>
        <div className="text-center text-lg  bg-blue-200 p-5 rounded-3xl">
            <h1 className="text-4xl font-bold text-blue-400 my-5">Every Thing You Need</h1> 
            <div className=" justify-evenly my-5 grid grid-cols-3 gap-5 gap-x-5">
                {features.map((feature, index) => {
                  return(
                    <FeatureCard index={index} icon={feature.icon} desc={feature.desc} />
                  )
                })}
            </div>
            <p className="my-2">Looking fore more? <a href="#" className="underline-offset-1">Please get in touch</a></p>
        </div>
    </>
  )
}

export default Features