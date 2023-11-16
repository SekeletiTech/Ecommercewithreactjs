import {
  Hero, popularProducts, footer, Reviews, services,
  Subscribe, superQuality, specialOffer,
} from "./sections";

import Nav from './Components/Nav';




const App = () => {
  return (
    <main className="relative">
      <Nav />

      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>

      <section className="padding">
        <popularProducts />
      </section>

      <section className="padding">
        <superQuality />
      </section>

      <section className="padding-x py-10">
        <services />
      </section>

      <section className="padding">
        <specialOffer />
      </section>

      <section className="bg-pale-blue padding">
        <Reviews />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>

      <section className="bg-black padding-x padding-t pb-8">
        <footer />
      </section>
    </main>
  )
}

export default App
