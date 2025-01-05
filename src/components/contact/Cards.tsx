import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Card from "../Card";

export default function Cards() {
  return (
    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          icon={FaMapMarkerAlt}
          title="Visit us in person!"
          description="Our hours of operation are 9:00AM - 4:30PM. We look forward to seeing you and assisting with all your auto part needs."
          address="13741 S Ashland Ave, Riverdale, IL"
          buttonText="Get Directions"
          buttonLink="https://maps.google.com/?daddr=13741+S+Ashland+Ave,+Riverdale,+IL"
          target="_blank"
        />
        <Card
          icon={FaPhoneAlt}
          title="Give us a call!"
          description="Chat with a representative now! Our team is available to answer your questions and help you find the right parts for your vehicle."
          buttonText="+1 (708) 389-1456"
          buttonLink="tel:+17083891456"
          target="_self"
        />
        <Card
          icon={FaEnvelope}
          title="Send us an Email!"
          description="Have questions? Our team of experts is here to help you with all your auto part needs. We will get back to you as soon as possible."
          buttonText="Email"
          buttonLink="mailto:Jimwatson@abcap.com"
          target="_self"
        />
      </div>
    </div>
  );
}
