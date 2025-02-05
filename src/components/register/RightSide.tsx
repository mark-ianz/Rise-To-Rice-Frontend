import man_recycling from "@/assets/Young man bringing a bottle for recycling.png";

export default function RightSide() {
  return (
    <div className="w-1/2 rounded-r-xl bg-secondary-light-2 flex items-center justify-center flex-col px-20 py-4">
      <div className="w-96">
        <img
          className="w-full h-auto"
          src={man_recycling}
          alt="Young man bringing a bottle for recycling"
        />
      </div>
      <p className="text-2xl text-center">
        Join our Solid Waste Management Program and be a part of the movement
        toward a cleaner, greener community!
      </p>
      <p className="text-sm mt-auto">
        Together, we can reduce waste, protect the environment, and create a
        healthier future for everyone.
      </p>
    </div>
  );
}
