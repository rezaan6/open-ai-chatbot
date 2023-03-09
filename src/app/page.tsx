import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-20 px-2">ChatBot</h1>
      <div className="flex space-x-2 text-center">
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">&quot;Explain Something to me&quot;</p>
            <p className="infoText">&quot;What is the difference between a dog and a cat?&quot;</p>
            <p className="infoText">&quot;What is the colour of the Sun?&quot;</p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">&quot;Change the OpenAI Model to use&quot;</p>
            <p className="infoText">
              &quot;Messages are stored in Firebase&lsquo;s Firestone&quot;
            </p>
            <p className="infoText">&quot;Hot Toast notifications when OpenAI is thinking!&quot;</p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">&quot;May occasionally generate incorrect information&quot;</p>
            <p className="infoText">
              &quot;May occasionally produce harmful instructions or baised content&quot;
            </p>
            <p className="infoText">&quot;Limited knowledge of world and events afer 2021&quot;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
