import FeatureCard from "./feature-card"

function Features() {
  return (
    <>
        <div className="text-center text-lg">
            <h1>Every Thing You Need</h1> 
            <div className="flex justify-evenly">
                <FeatureCard desc="Card-1" />
                <FeatureCard desc="Card-1" />
                <FeatureCard desc="Card-1" />
            </div>
        </div>
    </>
  )
}

export default Features