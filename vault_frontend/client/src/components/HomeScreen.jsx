
import Girl from '../assets/girl.jpg'; 

function HomeScreen() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-700 font-serif">
      <div className="flex justify-between w-full max-w-screen-xl">
        <div className="text-white p-8">
          <h1 className="text-2xl mb-4 font-bold">Connect wallet to log in</h1>
          <p className="text-lg mb-4">SECURE SNAP : Protecting your memories with advanced security measures.</p>
          <p className="text-lg mb-4">We use state-of-the-art encryption to keep your photos safe and secure.</p>
          <p className="text-lg">Your privacy is our priority.</p>
        </div>
        <div>
          <img src={Girl} alt="photo" className="h-96" />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
