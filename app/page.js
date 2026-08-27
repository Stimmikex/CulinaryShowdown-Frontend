import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowToPlay from '../components/HowToPlay';
import Teams from '../components/Teams';
import Rounds from '../components/Rounds';
import MediaGallery from '../components/MediaGallery';
import Achievements from '../components/Achievements';
import Wishlist from '../components/Wishlist';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowToPlay />
      <Teams />
      <Rounds />
      <MediaGallery />
      <Achievements />
      <Wishlist />
      <Footer />
    </main>
  );
}
