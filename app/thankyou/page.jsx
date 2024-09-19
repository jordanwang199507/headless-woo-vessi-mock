import { CustomerReviews } from "@/app/_sections";

export default function Thankyou() {
  return (
    <main className="relative pt-[88px]">
      <section className="padding-sm bg-dark-gray">
        <h3 className="font-fascinate text-center text-4xl text-white">
          Thank you
        </h3>
      </section>
      <section className="padding bg-pale-blue mt-6">
        <CustomerReviews />
      </section>
    </main>
  );
}
