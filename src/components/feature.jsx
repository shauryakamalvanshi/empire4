"use client"

import Image from 'next/image'

const features = [
  {
    name: 'Strategy.',
    description:
      'Lay the groundwork for success with strategic planning',
    icon: "/strategy.png",
  },
  {
    name: 'Design and specification.',
    description: 'Creativity meets precision in our design phase.',
    icon: "/ux.png",
  },
  {
    name: 'produdtion and desigred result.',
    description: 'Code becomes reality with our skilled developers at work',
    icon: "/project.png",
  },
  {
    name: 'Registration with ISP.',
    description: 'Navigate ISP intricacies to secure seamless digital accessibility.',
    icon: "/website.png",
  },
  {
    name: 'Launch.',
    description: 'Orchestrate a grand unveiling, propelling your creation into the digital cosmos.',
    icon: "/rocket.png",
  },
]

export default function Feature() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Phases of our development</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione. */}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {/* <feature.icon  /> */}
                      <Image src={feature.icon} width={1000} height={100} alt="ggg" className="absolute left-0 top-2 h-8 w-8 text-indigo-600" aria-hidden="true"/>
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
