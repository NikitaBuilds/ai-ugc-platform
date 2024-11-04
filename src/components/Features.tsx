import React from "react";

export default function FeatureGrid() {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-blue-600">
          AI-Powered Content Creation
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Create Converting Content in Minutes
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600">
          Powerful AI tools to help you create engaging content that converts
          your audience into customers.
        </p>

        <div className="mt-16 grid gap-4 sm:mt-20 lg:grid-cols-3 lg:grid-rows-2">
          {/* Hook Generator - Large Left Panel */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 max-lg:text-center">
                  Hook Generator
                </h3>
                <p className="mt-4 text-base text-gray-600 max-lg:text-center">
                  Create scroll-stopping hooks using AI-powered templates and
                  data-driven suggestions
                </p>
                <ul className="mt-8 space-y-4 text-base text-gray-600">
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 flex-none text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Industry-specific hooks
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 flex-none text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Problem-solution frameworks
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 flex-none text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Question-based hooks
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 flex-none text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Data-driven suggestions
                  </li>
                </ul>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size]">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-lg bg-gray-900 shadow-2xl">
                  <div className="p-4 bg-gray-800">
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <div className="space-y-4">
                        <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
                        <div className="h-4 w-1/2 bg-blue-500 rounded"></div>
                        <div className="space-y-2">
                          <div className="h-3 w-full bg-gray-700 rounded"></div>
                          <div className="h-3 w-5/6 bg-gray-700 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>

          {/* Script Templates - Top Right */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 max-lg:text-center">
                  Script Templates
                </h3>
                <p className="mt-4 text-base text-gray-600 max-lg:text-center">
                  Access proven templates for every industry and growth stage
                </p>
                <ul className="mt-8 space-y-4 text-base text-gray-600">
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 flex-none text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Industry-specific templates
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 flex-none text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Stage-specific templates
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 flex-none text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Conversion frameworks
                  </li>
                </ul>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>

          {/* Content Strategy - Middle Right */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 max-lg:text-center">
                  Content Strategy
                </h3>
                <p className="mt-4 text-base text-gray-600 max-lg:text-center">
                  Build a data-backed content strategy that converts
                </p>
                <ul className="mt-8 space-y-4 text-base text-gray-600">
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 flex-none text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Key message identification
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 flex-none text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Content pillar creation
                  </li>
                </ul>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>

          {/* Calendar Generator - Large Right Panel */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 max-lg:text-center">
                  Calendar Generator
                </h3>
                <p className="mt-4 text-base text-gray-600 max-lg:text-center">
                  Generate strategic content calendars with platform-specific
                  guidance
                </p>
                <ul className="mt-8 space-y-4 text-base text-gray-600">
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 flex-none text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Content calendar generator
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 flex-none text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Platform guidance
                  </li>
                </ul>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="grid grid-cols-7 gap-px bg-gray-800/40">
                    {Array.from({ length: 31 }).map((_, i) => (
                      <div key={i} className="aspect-square bg-gray-900 p-2">
                        <div className="h-full rounded bg-gray-800"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
