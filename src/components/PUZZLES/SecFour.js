import Biology from "./Biology";
import Physics from "./Physics";
import Chemistry from "./Chemisty";
import General from "./General";
export default function SecFour() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 bg-gray-400">
      <Biology />
      <Chemistry />
      <Physics />
      <General/>
    </div>
  );
}
