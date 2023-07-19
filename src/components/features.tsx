import FeatureCard from "./feature-card"

function Features() {
  return (
    <>
        <div className="text-center text-lg  bg-blue-200 p-5 rounded-3xl">
            <h1 className="text-4xl font-bold text-blue-400 my-5">Every Thing You Need</h1> 
            <div className="flex justify-evenly my-5">
                <FeatureCard desc="Card-1" />
                <FeatureCard desc="Card-1" />
                <FeatureCard desc="Card-1" />
            </div>
            <p className="my-2">Looking fore more? <a href="#" className="underline-offset-1">Please get in touch</a></p>
        </div>
    </>
  )
}

export default Features