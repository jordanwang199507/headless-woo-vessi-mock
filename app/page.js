import Image from "next/image";
import { HeroServer, PopularProductsServer } from "@/app/_utils";
import {
  Hero,
  PopularProducts,
  Features,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
} from "./_sections";

export default function Home() {
  return (
    <main className="relative">
      <section className="xl:padding-l wide:padding-r padding-b">
        <HeroServer />
      </section>
      <section className="sm:px-16 px-8 sm:py-12 py-8">
        <PopularProductsServer />
      </section>
      <section className="padding">
        <Features />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
    </main>
  );
}
