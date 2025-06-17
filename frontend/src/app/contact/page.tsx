import Hero from './components/hero';
import Form from './components/form';

export default async function Page() {
  return (
    <>
      <Hero heading="Contact" />
      <div className="mb-20 max-w-[1280px] mx-auto">
        <Form />
      </div>
    </>
  );
}
