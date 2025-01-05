import Nav from "../../components/Nav";
import Cards from "../../components/contact/Cards";

export default function Contact() {
  return (
    <div>
      <Nav />
      <h1 className="text-center text-5xl py-10 font-semibold tracking-tight text-gray-900 xs:text-6xl sm:text-7xl sm:pb-10">
        We want to hear from you!
      </h1>
      <Cards />
    </div>
  );
}
