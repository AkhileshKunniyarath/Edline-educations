import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import Colleges from '@/components/Colleges';
import Services from '@/components/Services';
import AdmissionProcess from '@/components/AdmissionProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import RegistrationForm from '@/components/RegistrationForm';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Courses />
      <Colleges />
      <Services />
      <AdmissionProcess />
      <WhyChooseUs />
      <Testimonials />
      <RegistrationForm />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
