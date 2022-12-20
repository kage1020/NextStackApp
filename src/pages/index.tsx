import Footer from '@components/Footer'
import Head from '@components/Head'

export default function Home() {
  return (
    <div className='px-8'>
      <Head />

      <main className='flex min-h-screen flex-1 flex-col items-center justify-center py-16'>
        <h1 className='m-0 text-center text-[4rem] leading-[1.15]'>
          Welcome to{' '}
          <a
            className='text-[#0070f3] no-underline hover:underline focus:underline active:underline'
            href='https://nextjs.org'
          >
            Next.js!
          </a>
        </h1>

        <p className='my-16 text-center text-[1.5rem] leading-[1.5]'>
          Get started by editing{' '}
          <code className='rounded-[5px] bg-[#fafafa] p-3 font-code text-[1.1rem] dark:bg-[#111]'>
            pages/index.tsx
          </code>
        </p>

        <div className='flex w-auto max-w-[800px] flex-row flex-wrap items-center justify-center max-[600px]:w-full max-[600px]:flex-col'>
          <a
            href='https://nextjs.org/docs'
            className='m-4 max-w-[300px] rounded-[10px] border border-[#eaeaea] p-6 text-left text-inherit no-underline transition-colors duration-150 ease-[ease] hover:border-[#0070f3] hover:text-[#0070f3] focus:border-[#0070f3] focus:text-[#0070f3] active:border-[#0070f3] active:text-[#0070f3] dark:border-[#222]'
          >
            <h2 className='mb-4 text-[1.5rem]'>Documentation &rarr;</h2>
            <p className='m-0 text-[1.25rem] leading-[1.5]'>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href='https://nextjs.org/learn'
            className='m-4 max-w-[300px] rounded-[10px] border border-[#eaeaea] p-6 text-left text-inherit no-underline transition-colors duration-150 ease-[ease] hover:border-[#0070f3] hover:text-[#0070f3] focus:border-[#0070f3] focus:text-[#0070f3] active:border-[#0070f3] active:text-[#0070f3]'
          >
            <h2 className='mb-4 text-[1.5rem]'>Learn &rarr;</h2>
            <p className='m-0 text-[1.25rem] leading-[1.5]'>
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className='m-4 max-w-[300px] rounded-[10px] border border-[#eaeaea] p-6 text-left text-inherit no-underline transition-colors duration-150 ease-[ease] hover:border-[#0070f3] hover:text-[#0070f3] focus:border-[#0070f3] focus:text-[#0070f3] active:border-[#0070f3] active:text-[#0070f3]'
          >
            <h2 className='mb-4 text-[1.5rem]'>Examples &rarr;</h2>
            <p className='m-0 text-[1.25rem] leading-[1.5]'>
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
            className='m-4 max-w-[300px] rounded-[10px] border border-[#eaeaea] p-6 text-left text-inherit no-underline transition-colors duration-150 ease-[ease] hover:border-[#0070f3] hover:text-[#0070f3] focus:border-[#0070f3] focus:text-[#0070f3] active:border-[#0070f3] active:text-[#0070f3]'
          >
            <h2 className='mb-4 text-[1.5rem]'>Deploy &rarr;</h2>
            <p className='m-0 text-[1.25rem] leading-[1.5]'>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
