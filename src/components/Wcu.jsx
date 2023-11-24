import Image from 'next/image';

const features = [
  {
    name: ' Web Design and Development',
    description:
      'Our agency provides entrancing, responsive websites describing your brand story, boost engagement, build trust, and drive conversions.',
    icon: "/app1.png",
  },
  {
    name: 'Search Engine Optimization',
    description:
      'White-hat SEO techniques to optimize visibility and position your website at the top of Search Engine Ranking Pages (SERP). ',
    icon: "/seo.png",
  },
  {
    name: 'App Development',
    description:
      "Want to create the next big thing in the app world? Our app development services captivating users with seamless swiping, tapping, and delightful download",
    icon: "/app9.png",
  },
  {
    name: 'WordPress Development ',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: "/app2.png",
  },
];

export default function Wcu() {
  return (
    <div className="bg-[#111926] rounded-lg py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Services
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            Whether you&apos;re looking for turnkey solutions to manage digital assets or web services specific to your business requirements, we&apos;ve got you covered.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                    {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                    <Image width={1000} height={1000} src={feature.icon} alt="aaa" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
