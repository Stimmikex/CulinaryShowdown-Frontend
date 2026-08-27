import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Trailer from '../components/Trailer';
import HowToPlay from '../components/HowToPlay';
import Teams from '../components/Teams';
import Rounds from '../components/Rounds';
import MediaGallery from '../components/MediaGallery';
import Achievements from '../components/Achievements';
import DownloadGame from '../components/DownloadGame';
import Wishlist from '../components/Wishlist';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Trailer />
      <HowToPlay />
      <Teams />
      <Rounds />
      <MediaGallery />
      <Achievements />
      <DownloadGame />
      <Wishlist />
      <Footer />
    </main>
  );
}
