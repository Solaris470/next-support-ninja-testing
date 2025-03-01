import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center text-center flex-col items-center space-y-4 mx-auto max-w-2xl px-4 pt-8">
      <h1 className="mb-4  font-extrabold tracking-tight text-4xl text-center lg:text-4xl xl:text-6xl dark:text-white">
        Next.js Enterprise Boilerplate
      </h1>
      <p className="mb-6 font-light leading-relaxed text-gray-500 md:text-lg md:px-2.5 lg:mb-8 lg:text-xl dark:text-gray-400">
        Jumpstart your enterprise project with our feature-packed,
        high-performance Next.js boilerplate! Experience rapid UI development,
        AI-powered code reviews, and an extensive suite of tools for a smooth
        and enjoyable development process.
      </p>
      <div id="btn-gruop" className="flex flex-col sm:flex-row gap-3 sm:gap-2">
        <Link
          href={"https://github.com/Solaris470/next-support-ninja-testing"}
          className="border border-blue-400 bg-blue-400 px-6 py-3 rounded-lg text-white text-lg font-light hover:bg-white hover:text-blue-400"
        >
          Get started
        </Link>
        <Link
          href={"https://vercel.com/new/clone?demo-description=Get%20started%20with%20Next.js%20and%20React%20in%20seconds.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F1aHobcZ8H6WY48u5CMXlOe%2F0f0efe6bd469985b692555fbcad1cc01%2Fnextjs-template.png&demo-title=Next.js%20Boilerplate&demo-url=https%3A%2F%2Fnextjs-template.vercel.app%2F&from=templates&project-name=Next.js%20Boilerplate&repository-name=nextjs-boilerplate&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fnextjs&teamSlug=solaris470s-projects"}
          className="border border-blue-400 px-6 py-3 rounded-lg text-blue-400 text-lg font-light hover:text-white hover:bg-blue-400"
        >
          Deploy Now
        </Link>
      </div>
    </div>
  );
}