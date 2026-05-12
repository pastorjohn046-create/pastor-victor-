/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Sermons from "./components/Sermons";
import Ministries from "./components/Ministries";
import PrayerRequest from "./components/PrayerRequest";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Sermons />
        <Ministries />
        <PrayerRequest />
      </main>
      <Footer />
    </div>
  );
}

