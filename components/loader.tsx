import { useState, useEffect } from "react";

const VideoLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3秒後にローディングを終了する（動画の長さに応じて調整）
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black transition-opacity duration-500 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src="/videos/animation-2.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoLoader;
