import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";

interface InfoTextProps {
  children: string;
}

const InfoText: React.FC<InfoTextProps> = ({ children }) => <p className="infoText">{children}</p>;

const HomePage: React.FC = () => (
  <div className="text-white flex flex-col items-center justify-center h-screen">
    {/* Main heading */}
    <h1 className="text-5xl font-bold mb-20 px-2">ChatBot</h1>

    {/* Icons with example and limitations */}
    <div className="flex space-x-2 text-center">
      {/* Examples icon and questions */}
      <div>
        {/* Icon and heading for examples */}
        <div className="flex flex-col items-center justify-center mb-5">
          <SunIcon className="h-8 w-8" />
          <h2>Examples</h2>
        </div>

        {/* List of example questions */}
        <div className="space-y-2">
          <InfoText>&quot;Explain Something to me&quot;</InfoText>
          <InfoText>&quot;What is the difference between a dog and a cat?&quot;</InfoText>
          <InfoText>&quot;What is the colour of the Sun?&quot;</InfoText>
        </div>
      </div>

      {/* Feature requests icon and examples */}
      <div>
        {/* Icon and heading for feature requests */}
        <div className="flex flex-col items-center justify-center mb-5">
          <BoltIcon className="h-8 w-8" />
          <h2>Feature Requests</h2>
        </div>

        {/* List of feature request examples */}
        <div className="space-y-2">
          <InfoText>&quot;Change the OpenAI Model to use&quot;</InfoText>
          <InfoText>&quot;Messages are stored in Firebase&lsquo;s Firestone&quot;</InfoText>
          <InfoText>&quot;Hot Toast notifications when OpenAI is thinking!&quot;</InfoText>
        </div>
      </div>

      {/* Limitations icon and list */}
      <div>
        {/* Icon and heading for limitations */}
        <div className="flex flex-col items-center justify-center mb-5">
          <ExclamationTriangleIcon className="h-8 w-8" />
          <h2>Limitations</h2>
        </div>

        {/* List of limitations */}
        <div className="space-y-2">
          <InfoText>&quot;May occasionally generate incorrect information&quot;</InfoText>
          <InfoText>
            &quot;May occasionally produce harmful instructions or biased content&quot;
          </InfoText>
          <InfoText>&quot;Limited knowledge of world and events after 2021&quot;</InfoText>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
